'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShareBar } from '@/components/ShareBar';
import { clippings } from '@/lib/clipping';
import { ExternalLink, Plus } from 'lucide-react';
import Link from 'next/link';

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
              <AccordionItem key={item.id} value={`item-${index}`} className="border-black/5 py-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-widest text-black/40 block mb-2">
                      {item.source} • {item.date}
                    </span>
                    <h3 className="text-2xl font-serif">{item.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-black/60 font-light leading-relaxed pb-8">
                  <p>{item.summary}</p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-black/5">
                    <div className="flex flex-wrap items-center gap-6">
                      <Link 
                        href={`/imprensa/clipping/${item.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-black border-b border-black pb-1 hover:opacity-50 transition-opacity"
                      >
                        <Plus className="w-3 h-3" />
                        Ler crítica completa
                      </Link>

                      {item.href && item.href !== '#' && (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/40 hover:text-black transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Fonte Original
                        </a>
                      )}
                    </div>
                    
                    <ShareBar 
                      title={item.title} 
                      messagePrefix="Confira este clipping"
                      noBorder={true}
                      className="p-0"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
