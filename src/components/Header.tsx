'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/data/personalData';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Dự án đã làm', href: '#projects' },
    { label: 'Dịch vụ', href: '#services' },
    { label: 'Quy trình', href: '#process' },
    { label: 'Về HT STUDIO', href: '#about' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo HT STUDIO */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#');
              }}
              id="brand-logo-link"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Về đầu trang"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-200 shadow-xs group-hover:border-slate-300 transition-colors">
                <img
                  src="/logo.png"
                  alt="HT STUDIO"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 text-base leading-tight tracking-tight">
                  {personalInfo.brandName}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Thiết kế website chuyên nghiệp
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-navigation" className="hidden md:flex items-center gap-7" aria-label="Menu chính">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                id="header-cta-btn"
                onClick={(e) => {
                  if (onOpenConsultation) {
                    e.preventDefault();
                    onOpenConsultation();
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 active:scale-95 transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Trao đổi với tôi</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900"
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide in from Right) */}
      <div
        id="mobile-nav-backdrop"
        className={`fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <aside
        id="mobile-nav-drawer"
        aria-label="Thanh điều hướng di động"
        className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Drawer Header: Logo + Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-slate-200 p-0.5">
                <img src="/logo.png" alt="HT STUDIO" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-sm text-slate-900 tracking-tight">HT STUDIO</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Đóng menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 active:bg-slate-200 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">›</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-6 border-t border-slate-200 space-y-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onOpenConsultation) {
                onOpenConsultation();
              } else {
                handleNavClick('#contact');
              }
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs text-center shadow-sm active:scale-95 transition-all"
          >
            <span>Trao đổi nhu cầu</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="text-center text-[11px] text-slate-500 space-y-0.5">
            <p>Hotline: {personalInfo.contact.phone}</p>
            <p>Hỗ trợ 24/7 trên toàn quốc</p>
          </div>
        </div>
      </aside>
    </>
  );
};
