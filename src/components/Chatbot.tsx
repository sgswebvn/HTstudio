'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  FileSpreadsheet,
  Minimize2,
} from 'lucide-react';
import { defaultQuickPrompts, findBotResponse } from '@/data/chatbotKnowledge';
import { ChatMessage } from '@/types';

interface ChatbotProps {
  onScrollTo?: (selector: string) => void;
  onShowToast: (type: 'success' | 'error' | 'info', message: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  onScrollTo,
  onShowToast,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Xin chào! Tôi là trợ lý tư vấn tự động của HT STUDIO. Bạn có thể bấm chọn nhanh các câu hỏi bên dưới hoặc gửi câu hỏi về nhu cầu làm website của mình.',
      timestamp: 'Vừa xong',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Mini lead form states
  const [leadName, setLeadName] = useState('');
  const [leadContact, setLeadContact] = useState('');
  const [leadNote, setLeadNote] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, showLeadForm]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Bây giờ',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const botResult = findBotResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResult.text,
        timestamp: 'Bây giờ',
        actions: botResult.actions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleActionClick = (action: {
    label: string;
    actionType: 'scroll_to' | 'copy_text' | 'open_lead_form' | 'navigate_to';
    payload: string;
  }) => {
    if (action.actionType === 'copy_text') {
      navigator.clipboard.writeText(action.payload);
      onShowToast('info', `Đã sao chép: ${action.payload}`);
    } else if (action.actionType === 'scroll_to') {
      if (onScrollTo) {
        onScrollTo(action.payload);
      } else {
        const el = document.querySelector(action.payload);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.actionType === 'navigate_to') {
      router.push(action.payload);
    } else if (action.actionType === 'open_lead_form') {
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadContact.trim()) {
      onShowToast('error', 'Vui lòng điền họ tên và số điện thoại/email.');
      return;
    }

    setLeadSubmitting(true);
    try {
      const isEmail = leadContact.includes('@');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: leadName.trim(),
          email: isEmail ? leadContact.trim() : 'lead-chat@htstudio.local',
          phone: !isEmail ? leadContact.trim() : '',
          service: 'Tư vấn nhanh qua Chatbot',
          message: leadNote.trim() || 'Khách hàng để lại thông tin tư vấn qua Chatbot HT STUDIO.',
          sourceChannel: 'Chatbot',
          pageSource: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const res = await response.json();
      if (response.ok && res.success) {
        setShowLeadForm(false);
        onShowToast('success', `Đã lưu thông tin vào Google Sheets! Mã: ${res.requestId}`);

        setMessages((prev) => [
          ...prev,
          {
            id: `bot-confirm-${Date.now()}`,
            sender: 'bot',
            text: `Cảm ơn bạn ${leadName}! Thông tin của bạn đã được ghi nhận vào Google Sheets với mã #${res.requestId}. HT STUDIO sẽ liên hệ lại với bạn sớm nhất.`,
            timestamp: 'Vừa xong',
          },
        ]);

        setLeadName('');
        setLeadContact('');
        setLeadNote('');
      } else {
        onShowToast('error', res.error || 'Có lỗi khi gửi thông tin.');
      }
    } catch {
      onShowToast('error', 'Lỗi kết nối máy chủ.');
    } finally {
      setLeadSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            id="chatbot-open-button"
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            aria-label="Mở khung chat tư vấn nhanh"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span>Tư vấn nhanh</span>
          </button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[540px] max-h-[82vh] bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fadeIn"
          role="dialog"
          aria-label="Khung chat tư vấn HT STUDIO"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-200 shadow-xs">
                <img
                  src="/logo.png"
                  alt="HT STUDIO"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xs text-slate-900 block">
                  Tư Vấn Nhanh HT STUDIO
                </span>
                <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Sẵn sàng phản hồi
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                aria-label="Thu nhỏ"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-100 text-slate-800 rounded-tl-none whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Action Buttons if provided */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.actions.map((act, aIdx) => (
                      <button
                        key={act.label}
                        type="button"
                        onClick={() => handleActionClick(act)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 transition-colors flex items-center gap-1 shadow-2xs"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="w-3 h-3 text-blue-500" />
                      </button>
                    ))}
                  </div>
                )}
                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 p-2.5 rounded-2xl bg-slate-100 w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* Inline Lead Capture Form */}
            {showLeadForm && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 animate-fadeIn space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Để lại thông tin nhận tư vấn</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="text-slate-400 hover:text-slate-700 text-xs"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn *"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Số điện thoại hoặc Email *"
                    value={leadContact}
                    onChange={(e) => setLeadContact(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                  />
                  <textarea
                    rows={2}
                    placeholder="Nhu cầu hoặc loại website cần làm (tùy chọn)..."
                    value={leadNote}
                    onChange={(e) => setLeadNote(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={leadSubmitting}
                    className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs disabled:opacity-50"
                  >
                    {leadSubmitting ? (
                      <span>Đang lưu vào Google Sheets...</span>
                    ) : (
                      <>
                        <Send className="w-3 h-3" />
                        <span>Xác nhận gửi thông tin</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Suggested Questions Strip */}
          <div className="p-2 bg-slate-50 border-t border-slate-200 overflow-x-auto flex gap-1.5 scrollbar-none">
            {defaultQuickPrompts.map((q) => (
              <button
                key={q.id}
                type="button"
                onClick={() => handleSendMessage(q.question)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors shrink-0"
              >
                {q.question}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs"
              aria-label="Gửi tin nhắn"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
