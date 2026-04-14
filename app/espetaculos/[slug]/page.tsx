'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { getEspetaculoBySlug } from '@/lib/espetaculos';
import { cn } from '@/lib/utils';
import { ShareBar } from '@/components/ShareBar';

export default function EspetaculoPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const espetaculo = getEspetaculoBySlug(slug);

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  if (!espetaculo) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Espetáculo não encontrado</h1>
          <Link href="/#espetaculos" className="text-red-700 underline underline-offset-4">
            Voltar para Espetáculos
          </Link>
        </div>
      </main>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % espetaculo.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + espetaculo.gallery.length) % espetaculo.gallery.length);
  };

  return (
    <main className="min-h-screen">
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src={espetaculo.heroImage}
          alt={espetaculo.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        {/* Breadcrumb / Back */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <Link
              href="/#espetaculos"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Espetáculos
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
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge
                  className={cn(
                    'rounded-full px-4 py-1.5 text-[11px] uppercase tracking-widest',
                    espetaculo.status === 'Em Cartaz'
                      ? 'bg-red-600 text-white'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                  )}
                >
                  {espetaculo.status}
                </Badge>
                <span className="text-white/50 text-sm tracking-wider uppercase">
                  {espetaculo.category} • {espetaculo.year}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] max-w-4xl">
                {espetaculo.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================== SINOPSE ====================== */}
      <section className="py-16 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-red-700" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-semibold">
                Sinopse
              </h2>
            </div>
            <div className="relative">
              <Quote className="absolute -top-4 -left-6 h-12 w-12 text-red-700/10 rotate-180" />
              <p className="text-lg md:text-xl leading-relaxed text-black/70 font-light font-serif italic">
                {espetaculo.synopsis}
              </p>
            </div>
            <ShareBar title={espetaculo.title} />
          </motion.div>
        </div>
      </section>

      {/* ====================== ELENCO & PRODUÇÃO ====================== */}
      <section className="py-16 md:py-24 bg-[#f8f7f5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-[2px] bg-red-700" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-semibold">
                Elenco & Produção
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {espetaculo.cast.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center group"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-base font-medium leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-black/40 mt-1">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== GALERIA DE FOTOS ====================== */}
      <section className="py-16 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-[2px] bg-red-700" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-semibold">
                Galeria de Fotos
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {espetaculo.gallery.map((photo, index) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={photo}
                    alt={`${espetaculo.title} - Foto ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== FICHA TÉCNICA ====================== */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-[2px] bg-red-500" />
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-semibold">
                Ficha Técnica
              </h2>
            </div>

            <dl className="space-y-0">
              {espetaculo.techSheet.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-baseline justify-between py-4 border-b border-white/10"
                >
                  <dt className="text-white/40 text-xs uppercase tracking-widest font-medium w-1/3">
                    {item.label}
                  </dt>
                  <dd className="font-serif text-lg text-white/90 text-right m-0">
                    {item.value}
                  </dd>
                </motion.div>
              ))}
            </dl>

            {espetaculo.support && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between"
              >
                <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
                  Apoio
                </span>
                <span className="font-serif text-base text-red-400/90 text-right">
                  {espetaculo.support}
                </span>
              </motion.div>
            )}

            <div className="mt-16 text-center">
              <Link
                href="/#espetaculos"
                className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Ver Todos os Espetáculos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== LIGHTBOX ====================== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110]"
            >
              <X className="h-8 w-8" />
            </button>

            <div
              className="relative w-full max-w-[90vw] aspect-video flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={espetaculo.gallery[lightboxIndex]}
                    alt={`${espetaculo.title} - ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevImage}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <div className="text-white font-serif text-2xl mb-1">{espetaculo.title}</div>
                <p className="text-white/40 text-sm uppercase tracking-widest">
                  {lightboxIndex + 1} / {espetaculo.gallery.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
