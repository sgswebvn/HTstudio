'use client';

import React from 'react';
import { workProcessSteps } from '@/data/personalData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Quy Trình 5 Bước
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cách tôi làm việc với bạn
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Quy trình gọn gàng, rõ ràng từng giai đoạn giúp bạn luôn biết website của mình đang được thực hiện đến đâu.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {workProcessSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900 font-mono">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Bàn giao:
                </span>
                <p className="text-[11px] text-slate-800 font-medium">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
