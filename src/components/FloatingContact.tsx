'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { personalInfo } from '@/data/personalData';

export const FloatingContact: React.FC = () => {
  return (
    <aside
      id="floating-contact-widget"
      aria-label="Kênh liên hệ nhanh"
      className="fixed right-4 bottom-24 md:bottom-28 z-40 flex flex-col items-center gap-3"
    >
      {/* Zalo Icon */}
      <a
        href={personalInfo.contact.zalo}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-zalo-btn"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0068ff] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Chat Zalo 0941518881"
      >
        <span className="font-bold text-xs tracking-tight">Zalo</span>
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#0068ff]/30 animate-ping pointer-events-none" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          Zalo: {personalInfo.contact.zaloPhone}
        </span>
      </a>

      {/* Phone / Hotline Icon */}
      <a
        href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
        id="floating-phone-btn"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Gọi điện 0789346079"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          Hotline: {personalInfo.contact.phone}
        </span>
      </a>

      {/* Facebook Icon */}
      <a
        href={personalInfo.contact.facebook}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-facebook-btn"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#1877f2] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Facebook HT STUDIO"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          Facebook HT STUDIO
        </span>
      </a>
    </aside>
  );
};
