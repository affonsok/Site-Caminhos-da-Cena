'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

const news = [
  {
    date: '12 Abr, 2024',
    title: 'Nova oficina de interpretação abre inscrições para o próximo mês',
    excerpt: 'O grupo Palco & Cena abre as portas para novos talentos com uma oficina intensiva focada em teatro físico.',
    image: 'https://picsum.photos/seed/news1/800/600',
  },
  {
    date: '05 Abr, 2024',
    title: 'Palco & Cena recebe prêmio de melhor produção experimental',
    excerpt: 'Nosso último espetáculo "Fragmentos de Ontem" foi laureado no festival nacional de artes cênicas.',
    image: 'https://picsum.photos/seed/news2/800/600',
  },
  {
    date: '28 Mar, 2024',
    title: 'Turnê europeia confirmada para o segundo semestre',
    excerpt: 'Levaremos a cultura brasileira para os palcos de Portugal, Espanha e França em uma jornada de 3 meses.',
    image: 'https://picsum.photos/seed/news3/800/600',
  },
];

export function Noticias() {
  return (
    <section id="noticias" className="py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-serif">Notícias & Novidades</h2>
          <Button variant="link" className="text-black uppercase tracking-widest text-xs font-semibold">
            Ver Todas
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
