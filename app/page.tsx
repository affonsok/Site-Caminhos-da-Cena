import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Cena } from '@/components/Cena';
import { Espetaculos } from '@/components/Espetaculos';
import { Integrantes } from '@/components/Integrantes';
import { Historia } from '@/components/Historia';
import { Galeria } from '@/components/Galeria';
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
      <Historia />
      <Galeria />
      <Patrocinio />
      <InstagramTicker />
      <Footer />
    </main>
  );
}
