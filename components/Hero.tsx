'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    image: '/images/espetaculos/hero1.jpg',
    title: 'A Arte de Viver o Palco',
    subtitle: 'Explorando as fronteiras da expressão humana através do teatro contemporâneo.',
  },
  {
    image: '/images/espetaculos/hero2.jpg',
    title: 'Novas Perspectivas',
    subtitle: 'Temporada 2024: Uma jornada por clássicos reinventados e obras inéditas.',
  },
  {
    image: '/images/espetaculos/hero3.jpg',
    title: 'Conexão e Emoção',
    subtitle: 'Onde cada cena conta uma história que ressoa na alma do espectador.',
  },
];

export function Hero() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover opacity-60"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-start">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="text-white/60 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
            Grupo de Teatro Caminhos da Cena
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6 break-words">
            {slides[current].title}
          </h1>
          <p className="text-xl text-white/80 mb-10 font-light leading-relaxed max-w-xl">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 text-lg w-full sm:w-auto">
              Ver Espetáculos
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg w-full sm:w-auto">
              Nossa História
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 flex space-x-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-1 transition-all duration-500 rounded-full',
              current === i ? 'w-12 bg-white' : 'w-4 bg-white/30'
            )}
          />
        ))}
      </div>
    </section>
  );
}
