'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const sponsors = [
  { name: 'Cultura Brasil', logo: '/images/patrocinadores/sponsor1.jpg' },
  { name: 'Banco das Artes', logo: '/images/patrocinadores/sponsor2.jpg' },
  { name: 'Fundação Palco', logo: '/images/patrocinadores/sponsor3.jpg' },
  { name: 'Prefeitura Municipal', logo: '/images/patrocinadores/sponsor4.jpg' },
  { name: 'Incentivo Federal', logo: '/images/patrocinadores/sponsor5.jpg' },
];

export function Patrocinio() {
  return (
    <section className="py-20 bg-[#f8f7f5] border-y border-black/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">
            Patrocínio e Apoio
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="relative w-32 h-12">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
