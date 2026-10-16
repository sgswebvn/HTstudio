'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Project, ProjectCategory } from '@/types';
import { projectsData } from '@/data/projectsData';
import { Search, ArrowRight, ExternalLink, Sparkles, Smartphone, Monitor, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<{ id: ProjectCategory; label: string; count: number }> = [
    { id: 'all', label: 'Tất cả', count: projectsData.length },
    {
      id: 'woodwork-interior',
      label: 'Nội thất & Xưởng gỗ',
      count: projectsData.filter((p) => p.category === 'woodwork-interior').length,
    },
    {
      id: 'tools-automation',
      label: 'Tool FB & YouTube',
      count: projectsData.filter((p) => p.category === 'tools-automation').length,
    },
    {
      id: 'ecommerce',
      label: 'Bán hàng',
      count: projectsData.filter((p) => p.category === 'ecommerce').length,
    },
    {
      id: 'business',
      label: 'Doanh nghiệp',
      count: projectsData.filter((p) => p.category === 'business').length,
    },
    {
      id: 'content-media',
      label: 'Tin tức & Media',
      count: projectsData.filter((p) => p.category === 'content-media').length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (activeCategory !== 'all' && project.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          project.title.toLowerCase().includes(q) ||
          project.shortDescription.toLowerCase().includes(q) ||
          project.keyHighlight.toLowerCase().includes(q) ||
          project.categoryLabel.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-12 md:py-16 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dự Án Đã Thực Hiện
            </h2>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo loại website, tên..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-white/20 text-white font-bold'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid: Diverse Layout with Featured Prominence */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <Layers className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Không tìm thấy dự án phù hợp</h3>
            <p className="text-xs text-slate-500">Hãy thử tìm với từ khóa khác hoặc bấm xem tất cả.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800"
            >
              Bỏ lọc tìm kiếm
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {/* 1. Large Spotlight Project (first in list) */}
            {filteredProjects[0] && (
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:border-slate-300 transition-all hover:shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left: Large Image Mockup */}
                  <div className="lg:col-span-7 bg-white p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                    <Link
                      href={`/du-an/${filteredProjects[0].slug}`}
                      className="block relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 group"
                    >
                      <img
                        src={filteredProjects[0].coverImage}
                        alt={filteredProjects[0].title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white text-slate-900 shadow-sm border border-slate-200">
                          {filteredProjects[0].categoryLabel}
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded-md text-[10px] font-bold shadow-sm ${
                            filteredProjects[0].isRealProject
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-600 text-white'
                          }`}
                        >
                          {filteredProjects[0].isRealProject ? 'Dự án thực tế' : 'Bản thiết kế đề xuất'}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Right: Project Details & Actions */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span>{filteredProjects[0].clientType}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                        <Link
                          href={`/du-an/${filteredProjects[0].slug}`}
                          className="hover:underline decoration-slate-400"
                        >
                          {filteredProjects[0].title}
                        </Link>
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {filteredProjects[0].shortDescription}
                      </p>

                      {/* Key Highlight Pill Box */}
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                        <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider">
                          Điểm nổi bật của website:
                        </span>
                        <p className="leading-normal">{filteredProjects[0].keyHighlight}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                      <Link
                        href={`/du-an/${filteredProjects[0].slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                      >
                        <span>Xem chi tiết &amp; Sơ đồ website</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {filteredProjects[0].demoUrl && (
                        <a
                          href={filteredProjects[0].demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-300 transition-colors"
                        >
                          <span>Xem web thật</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Grid of other balanced projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(1).map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <Link
                      href={`/du-an/${project.slug}`}
                      className="block relative aspect-[16/10] w-full bg-slate-50 overflow-hidden border-b border-slate-100"
                    >
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-800 shadow-sm border border-slate-200">
                          {project.categoryLabel}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[9px] font-bold shadow-sm ${
                            project.isRealProject
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-600 text-white'
                          }`}
                        >
                          {project.isRealProject ? 'Dự án thực tế' : 'Bản mẫu'}
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      <span className="text-[11px] font-medium text-slate-500 block">
                        {project.clientType}
                      </span>

                      <h3 className="text-base font-bold text-slate-900 group-hover:underline leading-snug">
                        <Link href={`/du-an/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-700">
                        <strong className="text-slate-900">Nổi bật: </strong>
                        <span className="line-clamp-2">{project.keyHighlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 py-3.5 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/du-an/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-slate-700"
                    >
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                      >
                        <span>Xem web thật</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
