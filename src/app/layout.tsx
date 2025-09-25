import './globals.css';
import { Providers } from '../providers/Providers';
import type { Metadata } from 'next';
import { Nunito_Sans, Kelly_Slab } from 'next/font/google';
import { Toaster } from 'sonner';
import ClientOnly from '@/components/ClientOnly';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';

const nunito = Nunito_Sans({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: '400',
});

const kellySlab = Kelly_Slab({
  variable: '--font-kelly-slab',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Tailor Studio - Professional Tailoring & Handmade Fashion',
  description:
    'Professional tailoring with soul. Custom garments, clothing repairs, and handmade accessories featuring African-inspired designs.',
  authors: [{ name: 'Tailor Studio' }],
  openGraph: {
    title: 'Tailor Studio - Professional Tailoring & Handmade Fashion',
    description:
      'Professional tailoring with soul. Custom garments, clothing repairs, and handmade accessories featuring African-inspired designs.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr' data-theme='light' style={{ colorScheme: 'light' }}>
      <body
        className={` ${nunito.variable} ${kellySlab.variable} antialiased max-w-[1440px] mx-auto px-8 pt-8 text-center`}
      >
        <a
          href='#contenu'
          className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-2xl focus:bg-white focus:ring'
        >
          Aller au contenu principal
        </a>
        <ClientOnly>
          <AccessibilityToolbar />
          <Providers>
            <main id='contenu'>{children}</main>
            <Toaster richColors closeButton />
          </Providers>
        </ClientOnly>
      </body>
    </html>
  );
}
