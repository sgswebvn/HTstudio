export interface QuickPrompt {
  id: string;
  question: string;
  answer: string;
  actions?: Array<{
    label: string;
    actionType: 'scroll_to' | 'copy_text' | 'open_lead_form' | 'navigate_to';
    payload: string;
  }>;
}

export const defaultQuickPrompts: QuickPrompt[] = [
  {
    id: 'business-inquiry',
    question: 'Tôi muốn làm website cho doanh nghiệp.',
    answer:
      'HT STUDIO chuyên thiết kế website doanh nghiệp với giao diện sang trọng, bố cục gọn gàng, làm nổi bật hồ sơ năng lực, các dịch vụ chính và dự án tiêu biểu. Website giúp đối tác và khách hàng tin tưởng ngay khi tìm kiếm công ty trên Google.',
    actions: [
      { label: 'Xem dự án Việt Eco', actionType: 'navigate_to', payload: '/du-an/viet-eco-corporate' },
      { label: 'Để lại thông tin tư vấn', actionType: 'open_lead_form', payload: '' },
    ],
  },
  {
    id: 'landing-inquiry',
    question: 'Tôi cần landing page bán hàng.',
    answer:
      'Landing page bán hàng tại HT STUDIO được thiết kế tập trung vào sự liền mạch: Hình ảnh sản phẩm bắt mắt, nêu bật ưu đãi và lợi ích, tốc độ tải cực nhanh trên điện thoại và biểu mẫu đặt hàng nhanh trong 30 giây.',
    actions: [
      { label: 'Xem mẫu Landing Page Freshfarm', actionType: 'navigate_to', payload: '/du-an/fresh-organic-store' },
      { label: 'Nhận tư vấn Landing Page', actionType: 'open_lead_form', payload: '' },
    ],
  },
  {
    id: 'wood-interior-inquiry',
    question: 'Tôi muốn làm website nội thất hoặc xưởng gỗ.',
    answer:
      'Đây là nhóm website chuyên biệt mà HT STUDIO đầu tư thiết kế kỹ lưỡng: Tập trung khoe trọn vẹn thớ vân gỗ tự nhiên, hình ảnh xưởng sản xuất thực tế, các công trình đã bàn giao (ảnh Trước & Sau) và form gửi kích thước nhận báo giá tận nơi.',
    actions: [
      { label: 'Xem web Xưởng Mộc Gia Phát', actionType: 'navigate_to', payload: '/du-an/moc-gia-phat' },
      { label: 'Xem web Nội Thất An Nhiên', actionType: 'navigate_to', payload: '/du-an/an-nhien-interior' },
      { label: 'Để lại thông tin xưởng/công ty', actionType: 'open_lead_form', payload: '' },
    ],
  },
  {
    id: 'similar-projects',
    question: 'Cho tôi xem các dự án tương tự.',
    answer:
      'HT STUDIO đã thực hiện nhiều dạng website thực tế:\n• Tạp chí số & Báo điện tử: PULSE Entertainment chuẩn SEO quốc tế\n• Quản trị nội dung: BlogWeb CMS bảo mật cao\n• Quản lý sản phẩm bán hàng: ProductHub Platform\n• Xưởng gỗ & Nội thất: Mộc Gia Phát, An Nhiên Interior\n• Doanh nghiệp: Việt Eco Energy',
    actions: [
      { label: 'Xem tất cả dự án', actionType: 'scroll_to', payload: '#projects' },
      { label: 'Trao đổi nhu cầu riêng', actionType: 'open_lead_form', payload: '' },
    ],
  },
  {
    id: 'pricing-inquiry',
    question: 'Tôi muốn hỏi về chi phí.',
    answer:
      'Chi phí làm website tại HT STUDIO luôn được trao đổi minh bạch dựa trên:\n1. Số lượng trang và độ phức tạp của giao diện.\n2. Các tính năng đặc thù (Bộ lọc sản phẩm, Đăng nhập, Tự động hóa Google Sheets).\n3. Yêu cầu về thời gian hoàn thành.\n\nHT STUDIO cam kết báo giá một lần trọn gói, không phát sinh chi phí ẩn. Bạn có thể để lại thông tin để nhận dự toán chi tiết.',
    actions: [
      { label: 'Gửi yêu cầu nhận báo giá', actionType: 'open_lead_form', payload: '' },
      { label: 'Mở form liên hệ', actionType: 'scroll_to', payload: '#contact' },
    ],
  },
  {
    id: 'tools-automation-inquiry',
    question: 'Tôi quan tâm tool Facebook hoặc YouTube.',
    answer:
      'HT STUDIO cung cấp và phát triển các phần mềm tự động hóa marketing thực tế:\n• Tool FB Multi-Sync: Quản lý đa tài khoản, nuôi nick chống checkpoint, hẹn giờ đăng video Reels hàng loạt.\n• Tool YouTube Mass Uploader: Tải lên hàng loạt video 4K/Shorts, tự sinh thẻ tag và mô tả chuẩn SEO, quản lý đa kênh an toàn.',
    actions: [
      { label: 'Xem Tool Facebook', actionType: 'navigate_to', payload: '/du-an/fb-automation-tool' },
      { label: 'Xem Tool YouTube', actionType: 'navigate_to', payload: '/du-an/youtube-bulk-uploader' },
      { label: 'Nhận tư vấn cài đặt tool', actionType: 'open_lead_form', payload: '' },
    ],
  },
  {
    id: 'direct-contact',
    question: 'Tôi muốn liên hệ trực tiếp.',
    answer:
      'Bạn có thể liên hệ trực tiếp với HT STUDIO (Hỗ trợ 24/7 trên Toàn quốc):\n• Hotline: 0789 346 079\n• Zalo: 0941 518 881\n• Email: hieucv666@gmail.com\n• Facebook: facebook.com/htstudiowebdesgin',
    actions: [
      { label: 'Sao chép Zalo', actionType: 'copy_text', payload: '0941518881' },
      { label: 'Sao chép Email', actionType: 'copy_text', payload: 'hieucv666@gmail.com' },
      { label: 'Mở form liên hệ', actionType: 'scroll_to', payload: '#contact' },
    ],
  },
];

