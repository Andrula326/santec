import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider } from '@/i18n/I18nProvider';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { InAppBrowserBanner } from '@/components/ui/InAppBrowserBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildLocalBusinessJsonLd, robotsMeta } from '@/lib/seo';
import { WhatsAppChat } from '@/components/WhatsAppChat';
import { env } from '@/lib/env';
import { DEFAULT_LOCALE } from '@/i18n/config';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: 'Santec Group GmbH – Asbestsanierung & Gebäudetechnik Schweiz',
    template: '%s | Santec Group',
  },
  description:
    'Santec Group GmbH – Ihr zertifizierter Schweizer Partner für Asbest- & Schadstoffsanierung, Rückbau, Lüftung, Klima, Sanitär, Elektroinstallation und Photovoltaik. SUVA-konform. Sicher. Sauber. Nachhaltig.',
  keywords: [
    'Asbestsanierung Schweiz',
    'Schadstoffsanierung',
    'Rückbau',
    'Gebäudetechnik',
    'Lüftung Klima',
    'Sanitär',
    'Elektroinstallation',
    'Photovoltaik',
    'SUVA',
    'Rüti ZH',
    'Santec Group',
    'Sanierung Zürich',
    'PCB Sanierung',
    'KMF Sanierung',
    'Brandschadensanierung',
  ],
  authors: [{ name: 'Santec Group GmbH', url: env.siteUrl }],
  creator: 'Santec Group GmbH',
  publisher: 'Santec Group GmbH',
  category: 'business',
  applicationName: 'Santec Group',
  formatDetection: { telephone: true, email: true, address: true },
  robots: robotsMeta(),
  alternates: {
    canonical: env.siteUrl,
    languages: {
      'de-CH': env.siteUrl,
      'fr-CH': env.siteUrl,
      'it-CH': env.siteUrl,
      'en': env.siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    alternateLocale: ['fr_CH', 'it_CH', 'en_US'],
    url: env.siteUrl,
    siteName: 'Santec Group GmbH',
    title: 'Santec Group GmbH – Asbestsanierung & Gebäudetechnik Schweiz',
    description:
      'Zertifizierte Asbest- & Schadstoffsanierung, Rückbau und moderne Gebäudetechnik in der ganzen Schweiz. SUVA-konform, termingerecht, nachhaltig.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Santec Group GmbH – Asbestsanierung & Gebäudetechnik Schweiz',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santec Group GmbH – Sanierung & Gebäudetechnik',
    description:
      'Zertifizierte Asbestsanierung und Gebäudetechnik in der Schweiz. SUVA-konform.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0F0E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={DEFAULT_LOCALE} className={inter.variable}>
      <body className="font-sans antialiased">
        <I18nProvider>
          <InAppBrowserBanner />
          {children}
          <CookieBanner />
          <WhatsAppChat />
        </I18nProvider>
        <JsonLd data={buildLocalBusinessJsonLd()} />
      </body>
    </html>
  );
}
