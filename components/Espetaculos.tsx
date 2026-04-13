'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { espetaculos } from '@/lib/espetaculos';

export function Espetaculos() {
  return (
    <section id="espetaculos" className="py-16 md:py-24 bg-[#f8f7f5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-black/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif break-words">Nossos Espetáculos</h2>
          </div>
          <p className="text-black/50 max-w-md font-light">
            Uma seleção de nossas produções mais marcantes, explorando diferentes gêneros e
            linguagens teatrais. Clique para saber mais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {espetaculos.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/espetaculos/${project.slug}`} className="block">
                <Card className="group cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md transition-all border border-black/5 rounded-2xl p-0 gap-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={cn(
                          'rounded-full px-4 py-1 text-[10px] uppercase tracking-widest',
                          project.status === 'Em Cartaz'
                            ? 'bg-red-600 text-white'
                            : 'bg-white/90 text-black backdrop-blur-sm'
                        )}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowRight className="h-5 w-5 text-black" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-semibold block">
                        {project.category} • {project.year}
                      </span>
                      <h3 className="text-xl font-serif group-hover:text-red-800 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
