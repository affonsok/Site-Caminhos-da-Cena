'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const milestones = [
  {
    year: '2009',
    title: 'O Começo',
    description:
      'Um grupo de seis jovens atores e atrizes, apaixonados pelo teatro de grupo, se reuniu pela primeira vez em um salão emprestado no centro da cidade. Com poucos recursos e muita determinação, nasceu o embrião do que viria a ser o Caminhos da Cena.',
  },
  {
    year: '2012',
    title: 'A Associação',
    description:
      'Após três anos de trabalho independente e crescente reconhecimento regional, o coletivo formalizou sua existência como Associação Cultural Caminhos da Cena, conquistando sede própria e condições para realizar laboratórios e oficinas abertas à comunidade.',
  },
  {
    year: '2016',
    title: 'Expansão Nacional',
    description:
      'O espetáculo "Fragmentos de Ontem" inicia uma turnê que percorre 12 estados brasileiros, consolidando o grupo no cenário nacional do teatro contemporâneo e abrindo portas para co-produções internacionais.',
  },
  {
    year: 'Hoje',
    title: 'Uma Trajetória Viva',
    description:
      'Com mais de 40 produções originais, parcerias com festivais internacionais e um programa contínuo de formação de novos artistas, o Caminhos da Cena segue como um dos mais relevantes coletivos teatrais do Brasil.',
  },
];

export function Historia() {
  return (
    <section id="historia" className="py-32 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Desde 2009
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Nossa <span className="italic text-white/70">História</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed font-light lg:pb-2"
          >
            <p>
              A Associação Cultural Caminhos da Cena nasceu do encontro de artistas que acreditavam
              no poder transformador do teatro — não apenas como entretenimento, mas como ferramenta
              de reflexão, diálogo e construção de comunidade.
            </p>
          </motion.div>
        </div>

        {/* Divider Image + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/layout/scene.jpg"
              alt="História do Caminhos da Cena"
              fill
              className="object-cover brightness-75"
              referrerPolicy="no-referrer"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white/90 font-serif text-2xl leading-snug italic">
                &quot;O teatro é a arte do encontro.&quot;
              </p>
              <p className="text-white/50 text-sm mt-2 uppercase tracking-widest">
                — Fundadores
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-8 group"
              >
                {/* Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-px bg-white/10 flex-1" />
                  <div
                    className="w-3 h-3 rounded-full border-2 border-white/30 bg-[#1a1a1a] group-hover:border-white transition-colors duration-300 flex-shrink-0 my-1"
                  />
                  {index < milestones.length - 1 && (
                    <div className="w-px bg-white/10 flex-1" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 pt-0">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-serif mb-3 text-white group-hover:text-white/90 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-white/50 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
