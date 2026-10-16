'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project, SiteMapNode } from '@/types';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  Smartphone,
  Monitor,
  ShieldCheck,
  ChevronLeft,
  X,
  Compass,
  GitBranch,
} from 'lucide-react';

interface Props {
  project: Project;
  nextProject: Project;
}

export const ProjectDetailClient: React.FC<Props> = ({ project, nextProject }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [
    { url: project.coverImage, caption: project.title, isCover: true },
  ];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-24">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách dự án</span>
          </Link>

          <Link href="/" className="flex items-center gap-2 font-extrabold text-base tracking-tight text-slate-900">
            <div className="w-7 h-7 rounded-md overflow-hidden bg-white border border-slate-200">
              <img src="/logo.png" alt="HT STUDIO" className="w-full h-full object-contain" />
            </div>
            <span>HT STUDIO</span>
          </Link>

          <Link
            href={`/#contact`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            <span>Trao đổi về dự án tương tự</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-16">
        {/* A. PHẦN ĐẦU TRANG */}
        <section className="space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-slate-800">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#projects" className="hover:text-slate-800">Dự án đã làm</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-slate-800">{project.title}</span>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {project.categoryLabel}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  project.isRealProject
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}
              >
                ● {project.statusLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
            >
              <span>Trao đổi về dự án tương tự</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-300 transition-colors"
              >
                <span>Xem website chạy thực tế</span>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>
            )}
          </div>

          {/* Large Hero Showcase Image */}
          <div
            className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm cursor-zoom-in group"
            onClick={() => setLightboxOpen(true)}
            title="Bấm để xem ảnh phóng to"
          >
            <div className="aspect-[16/9] w-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs font-semibold text-white">
              Bấm để xem ảnh lớn (Phóng to)
            </div>
          </div>
        </section>

        {/* B. GIỚI THIỆU DỰ ÁN */}
        <section className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600">
            Câu Chuyện Dự Án
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Mục Đích Xây Dựng
                </h3>
                <p className="text-base text-slate-800 leading-relaxed">
                  {project.purpose}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Đối Tượng Sử Dụng
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.targetAudience}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Vấn Đề Đã Giải Quyết
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  Điểm nổi bật nhất của dự án:
                </span>
                <p className="text-xs text-slate-600 leading-normal">
                  {project.keyHighlight}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C. BỘ SƯU TẬP HÌNH ẢNH */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Bộ Sưu Tập Hình Ảnh Giao Diện
            </h2>
            <p className="text-sm text-slate-600">
              Xem chi tiết bố cục trang chủ, các khu vực chức năng và khả năng hiển thị trên màn hình máy tính và điện thoại.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveImageIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group cursor-pointer rounded-xl border border-slate-200 overflow-hidden bg-slate-50 hover:border-slate-300 transition-all hover:shadow-md"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-200"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-xs text-slate-700 font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* D. SƠ ĐỒ CẤU TRÚC WEBSITE & SƠ ĐỒ LUỒNG SỬ DỤNG */}
        {project.siteMapTree && (
          <section className="p-8 rounded-2xl bg-white border border-slate-200 space-y-8 shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                <GitBranch className="w-3.5 h-3.5 text-slate-700" />
                <span>Sơ Đồ Cấu Trúc Website</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Cách các trang và nội dung được tổ chức
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Sơ đồ phân cấp giúp khách hàng dễ dàng tìm thấy thông tin mình cần chỉ sau 1 đến 2 lần bấm chuột.
              </p>
            </div>

            {/* Tree visual rendering */}
            <div className="space-y-4">
              {project.siteMapTree.map((root, rIdx) => (
                <div key={rIdx} className="space-y-4">
                  {/* Root Node (Trang chủ) */}
                  <div className="p-4 rounded-xl bg-slate-900 text-white">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                      Cấp 1 — Cửa ngõ chính
                    </span>
                    <h3 className="text-base font-bold">{root.name}</h3>
                    <p className="text-xs text-slate-300 mt-0.5">{root.description}</p>
                  </div>

                  {/* Children Nodes (Cấp 2) */}
                  {root.children && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pl-3 sm:pl-6 border-l-2 border-slate-200 ml-4">
                      {root.children.map((child, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                              Trang con
                            </span>
                            <h4 className="text-xs font-bold text-slate-900">{child.name}</h4>
                            <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                              {child.description}
                            </p>
                          </div>

                          {/* Sub-children if any (Cấp 3) */}
                          {child.children && child.children.length > 0 && (
                            <div className="mt-3 pt-2.5 border-t border-slate-200 space-y-1.5">
                              {child.children.map((sub, sIdx) => (
                                <div key={sIdx} className="text-[10px] text-slate-700 pl-2 border-l border-slate-300">
                                  <strong>{sub.name}</strong>: {sub.description}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* User Flow Diagram */}
            {project.userFlow && (
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <Compass className="w-4 h-4 text-slate-700" />
                  <span>Sơ Đồ Luồng Sử Dụng Của Khách Hàng</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.userFlow.map((flow) => (
                    <div
                      key={flow.stepNumber}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative"
                    >
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-3">
                        {flow.stepNumber}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 mb-1">{flow.action}</h4>
                      <span className="text-[11px] font-mono text-slate-500 block mb-2">
                        {flow.screen}
                      </span>
                      <p className="text-xs text-slate-600 leading-normal border-t border-slate-200 pt-2">
                        <strong>Kết quả:</strong> {flow.outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* E. CÁC CHỨC NĂNG NỔI BẬT */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
              Chức Năng Nổi Bật Của Website
            </h2>
            <p className="text-sm text-slate-600">
              Những chức năng thiết thực giúp website vận hành hiệu quả và đem lại trải nghiệm tốt nhất cho người xem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.coreFeatures.map((feat, fIdx) => (
              <div key={fIdx} className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* F. CÔNG VIỆC ĐÃ THỰC HIỆN */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Phần Việc HT STUDIO Đã Trực Tiếp Thực Hiện
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.myWork.map((work, wIdx) => (
              <div key={wIdx} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                <span>{work}</span>
              </div>
            ))}
          </div>
        </section>

        {/* G. KẾT THÚC TRANG CHI TIẾT */}
        <section className="pt-10 border-t border-slate-200 space-y-8">
          {/* Next project preview card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-slate-300 transition-colors">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Dự án tiếp theo
              </span>
              <h3 className="text-xl font-bold text-slate-900">{nextProject.title}</h3>
              <p className="text-xs text-slate-600 max-w-md">{nextProject.shortDescription}</p>
            </div>

            <Link
              href={`/du-an/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shrink-0 transition-colors"
            >
              <span>Xem dự án này</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Call to action card */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Bạn muốn xây dựng một website tương tự?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              HT STUDIO sẵn sàng lắng nghe nhu cầu của bạn, tư vấn giải pháp bố cục phù hợp nhất và gửi báo giá chi tiết trong vòng 24 giờ.
            </p>
            <div className="pt-2">
              <Link
                href={`/#contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-all"
              >
                <span>Nhận tư vấn &amp; Báo giá ngay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700"
            aria-label="Đóng phóng to ảnh"
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white"
                aria-label="Ảnh sau"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <img
            src={images[activeImageIndex]?.url || project.coverImage}
            alt={images[activeImageIndex]?.caption}
            className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg"
          />
          <p className="text-slate-300 text-sm mt-4 text-center">
            {images[activeImageIndex]?.caption} ({activeImageIndex + 1}/{images.length})
          </p>
        </div>
      )}
    </div>
  );
};
