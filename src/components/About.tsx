'use client';

import React from 'react';
import { personalInfo } from '@/data/personalData';
import { CheckCircle2, ShieldCheck, HeartHandshake, Laptop, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Giới Thiệu
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Về HT STUDIO
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {personalInfo.aboutShort}
          </p>
        </div>

        {/* 4 Pillars of Working with HT STUDIO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors space-y-3"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment note */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Cam kết của HT STUDIO:</strong> Chỉ nhận số lượng dự án vừa đủ trong từng thời điểm để đảm bảo chăm chút từng chi tiết, bàn giao đúng hẹn và hỗ trợ tận tình.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs whitespace-nowrap"
          >
            <span>Bắt đầu trao đổi</span>
          </a>
        </div>
      </div>
    </section>
  );
};
