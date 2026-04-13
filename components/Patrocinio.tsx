'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const sponsors = [
  { name: 'Cultura Brasil', logo: 'https://picsum.photos/seed/logo1/200/100' },
  { name: 'Banco das Artes', logo: 'https://picsum.photos/seed/logo2/200/100' },
  { name: 'Fundação Palco', logo: 'https://picsum.photos/seed/logo3/200/100' },
  { name: 'Prefeitura Municipal', logo: 'https://picsum.photos/seed/logo4/200/100' },
  { name: 'Incentivo Federal', logo: 'https://picsum.photos/seed/logo5/200/100' },
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
