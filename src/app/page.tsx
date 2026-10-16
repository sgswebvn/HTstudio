'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { WorkProcess } from '@/components/WorkProcess';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ToastContainer } from '@/components/ToastContainer';
import { ToastMessage } from '@/types';

export default function HomePage() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
    scrollToContact();
    addToast('info', `Đã chọn gói: "${serviceName}". Vui lòng điền thông tin bên dưới.`);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Phần 1: Header */}
      <Header onOpenConsultation={scrollToContact} />

      <main id="main-content" className="flex-1">
        {/* Phần 2: Giới thiệu ngắn */}
        <Hero onOpenConsultation={scrollToContact} />

        {/* Phần 3: Dự án đã thực hiện (Trọng tâm số 1 - Đặt ngay sau Hero) */}
        <Projects />

        {/* Phần 4: Dịch vụ thiết kế */}
        <Services onSelectService={handleSelectService} />

        {/* Phần 5: Cách tôi làm việc (Quy trình 5 bước) */}
        <WorkProcess />

        {/* Phần 6: Giới thiệu ngắn về HT STUDIO */}
        <About />

        {/* Phần 7: Liên hệ & Tự động lưu Google Sheets */}
        <Contact prefilledService={prefilledService} onShowToast={addToast} />
      </main>

      {/* Phần 8: Footer tối giản */}
      <Footer onOpenDiagnostic={() => setDiagnosticOpen(true)} />

      {/* Chatbot tư vấn nhanh */}
      <Chatbot
        onScrollTo={scrollToSection}
        onShowToast={addToast}
      />

      {/* Google Sheets Diagnostic Modal */}
      <DiagnosticModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
