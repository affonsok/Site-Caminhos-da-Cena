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
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.caminhosdacena.com.br';
  const espetaculoUrl = `${siteUrl}/espetaculos/${slug}`;

  // Make sure to use the absolute URL for the image
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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: espetaculo.title,
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
