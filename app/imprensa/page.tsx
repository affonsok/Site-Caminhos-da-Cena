'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Noticias } from '@/components/Noticias';
import { Clipping } from '@/components/Clipping';

export default function ImprensaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Header - Pattern matching Espetaculos */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/layout/scene.jpg"
          alt="Imprensa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        {/* Breadcrumb / Back */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Início
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white/50 text-sm tracking-[0.3em] uppercase mb-4 block">
                Na Mídia
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] max-w-4xl">
                Imprensa
              </h1>
              <p className="mt-6 text-white/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                Notícias, novidades e o que a mídia tem dito sobre o Caminhos da Cena.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-[#fdfcfb]">
        <Noticias />
        <Clipping />
      </div>
      
      <Footer />
    </main>
  );
}
