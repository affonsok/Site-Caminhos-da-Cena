import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const mockPosts = [
  { id: 1, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 2, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 3, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 4, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 5, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 6, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 7, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
  { id: 8, image: '/images/ig-placeholder.jpg', link: 'https://instagram.com/palcoecena' },
];

export function InstagramTicker() {
  return (
    <section aria-labelledby="instagram-ticker-title" className="bg-black py-16 overflow-hidden">
      <h2 id="instagram-ticker-title" className="sr-only">Instagram @palcoecena</h2>
      
      <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
         <div className="flex items-center gap-3 text-white">
           <Instagram className="w-6 h-6" />
           <span className="font-serif text-2xl">@palcoecena</span>
         </div>
         <Link 
            href="https://instagram.com/palcoecena" 
            target="_blank" 
            className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
         >
            Siga-nos
         </Link>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden ticker-container cursor-pointer">
        <div className="flex w-max animate-ticker">
          
          {/* First Set of Images */}
          <div className="flex gap-4 pr-4">
            {mockPosts.map((post) => (
               <Link 
                  key={`set1-${post.id}`} 
                  href={post.link} 
                  target="_blank" 
                  className="relative h-[250px] w-[250px] shrink-0 block overflow-hidden group/item rounded-sm"
               >
                  <Image 
                     src={post.image} 
                     alt="Post do Instagram" 
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

          {/* Second Set of Images (Duplicate for Seamless Loop) */}
          <div className="flex gap-4 pr-4">
             {mockPosts.map((post) => (
               <Link 
                  key={`set2-${post.id}`} 
                  href={post.link} 
                  target="_blank" 
                  className="relative h-[250px] w-[250px] shrink-0 block overflow-hidden group/item rounded-sm"
               >
                  <Image 
                     src={post.image} 
                     alt="Post do Instagram" 
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
