import { Project } from '@/types';

export const projectsData: Project[] = [
  // 1. TOP #1: Landing Page Nội Thất & Kiến Trúc
  {
    id: 'an-nhien-interior',
    slug: 'an-nhien-interior',
    title: 'An Nhiên Interior — Studio Kiến Trúc & Nội Thất Tối Giản',
    clientType: 'Showroom & Đơn Vị Thiết Kế Thi Công Nội Thất Cao Cấp',
    category: 'woodwork-interior',
    categoryLabel: 'Landing Page Nội Thất',
    badge: 'Dự án tiêu biểu',
    isRealProject: false,
    statusLabel: 'Mẫu thiết kế cao cấp cho ngành nội thất',
    shortDescription:
      'Giao diện tối giản phong cách Bắc Âu, tôn trọn vẻ đẹp không gian sống và vật liệu gỗ tự nhiên qua hình ảnh độ phân giải cao.',
    targetAudience:
      'Khách hàng gia đình trẻ, chủ căn hộ cao cấp và biệt thự cần tìm đơn vị tư vấn thiết kế thi công nội thất tinh tế.',
    keyHighlight:
      'Thiết kế tỷ lệ vàng chuẩn thẩm mỹ, ảnh dự án phóng to sắc nét, biểu mẫu gửi mặt bằng khảo sát trực tiếp.',
    coverImage: '/projects/banner-interior.jpg',
    gallery: [
      {
        url: '/projects/banner-interior.jpg',
        caption: 'Giao diện trang chủ hiển thị trên màn hình máy tính với bố cục sang trọng, tinh tế',
        isCover: true,
      },
      {
        url: '/projects/interior-cover.svg',
        caption: 'Bố cục chi tiết bộ sưu tập phòng khách, phòng ngủ và vật liệu gỗ tự nhiên',
      },
      {
        url: '/projects/woodwork-cover.svg',
        caption: 'Khu vực trưng bày năng lực xưởng may đo nội thất trực tiếp',
      },
    ],
    purpose:
      'Khẳng định gu thẩm mỹ tinh tế, tạo ấn tượng tin cậy ngay từ giây đầu tiên và thúc đẩy khách hàng gửi thông tin tư vấn.',
    problemSolved:
      'Nhiều website nội thất nhồi nhét quá nhiều chữ và hình ảnh kích thước nhỏ. An Nhiên Interior khắc phục bằng bố cục thoáng đãng, hình ảnh kích thước lớn và nút đặt lịch khảo sát nổi bật.',
    coreFeatures: [
      {
        title: 'Bộ sưu tập công trình sắc nét',
        description: 'Trưng bày ảnh chụp căn hộ thực tế với chế độ phóng to chi tiết từng góc nhà.',
      },
      {
        title: 'Bảng mẫu vật liệu gỗ & da cao cấp',
        description: 'Giúp khách dễ hình dung màu sắc gỗ sồi, óc chó và chất liệu hoàn thiện.',
      },
      {
        title: 'Đăng ký khảo sát tận nơi',
        description: 'Form đăng ký nhận tư vấn bản vẽ 2D/3D chuyển thẳng về Google Sheets và thông báo qua Zalo.',
      },
      {
        title: 'Tối ưu tốc độ tải ảnh lớn',
        description: 'Công nghệ nén ảnh hiện đại giúp website mở tức thì mà không giảm độ sắc nét.',
      },
    ],
    myWork: [
      'Nghiên cứu phong cách tối giản Bắc Âu và thiết kế bộ nhận diện màu be - gỗ ấm.',
      'Lập trình giao diện đáp ứng mượt mà trên iPhone, iPad và máy tính.',
      'Tích hợp tính năng Lightbox xem ảnh lớn và gửi yêu cầu tư vấn nhanh.',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    siteMapTree: [
      {
        name: 'Trang chủ An Nhiên Interior',
        description: 'Hero Banner không gian sống, Giới thiệu triết lý, Dự án thực tế, Báo giá',
        children: [
          {
            name: 'Bộ sưu tập dự án',
            description: 'Phân loại theo Chung cư cao cấp, Biệt thự nhà phố, Penthouse',
          },
          {
            name: 'Vật liệu & Xưởng may đo',
            description: 'Gỗ tự nhiên Óc chó, Sồi Mỹ, Gỗ An Cường tiêu chuẩn E1',
          },
          {
            name: 'Đăng ký tư vấn',
            description: 'Biểu mẫu tiếp nhận diện tích và yêu cầu của chủ nhà',
          },
        ],
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Khách vào xem hình ảnh các căn hộ đã hoàn thiện',
        screen: 'Mục Dự án tiêu biểu',
        outcome: 'Ấn tượng với gu thẩm mỹ và độ chỉn chu của đơn vị',
      },
      {
        stepNumber: 2,
        action: 'Bấm phóng to xem chi tiết từng góc phòng',
        screen: 'Cửa sổ ảnh phóng to (Lightbox)',
        outcome: 'Thấy rõ chất lượng gỗ và độ tinh xảo của đường nét',
      },
      {
        stepNumber: 3,
        action: 'Điền số điện thoại hoặc bấm chat Zalo để hẹn lịch khảo sát',
        screen: 'Biểu mẫu liên hệ & Nút Zalo',
        outcome: 'Thông tin gửi ngay về chủ showroom để hẹn lịch tư vấn',
      },
    ],
  },

  // 2. Tool Facebook: Nuôi Nick & Đăng Reels Hàng Loạt
  {
    id: 'fb-automation-tool',
    slug: 'fb-automation-tool',
    title: 'FB Multi-Sync Pro — Tool Quản Lý Nick & Đăng Bài/Reels Hàng Loạt',
    clientType: 'Phần Mềm Desktop Tự Động Hóa Facebook Marketing',
    category: 'tools-automation',
    categoryLabel: 'Tool Tự Động Hóa FB',
    badge: 'Công cụ marketing',
    isRealProject: true,
    statusLabel: 'Phần mềm tự động hóa thực tế',
    shortDescription:
      'Hệ thống quản lý đa tài khoản, tự động nuôi tương tác nick, xếp hàng duyệt video và đăng hàng loạt Reels/Bài viết theo lịch trình thông minh.',
    targetAudience:
      'Chủ shop kinh doanh online, đội ngũ marketing và nhà sáng tạo nội dung cần vận hành hàng chục tài khoản Facebook cùng lúc.',
    keyHighlight:
      'Hẹn giờ đăng Reels hàng loạt không giới hạn, nuôi nick chống checkpoint, phân chia profile độc lập.',
    coverImage: '/projects/banner-fb-tool.jpg',
    gallery: [
      {
        url: '/projects/banner-fb-tool.jpg',
        caption: 'Bảng điều khiển FB Multi-Sync Pro trên máy tính với giao diện Dark Mode hiện đại',
        isCover: true,
      },
    ],
    purpose:
      'Giải phóng hoàn toàn thời gian thao tác tay, giúp một người có thể vận hành và đăng bài phủ sóng trên hàng chục fanpage và tài khoản cá nhân.',
    problemSolved:
      'Đăng thủ công từng video tốn hàng giờ mỗi ngày và dễ bị khóa nick do trùng IP/thiết bị. Tool tự động hóa quy trình với profile riêng biệt và giãn cách thời gian đăng tự nhiên.',
    coreFeatures: [
      {
        title: 'Đăng Reels hàng loạt tự động',
        description: 'Tải 50-100 video lên cùng lúc, tự động gắn tiêu đề, hashtag và hẹn giờ đăng cách nhau theo ý muốn.',
      },
      {
        title: 'Quản lý đa profile độc lập',
        description: 'Mỗi tài khoản chạy trên môi trường trình duyệt riêng, lưu cookie và proxy tránh checkpoint.',
      },
      {
        title: 'Kịch bản nuôi tương tác tự nhiên',
        description: 'Tự động lướt Newfeed, xem story, like bài viết theo kịch bản như người dùng thật.',
      },
      {
        title: 'Báo cáo thống kê trực quan',
        description: 'Theo dõi tỷ lệ đăng thành công, lượt xem Reels và tương tác theo ngày.',
      },
    ],
    myWork: [
      'Thiết kế giao diện dashboard hiện đại với tông màu tối dễ nhìn.',
      'Xây dựng luồng xử lý hàng đợi (queue) tải video và lên lịch phát.',
      'Tối ưu hóa tài nguyên phần cứng để chạy êm ái trên máy tính cá nhân.',
    ],
    technologies: ['Electron', 'Node.js', 'Playwright', 'Tailwind CSS', 'SQLite'],
    siteMapTree: [
      {
        name: 'Dashboard Tổng quan',
        description: 'Số tài khoản hoạt động, Lịch đăng hôm nay, Trạng thái hàng đợi',
        children: [
          {
            name: 'Quản lý Tài khoản (Profiles)',
            description: 'Danh sách nick, gán Proxy, kiểm tra trạng thái Cookie',
          },
          {
            name: 'Hàng đợi đăng bài (Reels Queue)',
            description: 'Thêm video hàng loạt, cài đặt caption, đặt lịch đăng',
          },
          {
            name: 'Lịch xuất bản (Scheduler)',
            description: 'Xem timeline các bài đăng trong tuần/tháng',
          },
        ],
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Người dùng chọn danh sách 30 video Reels trong máy',
        screen: 'Màn hình Thêm video hàng loạt',
        outcome: 'Tool tự động phân tích độ dài và tạo hàng đợi',
      },
      {
        stepNumber: 2,
        action: 'Chọn các tài khoản đích và khoảng thời gian giãn cách',
        screen: 'Màn hình Cấu hình lịch phát',
        outcome: 'Lên lịch trình tự động từ 9h sáng đến 21h tối',
      },
      {
        stepNumber: 3,
        action: 'Bấm Bắt đầu và tool tự động chạy ngầm',
        screen: 'Bảng theo dõi tiến độ',
        outcome: 'Video được đăng đều đặn, thông báo hoàn thành qua âm thanh',
      },
    ],
  },

  // 3. Tool YouTube: Đăng Hàng Loạt Video & Quản Lý Kênh
  {
    id: 'youtube-bulk-uploader',
    slug: 'youtube-bulk-uploader',
    title: 'YouTube Mass Uploader Pro — Tool Đăng Hàng Loạt Video & Quản Lý Kênh',
    clientType: 'Phần Mềm Desktop Tự Động Hóa Kênh YouTube & Shorts',
    category: 'tools-automation',
    categoryLabel: 'Tool Tự Động Hóa YouTube',
    badge: 'Công cụ marketing',
    isRealProject: true,
    statusLabel: 'Phần mềm tự động hóa thực tế',
    shortDescription:
      'Tải lên hàng loạt video dài và Shorts 4K tự động, hỗ trợ tạo tiêu đề, mô tả chuẩn SEO, quản lý lịch xuất bản đa kênh an toàn.',
    targetAudience:
      'YouTuber, studio sản xuất nội dung, mạng lưới đa kênh (MCN) và doanh nghiệp phát triển hệ thống kênh vệ tinh.',
    keyHighlight:
      'Tải lên tự động hàng trăm video 4K/Shorts mỗi ngày, chống đứt kết nối giữa chừng, tự tạo thẻ Tags chuẩn SEO.',
    coverImage: '/projects/banner-yt-tool.jpg',
    gallery: [
      {
        url: '/projects/banner-yt-tool.jpg',
        caption: 'Giao diện quản lý hàng đợi đăng video YouTube và bảng sinh thẻ Tags SEO',
        isCover: true,
      },
    ],
    purpose:
      'Tự động hóa hoàn toàn việc tải video lên YouTube theo đúng tiêu chuẩn kỹ thuật, tiết kiệm hàng chục giờ chờ upload mỗi tuần.',
    problemSolved:
      'Đăng video thủ công qua trình duyệt rất dễ bị gián đoạn khi mạng chập chờn và phải điền từng mô tả, thẻ tag mệt mỏi. Tool này tự động tiếp tục khi rớt mạng và đồng bộ hàng loạt.',
    coreFeatures: [
      {
        title: 'Tải hàng loạt video không giới hạn',
        description: 'Kéo thả cả thư mục video, tool tự động nhận diện video thường hoặc YouTube Shorts.',
      },
      {
        title: 'Gợi ý tiêu đề & Tags chuẩn SEO',
        description: 'Tự động tạo mô tả chứa từ khóa tìm kiếm và hashtag thịnh hành.',
      },
      {
        title: 'Cơ chế Resume chống rớt mạng',
        description: 'Tự động kết nối lại và tiếp tục tải từ % dang dở mà không phải upload lại từ đầu.',
      },
      {
        title: 'Lịch công chiếu & Riêng tư',
        description: 'Đặt lịch phát hành từng video theo khung giờ vàng nhiều người xem nhất.',
      },
    ],
    myWork: [
      'Tích hợp YouTube Data API v3 chính thống kết hợp giao thức Resumable Upload.',
      'Thiết kế giao diện quản lý tiến độ hiển thị % và dung lượng đã tải mượt mà.',
      'Xây dựng bộ công cụ tự động trích xuất thông tin video và gắn thumbnail tương ứng.',
    ],
    technologies: ['Electron', 'YouTube API v3', 'FFmpeg', 'TypeScript', 'Tailwind CSS'],
    siteMapTree: [
      {
        name: 'Dashboard Quản lý Kênh',
        description: 'Kênh đang kết nối, Dung lượng đã upload, Video đang chờ duyệt',
        children: [
          {
            name: 'Hàng đợi Upload (Upload Queue)',
            description: 'Danh sách video kèm thumbnail, thanh tiến độ %, nút tạm dừng/tiếp tục',
          },
          {
            name: 'Bộ sinh SEO tự động (AI SEO Generator)',
            description: 'Mẫu mô tả chung, chèn link mạng xã hội, danh mục tag',
          },
          {
            name: 'Lịch phát sóng (Scheduled Release Calendar)',
            description: 'Lịch theo dạng ngày/tuần với thẻ màu trực quan',
          },
        ],
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Kéo thả thư mục chứa 50 video vào bảng điều khiển',
        screen: 'Màn hình Hàng đợi Upload',
        outcome: 'Tool tự động bắt thumbnail và phân loại Shorts',
      },
      {
        stepNumber: 2,
        action: 'Chọn mẫu mô tả chung và khung giờ vàng công chiếu',
        screen: 'Bộ sinh thẻ SEO & Lịch phát',
        outcome: 'Tự động điền đầy đủ dữ liệu cho tất cả video trong danh sách',
      },
      {
        stepNumber: 3,
        action: 'Bấm Bắt đầu tải lên',
        screen: 'Thanh tiến độ chạy nền',
        outcome: 'Các video lần lượt được upload an toàn và lên lịch công chiếu',
      },
    ],
  },

  // 4. Xưởng Mộc & Sản Xuất Nội Thất
  {
    id: 'moc-gia-phat',
    slug: 'moc-gia-phat',
    title: 'Mộc Gia Phát — Xưởng Sản Xuất Nội Thất Gỗ Tự Nhiên & Công Nghiệp',
    clientType: 'Xưởng Chế Tác Mộc & Sản Xuất Đồ Gỗ May Đo',
    category: 'woodwork-interior',
    categoryLabel: 'Website Xưởng Mộc',
    badge: 'Thế mạnh xưởng mộc',
    isRealProject: false,
    statusLabel: 'Mẫu thiết kế chuyên ngành mộc & nội thất',
    shortDescription:
      'Website chuyên sâu cho xưởng mộc: làm nổi bật chất gỗ tự nhiên, hình ảnh xưởng sản xuất 1.500m2 và tiếp nhận yêu cầu báo giá theo mét vuông.',
    targetAudience:
      'Gia chủ đang làm nhà cần tìm xưởng gỗ trực tiếp, kiến trúc sư cần xưởng gia công uy tín không qua trung gian.',
    keyHighlight:
      'Trực quan hóa năng lực xưởng mộc, bảng tra cứu mẫu gỗ (Gõ đỏ, Óc chó, Sồi, MDF An Cường), form gửi bản vẽ.',
    coverImage: '/projects/woodwork-cover.svg',
    gallery: [
      {
        url: '/projects/woodwork-cover.svg',
        caption: 'Giao diện trang chủ với gam màu gỗ ấm cúng và các chứng nhận chất lượng gỗ',
        isCover: true,
      },
      {
        url: '/projects/interior-cover.svg',
        caption: 'Khu vực trưng bày các công trình tủ bếp, bàn ghế, cửa gỗ đã lắp đặt thực tế',
      },
    ],
    purpose:
      'Giúp xưởng mộc khẳng định quy mô sản xuất thực tế, giải quyết nỗi lo về gỗ giả của khách hàng và thu hút khách liên hệ báo giá.',
    problemSolved:
      'Khách hàng thường lo ngại xưởng ảo hoặc làm qua trung gian nâng giá. Website chứng minh năng lực qua video xưởng, ảnh máy móc và bảng giá minh bạch.',
    coreFeatures: [
      {
        title: 'Tra cứu mẫu vân gỗ',
        description: 'Hình ảnh phóng to vân gỗ tự nhiên và bảng mã màu melamine chống ẩm.',
      },
      {
        title: 'Công cụ tính dự toán sơ bộ',
        description: 'Khách chọn loại gỗ và diện tích để ước lượng chi phí ban đầu.',
      },
      {
        title: 'Gửi bản vẽ nhận báo giá',
        description: 'Biểu mẫu cho phép đính kèm ảnh hoặc bản vẽ thiết kế nhận báo giá trong 24h.',
      },
      {
        title: 'Đồng bộ Google Sheets & Zalo',
        description: 'Thông báo đơn hàng mộc mới chuyển ngay vào file quản lý của xưởng.',
      },
    ],
    myWork: [
      'Thiết kế giao diện phong cách mộc mạc, sang trọng với tông màu nâu gỗ ấm.',
      'Xây dựng danh mục sản phẩm đồ mộc theo từng không gian (Phòng khách, bếp, ngủ).',
      'Tích hợp form gửi yêu cầu báo giá trực tiếp vào Google Sheets.',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Google Sheets API'],
    siteMapTree: [
      {
        name: 'Trang chủ Mộc Gia Phát',
        description: 'Cam kết nguồn gốc gỗ, Năng lực xưởng 1.500m2, Sản phẩm nổi bật',
        children: [
          {
            name: 'Danh mục sản phẩm gỗ',
            description: 'Tủ bếp Acrylic/Gỗ tự nhiên, Bàn ăn nguyên tấm, Cửa gỗ',
          },
          {
            name: 'Hình ảnh xưởng & Máy móc',
            description: 'Dàn máy cưa mộng CNC, buồng phun sơn PU không bụi',
          },
          {
            name: 'Nhận báo giá mộc',
            description: 'Form điền kích thước và chủng loại gỗ mong muốn',
          },
        ],
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Khách vào xem ảnh sản phẩm tủ và xưởng sản xuất',
        screen: 'Trang chủ & Mục Hình ảnh xưởng',
        outcome: 'Tin tưởng vào năng lực sản xuất trực tiếp của xưởng',
      },
      {
        stepNumber: 2,
        action: 'Bấm nút Nhận báo giá mộc',
        screen: 'Form báo giá',
        outcome: 'Điền số điện thoại và loại gỗ cần gia công',
      },
      {
        stepNumber: 3,
        action: 'Bấm gửi thông tin',
        screen: 'Màn hình cảm ơn',
        outcome: 'Xưởng nhận được thông tin trên Google Sheets và gọi lại tư vấn',
      },
    ],
  },

  // 5. Website Bán Hàng & Nông Sản
  {
    id: 'fresh-organic-store',
    slug: 'fresh-organic-store',
    title: 'Fresh Organic Store — Siêu Thị Nông Sản Sạch & Thực Phẩm Hữu Cơ',
    clientType: 'Cửa Hàng Thực Phẩm & Thương Mại Điện Tử',
    category: 'ecommerce',
    categoryLabel: 'Website Bán Hàng',
    badge: 'Thương mại điện tử',
    isRealProject: false,
    statusLabel: 'Mẫu website bán hàng tối ưu chuyển đổi',
    shortDescription:
      'Giao diện cửa hàng tươi mới, danh mục sản phẩm phân chia khoa học, khách chọn mua và đặt hàng nhanh qua Zalo không cần tài khoản.',
    targetAudience:
      'Người tiêu dùng quan tâm thực phẩm sạch, shop bán lẻ cần kênh đặt hàng nhanh và tiện lợi.',
    keyHighlight:
      'Đặt hàng nhanh không cần mật khẩu rườm rà, giao diện tươi sáng tạo cảm giác an tâm, tải nhanh dưới 1.5 giây.',
    coverImage: '/projects/landing-cover.svg',
    gallery: [
      {
        url: '/projects/landing-cover.svg',
        caption: 'Giao diện trang chủ hiển thị giỏ hàng nhanh và các chương trình khuyến mãi trong ngày',
        isCover: true,
      },
    ],
    purpose:
      'Giúp shop tiếp cận khách hàng trên mạng, tối giản các bước mua hàng để tăng doanh số bán lẻ.',
    problemSolved:
      'Nhiều web bán hàng bắt khách phải đăng ký tài khoản phức tạp làm mất khách. Fresh Organic cho phép khách bấm chọn và gửi đơn hàng trực tiếp.',
    coreFeatures: [
      {
        title: 'Mua hàng nhanh 1 bước',
        description: 'Điền tên, số điện thoại và địa chỉ là hoàn tất đơn hàng.',
      },
      {
        title: 'Bộ lọc danh mục tiện lợi',
        description: 'Dễ dàng lọc theo rau củ, trái cây, đồ khô hoặc theo mức giá.',
      },
      {
        title: 'Đồng bộ hóa đơn bán lẻ',
        description: 'Tự động tính tiền và gửi thông tin đơn hàng về trang quản lý.',
      },
    ],
    myWork: [
      'Thiết kế giao diện xanh mát, thân thiện với người tiêu dùng.',
      'Xây dựng tính năng giỏ hàng lưu tự động trong trình duyệt.',
      'Tích hợp form đặt hàng gửi dữ liệu về Google Sheets.',
    ],
    technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript'],
    siteMapTree: [
      {
        name: 'Trang chủ Cửa hàng',
        description: 'Sản phẩm mới hái hôm nay, Giảm giá cuối tuần, Đánh giá của khách',
        children: [
          {
            name: 'Danh mục Rau Củ Quả',
            description: 'Các sản phẩm nông sản sạch đạt tiêu chuẩn VietGAP/Organic',
          },
          {
            name: 'Giỏ hàng & Thanh toán',
            description: 'Xác nhận số lượng và chọn địa chỉ giao tận nơi',
          },
        ],
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Khách chọn các món rau củ yêu thích vào giỏ hàng',
        screen: 'Trang sản phẩm',
        outcome: 'Giỏ hàng cập nhật tổng tiền ngay lập tức',
      },
      {
        stepNumber: 2,
        action: 'Bấm Đặt hàng ngay',
        screen: 'Form thanh toán nhanh',
        outcome: 'Điền địa chỉ giao hàng và số điện thoại',
      },
      {
        stepNumber: 3,
        action: 'Xác nhận đơn hàng',
        screen: 'Thông báo thành công',
        outcome: 'Shop nhận được đơn và đóng gói giao trong ngày',
      },
    ],
  },

  // 6. Website Doanh Nghiệp Chuẩn Nhận Diện
  {
    id: 'viet-eco-corporate',
    slug: 'viet-eco-corporate',
    title: 'Việt Eco Corporation — Doanh Nghiệp Giải Pháp Năng Lượng Xanh',
    clientType: 'Công Ty Công Nghệ Năng Lượng & Môi Trường',
    category: 'business',
    categoryLabel: 'Website Doanh Nghiệp',
    badge: 'Doanh nghiệp uy tín',
    isRealProject: false,
    statusLabel: 'Mẫu website giới thiệu doanh nghiệp hiện đại',
    shortDescription:
      'Giao diện tinh gọn, lịch thiệp, thể hiện hồ sơ năng lực, đội ngũ chuyên gia và các dự án điện mặt trời, năng lượng tái tạo quy mô lớn.',
    targetAudience:
      'Đối tác dự án, khách hàng doanh nghiệp và các quỹ đầu tư tìm hiểu về quy mô công ty.',
    keyHighlight:
      'Bố cục chuyên nghiệp chuẩn phong cách quốc tế, tải trang siêu tốc, bảo mật cao.',
    coverImage: '/projects/business-cover.svg',
    gallery: [
      {
        url: '/projects/business-cover.svg',
        caption: 'Giao diện trang chủ doanh nghiệp với khối năng lực và số liệu ấn tượng',
        isCover: true,
      },
    ],
    purpose:
      'Nâng cao uy tín thương hiệu khi tham gia đấu thầu dự án và làm việc với đối tác lớn.',
    problemSolved:
      'Xóa bỏ hình ảnh website doanh nghiệp cũ kỹ, chậm chạp bằng thiết kế hiện đại, thông tin rõ ràng và chuẩn nhận diện thương hiệu.',
    coreFeatures: [
      {
        title: 'Hồ sơ năng lực điện tử',
        description: 'Trình bày các chỉ số công suất, diện tích nhà xưởng và chứng nhận tiêu chuẩn.',
      },
      {
        title: 'Bản đồ dự án triển khai',
        description: 'Danh mục các dự án lắp đặt trên toàn quốc kèm hình ảnh nghiệm thu.',
      },
      {
        title: 'Mục tin tức & Hoạt động',
        description: 'Cập nhật tin tức doanh nghiệp, quan hệ cổ đông và tuyển dụng.',
      },
    ],
    myWork: [
      'Thiết kế giao diện chuẩn phong cách doanh nghiệp hiện đại, màu xanh sinh thái.',
      'Tối ưu hóa hiển thị hồ sơ năng lực và các trang pháp lý.',
      'Cấu hình hosting tốc độ cao và chứng chỉ bảo mật SSL.',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    siteMapTree: [
      {
        name: 'Trang chủ Doanh nghiệp',
        description: 'Tầm nhìn, Năng lực cốt lõi, Dự án trọng điểm, Đối tác chiến lược',
        children: [
          {
            name: 'Giới thiệu công ty',
            description: 'Lịch sử hình thành, Ban lãnh đạo và Chứng chỉ năng lực',
          },
          {
            name: 'Giải pháp & Dịch vụ',
            description: 'Điện mặt trời áp mái, Tiết kiệm năng lượng cho nhà máy',
          },
          {
            name: 'Liên hệ hợp tác',
            description: 'Thông tin văn phòng trụ sở và form gửi lời mời hợp tác',
          },
        ],
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Đối tác mở website để thẩm định năng lực công ty',
        screen: 'Trang chủ & Mục Hồ sơ năng lực',
        outcome: 'Đánh giá cao sự chuyên nghiệp và minh bạch thông tin',
      },
      {
        stepNumber: 2,
        action: 'Xem các dự án đã nghiệm thu thành công',
        screen: 'Trang Dự án tiêu biểu',
        outcome: 'Yên tâm về chất lượng thi công',
      },
      {
        stepNumber: 3,
        action: 'Bấm Liên hệ hợp tác',
        screen: 'Form liên hệ doanh nghiệp',
        outcome: 'Gửi yêu cầu trực tiếp đến bộ phận phát triển dự án',
      },
    ],
  },

  // 7. Báo Điện Tử & Tạp Chí Số
  {
    id: 'pulse-entertainment',
    slug: 'pulse-entertainment',
    title: 'PULSE Entertainment — Tạp Chí Tin Tức & Giải Trí Chuẩn SEO',
    clientType: 'Tạp Chí Số & Báo Điện Tử Quốc Tế',
    category: 'content-media',
    categoryLabel: 'Website Tin Tức & Media',
    badge: 'Dự án thực tế',
    isRealProject: true,
    statusLabel: 'Dự án thực tế đã triển khai',
    shortDescription:
      'Website tin tức giải trí quốc tế chuẩn SEO Google, tối ưu trải nghiệm đọc mượt mà và cam kết không giật trang khi hiển thị quảng cáo.',
    targetAudience:
      'Độc giả yêu thích phim ảnh, âm nhạc và tin tức giải trí; nhà sáng tạo nội dung cần lượng truy cập tự nhiên lớn.',
    keyHighlight:
      'Tối ưu tuyệt đối không giật layout (Zero CLS) khi tải quảng cáo, đầy đủ 5 trang pháp lý quốc tế.',
    coverImage: '/projects/pulse-cover.svg',
    gallery: [
      {
        url: '/projects/pulse-cover.svg',
        caption: 'Giao diện trang chủ dạng tạp chí số với tiêu điểm nổi bật và danh mục tin nóng',
        isCover: true,
      },
      {
        url: '/projects/pulse-seo.svg',
        caption: 'Cấu trúc đường dẫn tinh gọn, sơ đồ sitemap tự động và chuẩn dữ liệu tin tức Google',
      },
    ],
    purpose:
      'Xây dựng nền tảng báo điện tử hiện đại, thu hút lượng lớn độc giả từ công cụ tìm kiếm Google.',
    problemSolved:
      'Website không bị nhảy chữ hay xô lệch khi tải banner quảng cáo, giúp người đọc lướt êm ái và giữ chân độc giả lâu hơn.',
    coreFeatures: [
      {
        title: 'Đường dẫn thân thiện (Clean URL)',
        description: 'Địa chỉ bài viết ngắn gọn, đúng chuyên mục, giúp khách đọc dễ nhớ.',
      },
      {
        title: 'Tối ưu vị trí quảng cáo cố định',
        description: 'Khung quảng cáo khóa kích thước chuẩn, không làm giật khung khi đọc.',
      },
      {
        title: 'Sơ đồ sitemap tự động',
        description: 'Mỗi khi có bài mới, website tự động báo cho Googlebot vào lập chỉ mục.',
      },
    ],
    myWork: [
      'Thiết kế giao diện tạp chí số thoáng đãng, chia khối tin tức rõ ràng.',
      'Lập trình cấu trúc dữ liệu chuẩn Google News.',
      'Sắp xếp vị trí banner quảng cáo tối ưu doanh thu.',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    siteMapTree: [
      {
        name: 'Trang chủ Tạp chí',
        description: 'Tiêu điểm nổi bật, Tin mới nhất trong ngày, Chuyên mục Điện ảnh & Âm nhạc',
      },
    ],
    userFlow: [
      {
        stepNumber: 1,
        action: 'Độc giả bấm vào bài viết từ kết quả tìm kiếm Google',
        screen: 'Trang đọc bài viết',
        outcome: 'Trang mở tức thì, chữ nghĩa rõ nét, không bị giật khung',
      },
      {
        stepNumber: 2,
        action: 'Lướt xem các bài viết liên quan',
        screen: 'Khu vực tin đề xuất',
        outcome: 'Tiếp tục đọc thêm các bài viết cùng chủ đề',
      },
    ],
  },
];
