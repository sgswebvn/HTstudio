'use client';

import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Sparkles, FileSpreadsheet, ShieldCheck, MessageCircle } from 'lucide-react';
import { personalInfo, servicesData } from '@/data/personalData';
import { ContactFormData } from '@/types';

interface ContactProps {
  prefilledService?: string;
  onShowToast: (type: 'success' | 'error' | 'info', message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, onShowToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || 'Thiết Kế Website Doanh Nghiệp',
    budget: 'Dưới 10 triệu',
    message: '',
    referralSource: 'Tìm kiếm Google',
  });

  const [honey, setHoney] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    requestId: string;
    submittedAt: string;
    message: string;
  } | null>(null);

  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onShowToast('info', `Đã sao chép ${label}: ${text}`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      onShowToast('error', 'Vui lòng nhập họ và tên của bạn.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      onShowToast('error', 'Vui lòng nhập địa chỉ email hợp lệ để nhận báo giá.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      onShowToast('error', 'Vui lòng chia sẻ đôi điều về nhu cầu website của bạn (tối thiểu 5 ký tự).');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _honey: honey,
          sourceChannel: 'Website',
          pageSource: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData({
          requestId: result.requestId,
          submittedAt: result.submittedAt,
          message: result.message,
        });

        onShowToast(
          'success',
          `Gửi yêu cầu thành công! Mã yêu cầu: ${result.requestId}. Thông tin đã được lưu tự động.`
        );

        setFormData({
          fullName: '',
          phone: '',
          email: '',
          service: 'Thiết Kế Website Doanh Nghiệp',
          budget: 'Dưới 10 triệu',
          message: '',
          referralSource: 'Tìm kiếm Google',
        });
      } else {
        onShowToast('error', result.error || 'Có lỗi xảy ra khi gửi. Vui lòng thử lại.');
      }
    } catch (err) {
      console.error(err);
      onShowToast(
        'error',
        `Không thể kết nối máy chủ. Bạn vui lòng liên hệ qua email: ${personalInfo.contact.email}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Liên Hệ
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trao đổi nhu cầu làm website với HT STUDIO
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Bạn có thể điền biểu mẫu bên dưới hoặc liên hệ trực tiếp qua Zalo, Email để được tư vấn và nhận báo giá trong ngày.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Kênh trao đổi trực tiếp
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Bấm biểu tượng để sao chép nhanh thông tin liên hệ:
                </p>
              </div>

              <div className="space-y-3">
                {/* Phone / Hotline card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Hotline tư vấn</span>
                      <a href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`} className="text-xs font-bold text-slate-800 hover:text-emerald-700">
                        {personalInfo.contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.contact.phone, 'Số hotline')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    title="Sao chép số điện thoại"
                  >
                    {copiedItem === 'Số hotline' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Zalo card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                      Zalo
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Zalo cá nhân</span>
                      <a href={personalInfo.contact.zalo} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-800 hover:text-blue-700">
                        {personalInfo.contact.zaloPhone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.contact.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Chat ngay
                  </a>
                </div>

                {/* Email card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Email báo giá</span>
                      <a href={`mailto:${personalInfo.contact.email}`} className="text-xs font-medium text-slate-800 hover:underline">
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.contact.email, 'Email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    title="Sao chép Email"
                  >
                    {copiedItem === 'Email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Facebook card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1877f2]/10 text-[#1877f2] flex items-center justify-center">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Facebook</span>
                      <a href={personalInfo.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-slate-800 hover:text-blue-600">
                        HT STUDIO Web Design
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Xem page
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                <p><strong>Thời gian làm việc:</strong> {personalInfo.contact.workingHours}</p>
                <p><strong>Khu vực tiếp nhận:</strong> {personalInfo.contact.location}</p>
              </div>
            </div>

            {/* Google Sheets Sync notice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Tự động lưu vào Google Sheets</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Mỗi yêu cầu gửi qua website sẽ được ghi lại tự động với mã yêu cầu riêng và thời gian gửi theo giờ Việt Nam.
              </p>
            </div>
          </div>

          {/* Right Column: Complete Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-slate-700" />
                <span>Gửi thông tin nhu cầu làm website</span>
              </h3>

              {/* Success Notification */}
              {submittedData && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs animate-fadeIn space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>HT STUDIO đã tiếp nhận thông tin!</span>
                  </div>
                  <p>Mã yêu cầu của bạn: <strong className="font-mono">{submittedData.requestId}</strong></p>
                  <p>Thời gian ghi nhận: <span className="font-mono">{submittedData.submittedAt}</span></p>
                  <p className="text-emerald-700 text-[11px]">{submittedData.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="_honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Họ và tên */}
                <div>
                  <label htmlFor="form-fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên của bạn <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ví dụ: Anh Hoàng / Chị Thảo"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email tiếp nhận báo giá <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@cuahang.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại / Zalo <span className="text-slate-400 font-normal">(để gọi tư vấn nhanh)</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0988 xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Dịch vụ & Ngân sách */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-semibold text-slate-700 mb-1">
                      Dịch vụ bạn quan tâm
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Tư vấn giải pháp theo yêu cầu riêng">
                        Tư vấn giải pháp theo yêu cầu riêng
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-budget" className="block text-xs font-semibold text-slate-700 mb-1">
                      Ngân sách dự kiến
                    </label>
                    <select
                      id="form-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      <option value="Dưới 10 triệu">Dưới 10 triệu VNĐ</option>
                      <option value="10 - 20 triệu">10 - 20 triệu VNĐ</option>
                      <option value="20 - 40 triệu">20 - 40 triệu VNĐ</option>
                      <option value="Trên 40 triệu">Trên 40 triệu VNĐ</option>
                      <option value="Cần tư vấn cụ thể">Cần tư vấn cụ thể theo chức năng</option>
                    </select>
                  </div>
                </div>

                {/* Nội dung yêu cầu */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Mô tả mong muốn về website của bạn <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ví dụ: Tôi muốn làm website cho xưởng nội thất, cần có mục khoe ảnh các công trình đã hoàn thiện và nút gọi thợ nhanh trên điện thoại..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi yêu cầu nhận tư vấn &amp; Báo giá</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
