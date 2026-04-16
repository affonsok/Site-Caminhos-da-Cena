'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, ExternalLink } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShareBar } from '@/components/ShareBar';
import { getClippingBySlug } from '@/lib/clipping';

export default function ClippingDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = getClippingBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link
            href="/imprensa"
            className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-sm font-medium mb-16 uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Clipping
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-semibold mb-6 block">
                {item.source} • {item.date}
              </span>
              
              <div className="relative mb-12">
                <Quote className="absolute -left-12 -top-8 w-20 h-20 text-black/[0.03] -z-10" />
                <h1 className="text-4xl md:text-6xl font-serif leading-tight italic">
                  {item.title}
                </h1>
              </div>

              <div className="prose prose-xl max-w-none text-black/70 font-light leading-relaxed mb-16 space-y-8">
                {item.fullContent.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx}>{paragraph.trim()}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-10 pt-10 border-t border-black/5">
                <div className="flex items-center gap-6">
                  {item.href && item.href !== '#' && (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white bg-black px-6 py-4 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Matéria Original
                    </a>
                  )}
                  <ShareBar title={item.title} noBorder={true} className="p-0" />
                </div>

                <Link
                  href="/imprensa"
                  className="text-xs uppercase tracking-widest font-semibold text-black/40 hover:text-black transition-colors"
                >
                  Explorar mais clippings
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
