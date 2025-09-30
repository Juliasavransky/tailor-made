import './globals.css';
import { Providers } from '../providers/Providers';
import type { Metadata } from 'next';
import { Nunito_Sans, Kelly_Slab } from 'next/font/google';
import { Toaster } from 'sonner';
import ClientOnly from '@/components/ClientOnly';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import { url } from 'inspector/promises';

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
  title: 'Grace Couture - Couture sur mesure & Mode artisanale',
  description:
    'Couture professionnelle avec une touche d’âme. Vêtements sur mesure, retouches de qualité et accessoires faits main aux inspirations africaines.',
  authors: [
    { name: 'Grace Couture', url: 'https://grace-couture.vercel.app/' },
  ],
  openGraph: {
    title: 'Grace Couture - Couture sur mesure à Paris',
    description:
      'Atelier de couture professionnelle : vêtements sur mesure, retouches de qualité, et créations artisanales inspirées d’Afrique.',
    url: 'https://grace-couture.vercel.app',
    siteName: 'Grace Couture',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://grace-couture.vercel.app/images/grace logo icon.png', 
        height: 630,
        alt: 'Grace Couture - Studio de couture artisanale à Paris',
      },
      {
        url: 'https://grace-couture.vercel.app/svg/webWitchLogo-yellow.svg',
        width: 400,
        height: 400,
        alt: 'Web Witch Studio - Création Web',
      },
    ],
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
