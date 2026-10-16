'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/personalData';
import { FileSpreadsheet } from 'lucide-react';

interface FooterProps {
  onOpenDiagnostic?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiagnostic }) => {
  return (
    <footer id="main-footer" className="bg-slate-50 border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-200 shadow-xs">
                <img
                  src="/logo.png"
                  alt="HT STUDIO"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-slate-900 text-base">
                {personalInfo.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {personalInfo.tagline}. Chuyên sâu về website doanh nghiệp, bán hàng và xưởng gỗ, nội thất.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Xem nhanh
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><a href="#projects" className="hover:text-slate-950 transition-colors">Dự án đã làm</a></li>
              <li><a href="#services" className="hover:text-slate-950 transition-colors">Dịch vụ thiết kế</a></li>
              <li><a href="#process" className="hover:text-slate-950 transition-colors">Quy trình 5 bước</a></li>
              <li><a href="#about" className="hover:text-slate-950 transition-colors">Về HT STUDIO</a></li>
              <li><a href="#contact" className="hover:text-slate-950 transition-colors">Liên hệ tư vấn</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Liên hệ
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <strong>Hotline:</strong>{' '}
                <a href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`} className="hover:text-slate-900 font-medium">
                  {personalInfo.contact.phone}
                </a>
              </li>
              <li>
                <strong>Zalo:</strong>{' '}
                <a href={personalInfo.contact.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-medium">
                  {personalInfo.contact.zaloPhone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-slate-900">
                  {personalInfo.contact.email}
                </a>
              </li>
              <li>
                <strong>Facebook:</strong>{' '}
                <a href={personalInfo.contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  HT STUDIO Web Design
                </a>
              </li>
              <li>
                <strong>Khu vực:</strong> {personalInfo.contact.location}
              </li>
              <li>
                <strong>Thời gian:</strong> {personalInfo.contact.workingHours}
              </li>
              {onOpenDiagnostic && (
                <li className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenDiagnostic}
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 text-[11px]"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Trạng thái kết nối Google Sheets</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.brandName}. Bản quyền được bảo lưu.</p>
          <p>Thiết kế website hiện đại, tinh giản và hiệu quả.</p>
        </div>
      </div>
    </footer>
  );
};
