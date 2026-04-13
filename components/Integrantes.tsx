'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const members = [
  {
    name: 'Helena Soares',
    role: 'Diretora Artística',
    image: '/images/integrantes/person1.jpg',
    instagram: 'https://instagram.com/helenasoares',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Ator & Preparador Corporal',
    image: '/images/integrantes/person2.jpg',
    instagram: 'https://instagram.com/ricardomendes',
  },
  {
    name: 'Ana Paula Luz',
    role: 'Atriz & Dramaturga',
    image: '/images/integrantes/person3.jpg',
    instagram: 'https://instagram.com/anapaulaluz',
  },
  {
    name: 'Bruno Costa',
    role: 'Cenógrafo',
    image: '/images/integrantes/person4.jpg',
    instagram: 'https://instagram.com/brunocosta',
  },
  {
    name: 'Carla Dias',
    role: 'Iluminadora',
    image: '/images/integrantes/person5.jpg',
    instagram: 'https://instagram.com/carladias',
  },
  {
    name: 'Marcos Viana',
    role: 'Ator',
    image: '/images/integrantes/person6.jpg',
    instagram: 'https://instagram.com/marcosviana',
  },
];

export function Integrantes() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="text-left">
                  <h4 className="font-serif text-sm font-bold text-[#2d1b4d] leading-tight">
                    {member.name.split(' ')[0]}<br />
                    <span className="font-medium opacity-90">{member.name.split(' ').slice(1).join(' ')}</span>
                  </h4>
                  <p className="text-[9px] uppercase tracking-widest text-[#2d1b4d]/60 mt-1">
                    {member.role}
                  </p>
                </div>
                <Link 
                  href={member.instagram} 
                  target="_blank"
                  className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] transform transition-transform hover:scale-110 shrink-0 ml-2"
                >
                  <div className="w-full h-full bg-white rounded-[5px] flex items-center justify-center">
                    <Instagram className="h-3 w-3 text-[#ee2a7b]" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