export function findBotResponse(userInput: string): {
  text: string;
  actions?: Array<{
    label: string;
    actionType: 'scroll_to' | 'copy_text' | 'open_lead_form' | 'navigate_to';
    payload: string;
  }>;
} {
  const normalized = userInput.toLowerCase().trim();

  // 1. Check exact or close matches to default quick prompts
  for (const item of defaultQuickPrompts) {
    if (normalized.includes(item.question.toLowerCase())) {
      return { text: item.answer, actions: item.actions };
    }
  }

  // 2. Keyword heuristic search
  if (normalized.includes('tool') || normalized.includes('phần mềm') || normalized.includes('facebook') || normalized.includes('fb') || normalized.includes('youtube') || normalized.includes('ytb') || normalized.includes('reels') || normalized.includes('shorts') || normalized.includes('hàng loạt')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'tools-automation-inquiry')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  if (normalized.includes('doanh nghiệp') || normalized.includes('công ty') || normalized.includes('corporate')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'business-inquiry')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  if (normalized.includes('landing') || normalized.includes('bán hàng') || normalized.includes('chạy ads') || normalized.includes('quảng cáo')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'landing-inquiry')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  if (normalized.includes('gỗ') || normalized.includes('nội thất') || normalized.includes('xưởng') || normalized.includes('thợ mộc') || normalized.includes('căn hộ')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'wood-interior-inquiry')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  if (normalized.includes('dự án') || normalized.includes('xem mẫu') || normalized.includes('đã làm') || normalized.includes('tương tự')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'similar-projects')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  if (normalized.includes('giá') || normalized.includes('chi phí') || normalized.includes('bao nhiêu') || normalized.includes('ngân sách')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'pricing-inquiry')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  if (normalized.includes('liên hệ') || normalized.includes('sđt') || normalized.includes('điện thoại') || normalized.includes('zalo') || normalized.includes('email') || normalized.includes('facebook')) {
    const prompt = defaultQuickPrompts.find((p) => p.id === 'direct-contact')!;
    return { text: prompt.answer, actions: prompt.actions };
  }

  // 3. Fallback for unverified questions
  return {
    text: 'HT STUDIO hỗ trợ tư vấn 24/7 trên toàn quốc (Hotline: 0789 346 079 - Zalo: 0941 518 881). Bạn có thể để lại thông tin nhu cầu hoặc liên hệ trực tiếp để được giải đáp nhanh nhất.',
    actions: [
      { label: 'Để lại thông tin tư vấn', actionType: 'open_lead_form', payload: '' },
      { label: 'Cuộn tới form liên hệ', actionType: 'scroll_to', payload: '#contact' },
      { label: 'Sao chép Zalo', actionType: 'copy_text', payload: '0941518881' },
    ],
  };
}
