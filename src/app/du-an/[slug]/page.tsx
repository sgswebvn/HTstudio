import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import { personalInfo } from '@/data/personalData';
import { ProjectDetailClient } from './ProjectDetailClient';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Không tìm thấy dự án — HT STUDIO',
    };
  }

  return {
    title: `${project.title} — Câu Chuyện Dự Án | HT STUDIO`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${project.categoryLabel}`,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
