# Hướng Dẫn Tích Hợp Google Sheets API (Form Liên Hệ & Chatbot)

Hệ thống đã được lập trình sẵn và kiểm thử thành công khả năng tự động ghi nhận mọi lượt gửi form liên hệ trên website và lead từ chatbot vào Google Sheets.

---

## 1. Cấu trúc 12 Cột Google Sheet

Khi tạo mới một Google Sheet, hãy đặt dòng tiêu đề (Dòng 1, từ cột A đến L) theo đúng thứ tự sau:

| Cột | Tên Cột | Mô tả |
| :---: | :--- | :--- |
| **A** | **Mã yêu cầu** | Tự động sinh mã duy nhất dạng `REQ-YYYYMMDD-XXXX` |
| **B** | **Thời gian gửi** | Thời gian chuẩn múi giờ Việt Nam `HH:mm:ss DD/MM/YYYY (ICT)` |
| **C** | **Họ và tên** | Tên khách hàng (đã xử lý chống Formula Injection) |
| **D** | **Số điện thoại** | Số điện thoại hoặc Zalo liên hệ |
| **E** | **Email** | Địa chỉ email để gửi thư phản hồi |
| **F** | **Dịch vụ quan tâm** | Dịch vụ khách hàng lựa chọn |
| **G** | **Ngân sách dự kiến** | Khoảng ngân sách dự kiến của dự án |
| **H** | **Nội dung yêu cầu** | Chi tiết bài toán hoặc câu hỏi của khách hàng |
| **I** | **Nguồn khách hàng** | Kênh khách biết đến bạn (Google, Giới thiệu, v.v.) |
| **J** | **Trang nguồn** | Đường dẫn URL trang khách gửi form (ví dụ: `/`) |
| **K** | **Trạng thái xử lý** | Mặc định: `Mới` |
| **L** | **Ghi chú** | Kênh tiếp nhận: `Website` hoặc `Chatbot` |

> **Bảo mật Formula Injection**: Hệ thống đã được lập trình để tự động thêm dấu `'` vào trước các giá trị bắt đầu bằng `=`, `+`, `-`, `@`, ngăn chặn tuyệt đối lỗi thực thi công thức ngoài ý muốn trên Google Sheets.

---

## 2. Các Bước Kết Nối Google Sheets Bằng Service Account

### Bước 1: Tạo Google Sheet mới
1. Truy cập [Google Sheets](https://sheets.google.com) và tạo một bảng tính mới.
2. Đặt tên bảng tính (ví dụ: `Danh Sách Khách Hàng - Portfolio`).
3. Nhập dòng 1 theo 12 cột ở bảng trên.
4. Lấy **Google Sheet ID** từ thanh địa chỉ trình duyệt:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID_NẰM_Ở_ĐÂY]/edit
   ```

### Bước 2: Bật Google Sheets API trên Google Cloud Console
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/).
2. Chọn dự án hiện tại của bạn (hoặc tạo một dự án mới).
3. Vào **APIs & Services** > **Library**.
4. Tìm kiếm `Google Sheets API` và bấm **Enable** (Bật).

### Bước 3: Tạo Service Account và Tải Khóa Private Key
1. Vào **APIs & Services** > **Credentials**.
2. Bấm **Create Credentials** > chọn **Service account**.
3. Đặt tên (ví dụ: `sheets-bot`) và bấm **Create and Continue**.
4. Bấm vào Service account vừa tạo > chuyển sang tab **Keys** > **Add Key** > **Create new key** (chọn định dạng **JSON**).
5. File JSON sẽ được tải về máy tính. Mở file JSON đó ra, bạn sẽ thấy 2 trường quan trọng:
   - `client_email`: Email của service account.
   - `private_key`: Chuỗi khóa riêng tư bắt đầu bằng `-----BEGIN PRIVATE KEY-----`.

### Bước 4: Chia sẻ Google Sheet với Service Account
1. Mở lại Google Sheet đã tạo ở Bước 1.
2. Bấm nút **Chia sẻ (Share)** ở góc trên bên phải.
3. Dán địa chỉ `client_email` của Service Account vào ô mời, chọn quyền **Editor (Người chỉnh sửa)** và bấm **Gửi**.

### Bước 5: Cập nhật biến môi trường vào `.env`
Mở file `c:\DevWeb\Profile\.env` và điền 3 biến sau:

```env
GOOGLE_SHEET_ID=điền_sheet_id_của_bạn_ở_bước_1
GOOGLE_SERVICE_ACCOUNT_EMAIL=điền_client_email_từ_file_json
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC..."
```

---

## 3. Cơ Chế Dự Phòng An Toàn (Safe Local Fallback)

Nếu bạn chưa kịp điền biến môi trường Google Sheets, website vẫn hoạt động 100% mượt mà:
- Mọi lượt gửi từ form liên hệ và chatbot đều được lưu an toàn vào tệp tin máy chủ:
  `c:\DevWeb\Profile\data\contact_submissions.json`
- Không bao giờ bị mất hoặc rơi rớt bất kỳ khách hàng tiềm năng nào!
- Bạn có thể bấm vào liên kết **"Kiểm tra kết nối Google Sheets"** ở góc chân trang (Footer) bất cứ lúc nào để kiểm tra trạng thái kết nối trực tiếp.
