import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Cena } from '@/components/Cena';
import { Espetaculos } from '@/components/Espetaculos';
import { Integrantes } from '@/components/Integrantes';
import { Noticias } from '@/components/Noticias';
import { Galeria } from '@/components/Galeria';
import { Clipping } from '@/components/Clipping';
import { Patrocinio } from '@/components/Patrocinio';
import { InstagramTicker } from '@/components/InstagramTicker';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Cena />
      <Espetaculos />
      <Integrantes />
      <Noticias />
      <Galeria />
      <Clipping />
      <Patrocinio />
      <InstagramTicker />
      <Footer />
    </main>
  );
}
