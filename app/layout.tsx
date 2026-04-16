import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: 'Caminhos da Cena - Grupo de Teatro',
  description: 'Site oficial do grupo de teatro Caminhos da Cena. Espetáculos, notícias, integrantes e clipping.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn("font-sans antialiased scroll-smooth", inter.variable, cormorant.variable)}>
      <head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning className="bg-[#fdfcfb] text-[#1a1a1a]">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
