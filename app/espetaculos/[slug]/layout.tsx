import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getEspetaculoBySlug } from '@/lib/espetaculos';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const espetaculo = getEspetaculoBySlug(slug);
  
  if (!espetaculo) {
    return {
      title: 'Espetáculo não encontrado | Caminhos da Cena'
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://caminhosdacena.netlify.app';
  const espetaculoUrl = `${siteUrl}/espetaculos/${slug}`;

  // Make sure to use the absolute URL for the image (required for WhatsApp/social crawlers)
  const imageUrl = espetaculo.heroImage.startsWith('http') 
    ? espetaculo.heroImage 
    : `${siteUrl}${espetaculo.heroImage}`;

  const description = espetaculo.synopsis.slice(0, 160) + (espetaculo.synopsis.length > 160 ? '...' : '');

  return {
    title: `${espetaculo.title} | Caminhos da Cena`,
    description,
    openGraph: {
      title: espetaculo.title,
      description,
      url: espetaculoUrl,
      siteName: 'Caminhos da Cena',
      locale: 'pt_BR',
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1081,
          alt: espetaculo.title,
          type: 'image/jpeg',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: espetaculo.title,
      description,
      images: [imageUrl],
    },
    // Tags explícitas para garantir compatibilidade com crawlers (WhatsApp, Telegram, etc.)
    other: {
      'og:image:width': '1920',
      'og:image:height': '1081',
      'og:image:type': 'image/jpeg',
      'og:image:alt': espetaculo.title,
    },
  };
}

export default function EspetaculoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
