'use client';

import React from 'react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero-section"
      className="pt-24 pb-8 md:pt-28 md:pb-10 border-b border-slate-100 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Enlarged Banner */}
        <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-1.5 sm:p-2.5 transition-all">
          <img
            src="/banner.png"
            alt="HT STUDIO Banner"
            className="w-full h-auto object-cover rounded-xl md:rounded-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
