'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShareBar } from '@/components/ShareBar';
import { getNewsBySlug } from '@/lib/noticias';

export default function NoticiaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fdfcfb]">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link
            href="/imprensa"
            className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-sm font-medium mb-12 uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Imprensa
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <Calendar className="w-4 h-4" />
              {item.date}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              {item.title}
            </h1>
            <p className="text-xl text-black/60 font-light leading-relaxed mb-12 border-l-2 border-black/10 pl-6 italic">
              {item.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="prose prose-lg max-w-none text-black/80 font-light leading-loose space-y-8">
              {item.content.split('\n').map((paragraph, idx) => (
                paragraph.trim() && <p key={idx}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Gallery if exists */}
            {item.gallery && item.gallery.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
                {item.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image src={img} alt={`Imagem ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-black/40">Compartilhe esta notícia</span>
                <ShareBar title={item.title} noBorder={true} className="p-0" />
              </div>
              
              <Link
                href="/imprensa"
                className="text-xs uppercase tracking-widest font-bold text-black border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                Ver todas as notícias
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
