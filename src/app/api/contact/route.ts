import { NextRequest, NextResponse } from 'next/server';
import {
  appendContactToGoogleSheet,
  generateRequestId,
  getVietnamTimeString,
} from '@/lib/googleSheets';
import { ContactSubmissionPayload } from '@/types';

// In-memory rate limiting map (IP -> timestamp)
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'anonymous';
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    // Block spam: prevent multiple requests within 3 seconds
    if (lastRequest && now - lastRequest < 3000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Vui lòng chờ một chút trước khi gửi lại yêu cầu để tránh trùng lặp.',
        },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await req.json();

    // 1. Honeypot check for bots
    if (body._honey && String(body._honey).trim() !== '') {
      return NextResponse.json(
        { success: true, message: 'Yêu cầu đã được tiếp nhận.' },
        { status: 200 }
      );
    }

    // 2. Validate required fields
    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();
    const service = String(body.service || 'Tư vấn giải pháp tổng thể').trim();
    const phone = body.phone ? String(body.phone).trim() : '';
    const budget = body.budget ? String(body.budget).trim() : 'Chưa xác định';
    const referralSource = body.referralSource ? String(body.referralSource).trim() : 'Trực tiếp';
    const sourceChannel = body.sourceChannel === 'Chatbot' ? 'Chatbot' : 'Website';
    const pageSource = body.pageSource ? String(body.pageSource).trim() : '/';

    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng nhập họ và tên hợp lệ (tối thiểu 2 ký tự).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng nhập địa chỉ email hợp lệ để nhận phản hồi.' },
        { status: 400 }
      );
    }

    if (!message || message.length < 5) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng nhập nội dung yêu cầu cụ thể (tối thiểu 5 ký tự).' },
        { status: 400 }
      );
    }

    if (phone && !/^[0-9+().\s-]{8,20}$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: 'Số điện thoại không đúng định dạng. Vui lòng kiểm tra lại.' },
        { status: 400 }
      );
    }

    // 3. Construct payload with metadata
    const requestId = generateRequestId();
    const submittedAt = getVietnamTimeString();

    const payload: ContactSubmissionPayload = {
      requestId,
      submittedAt,
      fullName,
      phone,
      email,
      service,
      budget,
      message,
      referralSource,
      pageSource,
      status: 'Mới',
      sourceChannel,
    };

    // 4. Save to Google Sheets (or fallback to local file)
    const result = await appendContactToGoogleSheet(payload);

    return NextResponse.json({
      success: true,
      requestId: result.requestId,
      mode: result.mode,
      message: result.message,
      submittedAt,
    });
  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    const msg = error instanceof Error ? error.message : 'Đã có lỗi hệ thống xảy ra';
    return NextResponse.json(
      {
        success: false,
        error: `Không thể gửi thông tin vào lúc này (${msg}). Vui lòng liên hệ trực tiếp qua email dev.fullstack.vn@gmail.com`,
      },
      { status: 500 }
    );
  }
}
