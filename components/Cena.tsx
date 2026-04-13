'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function Cena() {
  return (
    <section id="cena" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/scene/800/1000"
              alt="A Cena"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 m-8 rounded-lg pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-black/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              O Conceito
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              A Cena como Espelho da <span className="italic">Alma</span>
            </h2>
            <div className="space-y-6 text-lg text-black/70 leading-relaxed font-light">
              <p>
                Para nós, o teatro não é apenas representação, mas uma vivência visceral. Cada espetáculo é um laboratório de emoções onde o ator e o público se fundem em um único momento irrepetível.
              </p>
              <p>
                Nossa pesquisa foca na linguagem contemporânea, buscando no corpo e na voz a potência máxima da narrativa. Acreditamos na cena como um espaço de provocação, reflexão e, acima de tudo, humanidade.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-black/5 pt-12">
              <div>
                <h4 className="text-3xl font-serif mb-2">15+</h4>
                <p className="text-sm text-black/50 uppercase tracking-wider">Anos de História</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif mb-2">40+</h4>
                <p className="text-sm text-black/50 uppercase tracking-wider">Produções Originais</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
