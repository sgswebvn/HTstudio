'use client';

import React, { useState, useEffect } from 'react';
import { X, RefreshCw, FileSpreadsheet, ShieldCheck } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    status: string;
    message: string;
    sheetTitle?: string;
    expectedHeaders: string[];
    environmentChecks: Record<string, string>;
  } | null>(null);

  const fetchDiagnostic = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/sheets-diagnostic');
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchDiagnostic();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Trạng Thái Kết Nối Google Sheets
              </h3>
              <span className="text-[11px] text-slate-500">
                Tự động lưu trữ thông tin khách hàng từ Form &amp; Chatbot
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-xs text-slate-600">
          {/* Status Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Trạng thái:
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    data?.status === 'connected' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
                <span className="font-bold text-xs text-slate-900">
                  {data?.message || 'Đang kiểm tra...'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={fetchDiagnostic}
              disabled={loading}
              className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors"
              title="Kiểm tra lại"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Environment Checks */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Kiểm tra biến môi trường trong file .env:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data?.environmentChecks &&
                Object.entries(data.environmentChecks).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <span className="font-mono text-[11px] text-slate-700">{key}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        val.includes('Đã')
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {val}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* 12 columns guide */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Cấu trúc 12 Cột Bảng Tính (Cột A -&gt; L)
            </h4>
            <div className="flex flex-wrap gap-1.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
              {data?.expectedHeaders.map((col, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-700"
                >
                  <strong className="text-slate-400">{String.fromCharCode(65 + idx)}:</strong> {col}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
            <p><strong>Cơ chế dự phòng an toàn:</strong></p>
            <p>
              Nếu chưa cấu hình Google Sheet ID, mọi thông tin khách gửi sẽ được lưu an toàn tại máy chủ: <code className="bg-white px-1 rounded border border-slate-200">data/contact_submissions.json</code>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
