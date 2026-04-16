'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { integrantes, INTEGRANTE_FALLBACK_IMAGE } from '@/lib/integrantes';
import { cn } from '@/lib/utils';

export function Integrantes() {
  // Agrupar integrantes por categoria
  const sections = [
    { title: 'Elenco', items: integrantes.filter(i => i.category === 'Elenco') },
    { title: 'Direção & Produção', items: integrantes.filter(i => i.category === 'Direção & Produção') },
    { title: 'Equipe Artística', items: integrantes.filter(i => i.category === 'Equipe Artística') },
    { title: 'Associação', items: integrantes.filter(i => i.category === 'Associação') },
  ];

  return (
    <section id="integrantes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-black/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
            Quem Somos
          </span>
          <h2 className="text-5xl font-serif">O Coletivo</h2>
          <div className="w-20 h-px bg-black/10 mx-auto mt-8" />
        </div>

        {sections.map((section, sIndex) => section.items.length > 0 && (
          <div key={section.title} className="mb-20 last:mb-0">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-black/20 mb-12 text-center">
              {section.title}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {section.items.map((member, index) => {
                const hasFoto = !!member.image && member.image !== INTEGRANTE_FALLBACK_IMAGE;
                const photo = hasFoto ? member.image : INTEGRANTE_FALLBACK_IMAGE;

                return (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={photo}
                        alt={member.name}
                        fill
                        className={cn(
                          'object-cover transition-transform duration-700 group-hover:scale-105',
                          !hasFoto && 'opacity-30'
                        )}
                      />
                      {!hasFoto && (
                        <div className="absolute inset-0 flex items-end justify-center pb-3">
                          <span className="text-[9px] uppercase tracking-widest text-black/40 font-medium">
                            Foto em breve
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="text-left">
                        <h3 className="font-serif text-sm font-bold text-[#2d1b4d] leading-tight">
                          {member.name.split(' ')[0]}<br />
                          <span className="font-medium opacity-90">{member.name.split(' ').slice(1).join(' ')}</span>
                        </h3>
                        <p className="text-[9px] uppercase tracking-widest text-[#2d1b4d]/60 mt-1">
                          {member.roles.join(', ')}
                        </p>
                      </div>
                      {member.instagram && (
                        <Link
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] transform transition-transform hover:scale-110 shrink-0 ml-2"
                        >
                          <div className="w-full h-full bg-white rounded-[5px] flex items-center justify-center">
                            <Instagram className="h-3 w-3 text-[#ee2a7b]" />
                          </div>
                        </Link>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
