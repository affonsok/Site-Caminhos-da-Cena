'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Cena', href: '#cena' },
  { name: 'Espetáculos', href: '#espetaculos' },
  { name: 'Integrantes', href: '#integrantes' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Notícias', href: '#noticias' },
  { name: 'Clipping', href: '#clipping' },
  { name: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-black/5 py-3'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Image 
            src="/images/layout/logo.svg" 
            alt="Caminhos da Cena" 
            width={300} 
            height={50} 
            className={cn(
              "h-8 w-auto object-contain transition-all duration-300",
              isScrolled ? "brightness-0" : "brightness-0 invert"
            )} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden md:flex items-center space-x-8",
          isScrolled ? "text-black" : "text-white"
        )}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <div className={isScrolled ? "text-black" : "text-white"}>
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-serif font-medium hover:opacity-60 transition-opacity"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
