'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'O Grito do Silêncio',
    category: 'Drama Contemporâneo',
    year: '2024',
    image: 'https://picsum.photos/seed/play1/600/800',
    status: 'Em Cartaz',
    gallery: [
      'https://picsum.photos/seed/play1-1/1200/800',
      'https://picsum.photos/seed/play1-2/1200/800',
      'https://picsum.photos/seed/play1-3/1200/800',
    ]
  },
  {
    title: 'Fragmentos de Ontem',
    category: 'Experimental',
    year: '2023',
    image: 'https://picsum.photos/seed/play2/600/800',
    status: 'Encerrado',
    gallery: [
      'https://picsum.photos/seed/play2-1/1200/800',
      'https://picsum.photos/seed/play2-2/1200/800',
      'https://picsum.photos/seed/play2-3/1200/800',
    ]
  },
  {
    title: 'A Dança das Sombras',
    category: 'Teatro Físico',
    year: '2023',
    image: 'https://picsum.photos/seed/play3/600/800',
    status: 'Turnê',
    gallery: [
      'https://picsum.photos/seed/play3-1/1200/800',
      'https://picsum.photos/seed/play3-2/1200/800',
      'https://picsum.photos/seed/play3-3/1200/800',
    ]
  },
  {
    title: 'Vozes da Cidade',
    category: 'Musical',
    year: '2022',
    image: 'https://picsum.photos/seed/play4/600/800',
    status: 'Encerrado',
    gallery: [
      'https://picsum.photos/seed/play4-1/1200/800',
      'https://picsum.photos/seed/play4-2/1200/800',
      'https://picsum.photos/seed/play4-3/1200/800',
    ]
  },
];

export function Espetaculos() {
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <section id="espetaculos" className="py-24 bg-[#f8f7f5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-black/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Portfólio
            </span>
            <h2 className="text-5xl font-serif">Nossos Espetáculos</h2>
          </div>
          <p className="text-black/50 max-w-md font-light">
            Uma seleção de nossas produções mais marcantes, explorando diferentes gêneros e linguagens teatrais. Clique para ver a galeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <Card className="group cursor-pointer overflow-hidden border-none bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={cn(
                        "rounded-full px-4 py-1 text-[10px] uppercase tracking-widest",
                        project.status === 'Em Cartaz' ? "bg-red-600 text-white" : "bg-white/80 text-black backdrop-blur-sm"
                      )}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowRight className="h-5 w-5 text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-semibold">
                      {project.category} • {project.year}
                    </span>
                    <h3 className="text-xl font-serif group-hover:text-red-800 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110]"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative w-full max-w-[90vw] aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Info Overlay */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h4 className="text-white font-serif text-2xl mb-1">{selectedProject.title}</h4>
                <p className="text-white/40 text-sm uppercase tracking-widest">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
