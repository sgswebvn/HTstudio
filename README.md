# HT STUDIO — Thiết Kế Website Chuyên Nghiệp & Tool Tự Động Hóa

Website giới thiệu thương hiệu cá nhân **HT STUDIO**, chuyên thiết kế website cho cá nhân, cửa hàng và doanh nghiệp, cùng các phần mềm tự động hóa Facebook & YouTube.

## 🚀 Tính Năng Chính
- **Trang chủ tối giản, trực quan**: Ưu tiên hiển thị ngay các dự án thực tế, hình ảnh banner sắc nét, hạn chế tối đa chữ rườm rà.
- **Trang chi tiết dự án chuyên sâu**: Đường dẫn tĩnh SSG `/du-an/[slug]`, sơ đồ cấu trúc SiteMap Tree trực quan, quy trình tương tác User Flow, thư viện ảnh Lightbox.
- **Tự động lưu khách hàng vào Google Sheets**: Biểu mẫu liên hệ bảo mật, chống spam honeypot, chống injection công thức, đồng bộ 12 cột dữ liệu trực tiếp vào Google Sheets kèm mã yêu cầu riêng.
- **Trợ lý AI HT STUDIO**: Khung chat hỗ trợ 24/7, gợi ý nhanh các câu hỏi thường gặp và form tư vấn trực tiếp.
- **Cụm liên hệ nhanh nổi**: Zalo, Hotline và Facebook luôn hiển thị cố định bên phải màn hình.
- **Thanh điều hướng di động**: Thiết kế drawer trượt từ bên phải mượt mà, tự động đóng khi bấm chọn tab hoặc bấm ra ngoài màn hình.

## 🛠 Công Nghệ Sử Dụng
- **Framework**: Next.js 14.2 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Vanilla CSS animations
- **Icons**: Lucide React
- **API & Tự động hóa**: Google Sheets API v4 (`googleapis`)
- **Tối ưu**: 100% Pre-rendered SSG, OpenGraph, JSON-LD Schema.org, SEO Semantic HTML

## 📦 Cài Đặt & Chạy Môi Trường Cục Bộ

1. Cài đặt các gói phụ thuộc:
```bash
npm install
```

2. Tạo tệp `.env` dựa theo mẫu `.env.example`:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="your-google-sheet-id"
```

3. Chạy môi trường phát triển:
```bash
npm run dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

4. Kiểm tra bản đóng gói sản xuất:
```bash
npm run build
npm run start
```

## 🌐 Triển Khai Lên Vercel (Deployment)
1. Đẩy mã nguồn lên GitHub:
```bash
git remote add origin https://github.com/sgswebvn/HTstudio.git
git push -u origin main
```
2. Đăng nhập [Vercel](https://vercel.com) -> Bấm **Add New Project** -> Chọn kho lưu trữ **`sgswebvn/HTstudio`**.
3. Cấu hình **Environment Variables** trên Vercel:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
4. Bấm **Deploy**. Vercel sẽ tự động build và cấp domain miễn phí `.vercel.app`.

---
© 2026 **HT STUDIO**. Hotline: 0789 346 079 - Zalo: 0941 518 881.
