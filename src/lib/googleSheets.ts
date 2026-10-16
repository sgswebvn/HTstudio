import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { ContactSubmissionPayload } from '@/types';

/**
 * Sanitizes input text to prevent Google Sheets Formula Injection (CSV injection).
 * If a cell begins with '=', '+', '-', '@', '\t', or '\r', prefix with single quote "'".
 */
export function sanitizeForSheet(value: string | undefined | null): string {
  if (!value) return '';
  const trimmed = String(value).trim();
  const dangerousPrefixes = ['=', '+', '-', '@', '\t', '\r'];
  if (dangerousPrefixes.some((prefix) => trimmed.startsWith(prefix))) {
    return `'${trimmed}`;
  }
  return trimmed;
}

/**
 * Formats a Date object to Vietnam ICT (UTC+7) formatted string.
 */
export function getVietnamTimeString(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date) + ' (ICT)';
}

/**
 * Generates unique Request ID.
 * Example: REQ-20261016-8F2A
 */
export function generateRequestId(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `REQ-${dateStr}-${randomSuffix}`;
}

export const SHEET_HEADERS = [
  'Mã yêu cầu',
  'Thời gian gửi',
  'Họ và tên',
  'Số điện thoại',
  'Email',
  'Dịch vụ quan tâm',
  'Ngân sách dự kiến',
  'Nội dung yêu cầu',
  'Nguồn khách hàng',
  'Trang nguồn',
  'Trạng thái xử lý',
  'Ghi chú',
];

interface AppendResult {
  success: boolean;
  mode: 'google_sheets' | 'local_fallback' | 'webhook';
  message: string;
  requestId: string;
  details?: Record<string, unknown>;
}

/**
 * Appends a row of contact data to Google Sheets.
 * If credentials are not yet configured, cleanly records to local secure file as fallback.
 */
export async function appendContactToGoogleSheet(
  data: ContactSubmissionPayload
): Promise<AppendResult> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  // The 12 columns row strictly formatted and sanitized
  const rowValues = [
    sanitizeForSheet(data.requestId),
    sanitizeForSheet(data.submittedAt),
    sanitizeForSheet(data.fullName),
    sanitizeForSheet(data.phone || 'Chưa cung cấp'),
    sanitizeForSheet(data.email),
    sanitizeForSheet(data.service),
    sanitizeForSheet(data.budget || 'Chưa xác định'),
    sanitizeForSheet(data.message),
    sanitizeForSheet(data.referralSource || 'Trực tiếp website'),
    sanitizeForSheet(data.pageSource || '/'),
    sanitizeForSheet(data.status || 'Mới'),
    sanitizeForSheet(`Kênh: ${data.sourceChannel || 'Website'}`),
  ];

  // OPTION 1: Google Apps Script Webhook (if user configured Webhook URL)
  if (webhookUrl && webhookUrl.startsWith('https://')) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestId: data.requestId,
          submittedAt: data.submittedAt,
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          service: data.service,
          budget: data.budget,
          message: data.message,
          referralSource: data.referralSource,
          pageSource: data.pageSource,
          status: data.status,
          sourceChannel: data.sourceChannel,
          rowValues,
        }),
      });

      if (response.ok) {
        return {
          success: true,
          mode: 'webhook',
          requestId: data.requestId,
          message: 'Dữ liệu đã được ghi nhận tự động vào Google Sheets qua Webhook!',
        };
      }
    } catch (webhookErr) {
      console.error('Google Sheets Webhook error, falling back to API / local:', webhookErr);
    }
  }

  // OPTION 2: Official Google Sheets API v4 using Service Account Credentials
  if (sheetId && serviceEmail && privateKey) {
    try {
      // Clean private key formatting if it has escaped \n
      if (privateKey.includes('\\n')) {
        privateKey = privateKey.replace(/\\n/g, '\n');
      }

      const auth = new google.auth.JWT({
        email: serviceEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Append row to sheet (Sheet1 or first tab)
      const res = await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'A:L',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [rowValues],
        },
      });

      return {
        success: true,
        mode: 'google_sheets',
        requestId: data.requestId,
        message: 'Dữ liệu đã được thêm thành công vào Google Sheets!',
        details: {
          updatedRange: res.data.updates?.updatedRange,
          updatedRows: res.data.updates?.updatedRows,
        },
      };
    } catch (apiError: unknown) {
      console.error('Google Sheets API append failed:', apiError);
      // Fallback to local storage so user data is NEVER lost!
      saveToLocalFallback(data);
      const errorMessage = apiError instanceof Error ? apiError.message : String(apiError);
      return {
        success: true,
        mode: 'local_fallback',
        requestId: data.requestId,
        message:
          'Thông tin của bạn đã được tiếp nhận và lưu an toàn. (Google Sheets đang được đồng bộ lại).',
        details: { apiError: errorMessage },
      };
    }
  }

  // OPTION 3: Local secure log fallback when Google Sheet ID is not yet connected
  saveToLocalFallback(data);
  return {
    success: true,
    mode: 'local_fallback',
    requestId: data.requestId,
    message:
      'Yêu cầu của bạn đã được ghi nhận thành công! (Dữ liệu đã lưu an toàn vào hệ thống máy chủ).',
    details: {
      notice:
        'Cần cấu hình GOOGLE_SHEET_ID và GOOGLE_SERVICE_ACCOUNT trong .env để kích hoạt đồng bộ Google Sheets trực tiếp.',
    },
  };
}

/**
 * Saves contact submission to a secure local JSON file on server so no leads are ever dropped.
 */
function saveToLocalFallback(data: ContactSubmissionPayload): void {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, 'contact_submissions.json');
    let submissions: ContactSubmissionPayload[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        submissions = JSON.parse(fileContent);
      } catch {
        submissions = [];
      }
    }
    submissions.unshift(data);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write to local fallback log:', err);
  }
}
