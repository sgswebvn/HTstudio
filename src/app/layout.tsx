import type { Metadata, Viewport } from 'next';
import './globals.css';
import { personalInfo } from '@/data/personalData';

export const metadata: Metadata = {
  title: `${personalInfo.brandName} — Thiết Kế Website Chuyên Nghiệp Cho Cá Nhân, Cửa Hàng & Doanh Nghiệp`,
  description:
    'HT STUDIO chuyên thiết kế website chỉn chu, hiện đại: Website doanh nghiệp, website bán hàng, landing page và website chuyên sâu cho xưởng gỗ, nội thất. Hiển thị mượt mà trên điện thoại, tự động hóa lưu khách hàng vào Google Sheets.',
  authors: [{ name: personalInfo.brandName }],
  keywords: [
    'HT STUDIO',
    'Thiết kế website',
    'Thiết kế website doanh nghiệp',
    'Website xưởng gỗ',
    'Website nội thất',
    'Landing page bán hàng',
    'Thiết kế web Hà Nội',
    'Thiết kế web TP HCM',
  ],
  openGraph: {
    title: `${personalInfo.brandName} — Thiết Kế Website Chỉn Chu & Hiện Đại`,
    description: personalInfo.heroIntro,
    type: 'website',
    locale: 'vi_VN',
    siteName: personalInfo.brandName,
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.brandName} Banner`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.brandName,
    description: personalInfo.tagline,
    images: ['/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

import { FloatingContact } from '@/components/FloatingContact';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: personalInfo.brandName,
    description: personalInfo.heroIntro,
    email: personalInfo.contact.email,
    telephone: personalInfo.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Vietnam',
    },
    serviceType: [
      'Thiết kế website doanh nghiệp',
      'Thiết kế website bán hàng',
      'Thiết kế landing page',
      'Thiết kế website xưởng gỗ và nội thất',
    ],
  };

  return (
    <html lang="vi" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
