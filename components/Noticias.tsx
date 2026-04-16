'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ShareBar } from '@/components/ShareBar';
import { news } from '@/lib/noticias';

export function Noticias() {
  return (
    <section id="noticias" className="py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-serif">Notícias & Novidades</h2>
          <Button 
            variant="link" 
            className="text-black uppercase tracking-widest text-xs font-semibold"
            render={<Link href="/imprensa" />}
          >
            Ver Todas
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {news.map((item, index) => {
            const newsId = `noticia-${index + 1}`;
            return (
              <motion.article
                key={item.title}
                id={newsId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block"
              >
                <Link href={`/imprensa/noticias/${item.slug}`} className="block">
                  <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-black/40 mb-3 block">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {item.title}
                  </h3>
                  <p className="text-black/60 font-light leading-relaxed">
                    {item.excerpt}
                  </p>
                </Link>
                <ShareBar 
                  title={item.title} 
                  messagePrefix="Confira esta notícia"
                  className="mt-6 pt-4"
                  noBorder={true}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
