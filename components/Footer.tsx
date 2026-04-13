'use client';

import * as React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contato" className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-6xl font-serif mb-12 leading-tight">
              Vamos criar algo <span className="italic text-white/60">memorável</span> juntos?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/40 mb-2">Endereço</h4>
                  <p className="text-xl font-light">Rua das Artes, 123 — Centro Cultural<br />São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/40 mb-2">E-mail</h4>
                  <p className="text-xl font-light">contato@palcoecena.art.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/40 mb-2">Telefone</h4>
                  <p className="text-xl font-light">+55 (11) 98765-4321</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl font-serif mb-8">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Nome</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">E-mail</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Assunto</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Mensagem</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors resize-none" />
              </div>
              <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 py-8 text-lg font-medium">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-2xl font-serif font-bold tracking-tighter">
            PALCO & CENA
          </div>
          
          <div className="flex space-x-6">
            <Link href="https://instagram.com/palcoecena" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com/palcoecena" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com/palcoecena" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-white/40 text-xs tracking-widest uppercase">
            © 2024 Palco & Cena. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
