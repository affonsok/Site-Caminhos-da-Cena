'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShareBar } from '@/components/ShareBar';

const clippings = [
  {
    source: 'Jornal de Artes',
    title: '"Uma explosão de criatividade e técnica no palco"',
    date: 'Março 2024',
    content: 'O grupo Caminhos da Cena demonstra uma maturidade artística rara, equilibrando perfeitamente a experimentação visual com uma dramaturgia sólida e emocionante.',
  },
  {
    source: 'Revista Cultura Viva',
    title: '"O teatro que precisamos ver hoje"',
    date: 'Janeiro 2024',
    content: 'Em um cenário saturado, o coletivo traz um frescor necessário, resgatando a essência do teatro de grupo com uma estética impecável.',
  },
  {
    source: 'Crítica em Cena',
    title: '"Helena Soares assina sua obra mais ambiciosa"',
    date: 'Dezembro 2023',
    content: 'A direção de Soares em "Fragmentos de Ontem" é um marco para a companhia, elevando o patamar das produções independentes no país.',
  },
];

export function Clipping() {
  return (
    <section id="clipping" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-black/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Na Mídia
            </span>
            <h2 className="text-5xl font-serif">Clipping</h2>
          </div>

          <Accordion className="w-full">
            {clippings.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-black/5 py-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-widest text-black/40 block mb-2">
                      {item.source} • {item.date}
                    </span>
                    <h3 className="text-2xl font-serif">{item.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-black/60 font-light leading-relaxed pb-8">
                  <p>{item.content}</p>
                  <ShareBar 
                    title={item.title} 
                    messagePrefix="Confira este clipping"
                    className="mt-6 pt-4 border-t border-black/5"
                    noBorder={true}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
