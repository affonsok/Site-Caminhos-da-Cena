import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprensa | Caminhos da Cena',
  description: 'Notícias, novidades e clipping de mídia do grupo de teatro Caminhos da Cena.',
};

export default function ImprensaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
