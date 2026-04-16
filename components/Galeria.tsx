'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { galeria as galleryItems } from '@/lib/data-index';

export function Galeria() {
  const [filter, setFilter] = React.useState('Todos');

  // Gerar lista de anos únicos presentes na galeria
  const years = React.useMemo(() => {
    const uniqueYears = Array.from(new Set(galleryItems.map(item => item.year))).sort((a, b) => b.localeCompare(a));
    return ['Todos', ...uniqueYears];
  }, []);

  const filteredItems = filter === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.year === filter);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-black/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
            Memórias
          </span>
          <h2 className="text-5xl font-serif mb-8">Galeria de Fotos</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {years.map((year) => (
              <Button
                key={year}
                variant="ghost"
                onClick={() => setFilter(year)}
                className={cn(
                  "rounded-full px-8 py-2 text-sm transition-all duration-300",
                  filter === year 
                    ? "bg-black text-white hover:bg-black hover:text-white" 
                    : "text-black/40 hover:text-black hover:bg-black/5"
                )}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.title + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square group overflow-hidden rounded-xl bg-gray-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-white font-serif text-lg">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
