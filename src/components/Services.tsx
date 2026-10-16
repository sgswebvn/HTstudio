'use client';

import React from 'react';
import { servicesData } from '@/data/personalData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Dịch Vụ Cung Cấp
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Các gói thiết kế website tại HT STUDIO
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tập trung vào những giải pháp thiết thực, mang lại hiệu quả thật cho công việc kinh doanh của bạn.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                    {service.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Benefits */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Lợi ích mang lại:
                  </span>
                  <ul className="space-y-1.5">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.title);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group"
                >
                  <span>Trao đổi về dịch vụ này</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
