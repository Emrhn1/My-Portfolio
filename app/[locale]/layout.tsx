// app/[locale]/layout.tsx — Locale-aware layout
import type { Metadata } from 'next';
import { Space_Mono, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ThemeContextProvider from '../components/ThemeContextProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommandPaletteProvider from '../components/CommandPaletteProvider';
import PageTransition from '../components/PageTransition';
import '../globals.css';

const routing = { locales: ['tr', 'en'] as const };
const baseUrl = 'https://www.emirhanerkan.com';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: '--font-space-mono',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500', '700'],
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

// ── Locale-aware metadata ──────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  const title = 'Emirhan Erkan — Frontend Developer';
  const description = isTr
    ? 'Türkiye\'den bir frontend geliştirici. React, Next.js ve TypeScript ile modern web uygulamaları inşa ediyorum.'
    : 'Frontend developer from Turkey. Building modern web applications with React, Next.js and TypeScript.';

  return {
    title: {
      default: title,
      template: `%s | Emirhan Erkan`,
    },
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        tr: `${baseUrl}/tr`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName: 'Emirhan Erkan',
      locale: isTr ? 'tr_TR' : 'en_US',
      alternateLocale: isTr ? 'en_US' : 'tr_TR',
      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: 'Emirhan Erkan — Frontend Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@emirhanerkan',
      images: [`${baseUrl}/${locale}/opengraph-image`],
    },
    icons: {
      icon: '/icon.svg',
      shortcut: '/icon.svg',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    keywords: [
      'frontend developer', 'React', 'Next.js', 'TypeScript',
      'Tailwind CSS', 'web developer', 'portfolio',
      ...(isTr ? ['frontend geliştirici', 'web geliştirici', 'portföy'] : []),
    ],
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'tr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${spaceMono.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-to-content">
          {locale === 'tr' ? 'İçeriğe geç' : 'Skip to content'}
        </a>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeContextProvider>
            <CommandPaletteProvider>
              <Navbar />
              <main id="main-content">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </CommandPaletteProvider>
            <Analytics />
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
