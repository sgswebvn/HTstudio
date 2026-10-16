import { ServiceItem, WorkStep } from '@/types';

export const personalInfo = {
  brandName: 'HT STUDIO',
  tagline: 'Thiết kế website chỉn chu, hiện đại cho cá nhân, cửa hàng và doanh nghiệp',
  heroIntro:
    'HT STUDIO giúp cá nhân, cửa hàng và doanh nghiệp xây dựng website chỉn chu, dễ sử dụng và phù hợp với nhu cầu thực tế.',
  status: {
    available: true,
    text: 'Đang tiếp nhận dự án mới',
  },
  aboutShort:
    'HT STUDIO là studio thiết kế và phát triển website độc lập. Chúng tôi tập trung vào việc tạo ra các website có giao diện thoáng đãng, trình bày sản phẩm đẹp mắt, hiển thị mượt mà trên điện thoại và giúp khách hàng dễ dàng tìm kiếm thông tin cũng như liên hệ đặt hàng.',
  principles: [
    {
      title: 'Hiển thị đẹp trên mọi thiết bị',
      desc: 'Website được tinh chỉnh cẩn thận để hiển thị rõ ràng, cân đối trên cả điện thoại di động, máy tính bảng và màn hình lớn.',
    },
    {
      title: 'Nội dung dễ hiểu, dễ điều hướng',
      desc: 'Bố cục thông tin mạch lạc, khách hàng vào xem là hiểu ngay doanh nghiệp làm gì và có thể liên hệ nhanh chóng.',
    },
    {
      title: 'Tối ưu tốc độ tải trang',
      desc: 'Hình ảnh và mã nguồn được xử lý gọn gàng, giúp website mở nhanh, không giật lag và không làm khách hàng phải chờ đợi.',
    },
    {
      title: 'Tự động lưu thông tin khách hàng',
      desc: 'Mọi tin nhắn gửi qua biểu mẫu đều được lưu tự động vào Google Sheets để bạn tiện theo dõi và phản hồi ngay.',
    },
  ],
  contact: {
    email: 'hieucv666@gmail.com',
    phone: '0789 346 079',
    zaloPhone: '0941 518 881',
    zalo: 'https://zalo.me/0941518881',
    facebook: 'https://www.facebook.com/htstudiowebdesgin',
    location: 'Toàn quốc',
    workingHours: 'Hỗ trợ 24/7',
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: 'woodwork-interior',
    title: 'Website & Landing Page Nội Thất - Xưởng Gỗ',
    tag: 'Thế mạnh đặc thù',
    shortDesc: 'Giao diện sang trọng, tôn trọn vẻ đẹp vân gỗ, không gian nội thất và công trình thực tế.',
    idealFor: 'Xưởng sản xuất mộc, showroom nội thất, kiến trúc sư và đơn vị thi công hoàn thiện.',
    benefits: [
      'Trưng bày ảnh chụp công trình, vật liệu gỗ sắc nét',
      'Form nhận bản vẽ & báo giá kích thước trực tiếp',
      'Định vị thương hiệu cao cấp, uy tín',
    ],
    deliverables: [
      'Giao diện chuẩn Responsive mobile & PC',
      'Thư viện hình ảnh công trình kèm bộ lọc',
      'Tích hợp nút gọi, Zalo và đồng bộ Google Sheets',
    ],
  },
  {
    id: 'automation-tools',
    title: 'Tool Tự Động Hóa Facebook & YouTube',
    tag: 'Tiết kiệm 90% thời gian',
    shortDesc: 'Phần mềm tự động hóa nuôi nick, đăng bài/Reels hàng loạt trên Facebook và bulk upload đa kênh YouTube.',
    idealFor: 'Cá nhân, shop bán hàng và đội ngũ marketing cần phủ sóng video & thương hiệu số lượng lớn.',
    benefits: [
      'Đăng hàng loạt video Reels / Shorts tự động',
      'Hẹn giờ đăng thông minh, tự tạo hashtag & SEO',
      'Quản lý hàng chục kênh và tài khoản an toàn',
    ],
    deliverables: [
      'Phần mềm Desktop giao diện trực quan, dễ thao tác',
      'Hệ thống quản lý hàng đợi và lịch phát tự động',
      'Hướng dẫn vận hành & hỗ trợ cập nhật định kỳ',
    ],
  },
  {
    id: 'store-ecommerce',
    title: 'Website Bán Hàng & Danh Mục Sản Phẩm',
    tag: 'Tối ưu chuyển đổi',
    shortDesc: 'Trưng bày sản phẩm đẹp mắt, tìm kiếm nhanh và đặt mua tiện lợi qua Zalo hoặc Hotline.',
    idealFor: 'Shop bán lẻ, cửa hàng tiêu dùng và xưởng sản xuất bán trực tiếp cho khách hàng.',
    benefits: [
      'Bộ lọc sản phẩm thông minh, tải nhanh',
      'Nút đặt mua nhanh không cần đăng ký phức tạp',
      'Dễ cập nhật thêm bớt sản phẩm',
    ],
    deliverables: [
      'Trang danh mục, chi tiết sản phẩm và giỏ hàng',
      'Form đặt hàng chuyển thẳng về Google Sheets',
      'Tối ưu chuẩn SEO Google',
    ],
  },
  {
    id: 'business-web',
    title: 'Website Doanh Nghiệp & Hồ Sơ Năng Lực',
    tag: 'Khẳng định vị thế',
    shortDesc: 'Trang thông tin công ty chuyên nghiệp, thể hiện năng lực và dịch vụ cốt lõi một cách tin cậy.',
    idealFor: 'Các công ty, doanh nghiệp vừa và nhỏ, văn phòng dịch vụ.',
    benefits: [
      'Nâng cao uy tín khi đối tác tra cứu thông tin',
      'Bố cục tinh gọn, tông màu chuẩn thương hiệu',
      'Bảo mật cao, mở cực nhanh',
    ],
    deliverables: [
      'Trang chủ, Giới thiệu, Năng lực, Dịch vụ & Liên hệ',
      'Kết nối bản đồ, thông tin pháp lý và mạng xã hội',
      'Bảo hành kỹ thuật dài hạn',
    ],
  },
];

export const workProcessSteps: WorkStep[] = [
  {
    step: '01',
    title: 'Tiếp nhận nhu cầu',
    description: 'Trao đổi mục tiêu, đối tượng khách hàng và thống nhất giải pháp phù hợp.',
    deliverable: 'Kế hoạch triển khai & báo giá rõ ràng.',
  },
  {
    step: '02',
    title: 'Thiết kế giao diện',
    description: 'Lên bản mẫu trực quan, bố cục thoáng đãng và chuẩn nhận diện thương hiệu.',
    deliverable: 'Giao diện mẫu để bạn duyệt trước.',
  },
  {
    step: '03',
    title: 'Lập trình & Hoàn thiện',
    description: 'Xây dựng website/tool mượt mà, kết nối form thông tin và các tính năng tương tác.',
    deliverable: 'Bản trải nghiệm thực tế.',
  },
  {
    step: '04',
    title: 'Kiểm thử thực tế',
    description: 'Đo lường tốc độ, kiểm tra hiển thị trên điện thoại, máy tính và độ ổn định.',
    deliverable: 'Website chạy trơn tru, không lỗi.',
  },
  {
    step: '05',
    title: 'Bàn giao & Đồng hành',
    description: 'Đưa website lên tên miền chính thức, hướng dẫn quản trị và hỗ trợ kỹ thuật 24/7.',
    deliverable: 'Website chính thức hoạt động.',
  },
];
