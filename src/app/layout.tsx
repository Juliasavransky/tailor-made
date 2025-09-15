import './globals.css';
import { Providers } from "../providers/Providers";
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito_Sans, Kelly_Slab} from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import ClientOnly from "@/components/ClientOnly";

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
  title: "Tailor Studio - Professional Tailoring & Handmade Fashion",
  description: "Professional tailoring with soul. Custom garments, clothing repairs, and handmade accessories featuring African-inspired designs.",
  authors: [{ name: "Tailor Studio" }],
  openGraph: {
    title: "Tailor Studio - Professional Tailoring & Handmade Fashion",
    description: "Professional tailoring with soul. Custom garments, clothing repairs, and handmade accessories featuring African-inspired designs.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={` ${nunito.variable} ${kellySlab.variable} antialiased max-w-[1440px] mx-auto p-8 text-center`}>
        <ThemeProvider>
        <ClientOnly>
          <Providers>
            {children}
            <Toaster richColors closeButton />
          </Providers>
        </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
