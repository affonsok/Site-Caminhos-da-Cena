'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { instagram as igData } from '@/lib/data-index';

export function InstagramTicker() {
  const username = igData?.username || 'palcoecena';
  const profileUrl = igData?.profileUrl || `https://instagram.com/${username}`;
  const posts = igData?.posts || [];

  // Se não houver posts, mostra placeholders amigáveis
  const displayPosts = posts.length > 0 ? posts : Array(6).fill({
    image: '/images/ig-placeholder.jpg',
    link: profileUrl
  });

  return (
    <section aria-labelledby="instagram-ticker-title" className="bg-black py-16 overflow-hidden">
      <h2 id="instagram-ticker-title" className="sr-only">Instagram @{username}</h2>
      
      <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
         <div className="flex items-center gap-3 text-white">
           <Instagram className="w-6 h-6" />
           <span className="font-serif text-2xl">@{username}</span>
         </div>
         <Link 
            href={profileUrl} 
            target="_blank" 
            className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
         >
            Siga-nos
         </Link>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden ticker-container cursor-pointer">
        <div className="flex w-max animate-ticker">
          
          {/* Primeiro Conjunto */}
          <div className="flex gap-4 pr-4">
            {displayPosts.map((post, idx) => (
               <Link 
                  key={`set1-${idx}`} 
                  href={post.link || profileUrl} 
                  target="_blank" 
                  className="relative h-[250px] w-[250px] shrink-0 block overflow-hidden group/item rounded-sm"
               >
                  <Image 
                     src={post.image} 
                     alt={`Instagram post ${idx + 1}`} 
                     fill 
                     className="object-cover transition-transform duration-500 group-hover/item:scale-110" 
                     sizes="250px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                     <Instagram className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 w-8 h-8" />
                  </div>
               </Link>
            ))}
          </div>

          {/* Segundo Conjunto (Duplicado para Loop Infinito) */}
          <div className="flex gap-4 pr-4">
             {displayPosts.map((post, idx) => (
               <Link 
                  key={`set2-${idx}`} 
                  href={post.link || profileUrl} 
                  target="_blank" 
                  className="relative h-[250px] w-[250px] shrink-0 block overflow-hidden group/item rounded-sm"
               >
                  <Image 
                     src={post.image} 
                     alt={`Instagram post ${idx + 1} clone`} 
                     fill 
                     className="object-cover transition-transform duration-500 group-hover/item:scale-110" 
                     sizes="250px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                     <Instagram className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 w-8 h-8" />
                  </div>
               </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
