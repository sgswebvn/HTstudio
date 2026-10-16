import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { SHEET_HEADERS } from '@/lib/googleSheets';

export async function GET() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const googleClientId = process.env.GOOGLE_CLIENT_ID;

  const checks = {
    hasSheetId: !!sheetId,
    hasServiceAccountEmail: !!serviceEmail,
    hasServiceAccountKey: !!privateKey,
    hasWebhookUrl: !!webhookUrl,
    hasGoogleClientId: !!googleClientId,
  };

  // If service account is configured, attempt connection check
  let connectionStatus: 'connected' | 'not_configured' | 'error' = 'not_configured';
  let message = 'Chưa cấu hình tài khoản Google Service Account hoặc Google Sheet ID.';
  let sheetTitle = null;

  if (sheetId && serviceEmail && privateKey) {
    try {
      if (privateKey.includes('\\n')) {
        privateKey = privateKey.replace(/\\n/g, '\n');
      }

      const auth = new google.auth.JWT({
        email: serviceEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const metadata = await sheets.spreadsheets.get({
        spreadsheetId: sheetId,
      });

      connectionStatus = 'connected';
      sheetTitle = metadata.data.properties?.title || 'Untitled Spreadsheet';
      message = `Kết nối thành công tới bảng tính: "${sheetTitle}"`;
    } catch (err: unknown) {
      connectionStatus = 'error';
      const errMsg = err instanceof Error ? err.message : String(err);
      message = `Lỗi kết nối tới Google Sheets: ${errMsg}`;
    }
  } else if (webhookUrl) {
    connectionStatus = 'connected';
    message = 'Đã cấu hình Google Apps Script Webhook URL.';
  }

  return NextResponse.json({
    status: connectionStatus,
    message,
    sheetTitle,
    expectedHeaders: SHEET_HEADERS,
    environmentChecks: {
      GOOGLE_SHEET_ID: checks.hasSheetId ? 'Đã cấu hình' : 'Chưa cấu hình',
      GOOGLE_SERVICE_ACCOUNT_EMAIL: checks.hasServiceAccountEmail
        ? 'Đã cấu hình'
        : 'Chưa cấu hình',
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: checks.hasServiceAccountKey
        ? 'Đã cấu hình'
        : 'Chưa cấu hình',
      GOOGLE_SHEETS_WEBHOOK_URL: checks.hasWebhookUrl ? 'Đã cấu hình' : 'Chưa cấu hình',
      GOOGLE_CLIENT_ID: checks.hasGoogleClientId ? 'Đã có sẵn trong .env' : 'Chưa cấu hình',
    },
    setupGuide: {
      step1: 'Tạo Google Cloud Project tại https://console.cloud.google.com/',
      step2: 'Bật Google Sheets API trong mục APIs & Services',
      step3: 'Tạo Service Account, tải file JSON credentials',
      step4: 'Tạo Google Sheet mới với 12 cột (A -> L) theo cấu trúc mẫu',
      step5: 'Chia sẻ Google Sheet với email của Service Account (quyền Editor)',
      step6: 'Điền GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY vào file .env',
    },
  });
}
