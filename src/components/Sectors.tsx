'use client';

import React from 'react';
import Image from 'next/image';
import { Film, Coffee, Building, Laptop, Truck, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function Sectors() {
  const currentMovies = [
    { title: 'Dune: Bölüm Üç', time: '14:30 | 17:45 | 21:00', hall: 'IMAX Salonu' },
    { title: 'Yıldızlararası (Yeniden Gösterim)', time: '13:00 | 18:30', hall: 'Dolby Atmos' },
    { title: 'Yapay Zeka Devrimi', time: '16:00 | 20:15', hall: 'Salon 4 (VIP)' }
  ];

  const cafeMenuHighlights = [
    { name: 'Signature Flat White', desc: 'Özel harman Arabica çekirdekleri ve kremsi süt köpüğü.' },
    { name: 'Karamel Macchiato', desc: 'Vanilya şurubu, sıcak buharda süt, espresso ve karamel sos.' },
    { name: 'Taze Çikolatalı Kruvasan', desc: 'Her sabah sıcak servis edilen tereyağlı Fransız kruvasanı.' }
  ];

  const otherSectors = [
    {
      icon: <Building className="w-6 h-6 text-brand-accent" />,
      title: 'AURA Gayrimenkul',
      desc: 'İstanbul genelinde estetik ve modern mimariyi harmanlayan lüks konut projeleri üretiyoruz.'
    },
    {
      icon: <Laptop className="w-6 h-6 text-brand-accent" />,
      title: 'AURA Teknoloji',
      desc: 'Yapay zeka altyapıları, kurumsal yazılım çözümleri ve dijital dönüşüm süreçleri geliştiriyoruz.'
    },
    {
      icon: <Truck className="w-6 h-6 text-brand-accent" />,
      title: 'AURA Lojistik',
      desc: 'Tüm faaliyet kollarımızın tedarik zincirini, modern depolama ve lojistik ağlarımızla yönetiyoruz.'
    }
  ];

  return (
    <section id="sectors" className="bg-brand-light py-24 md:py-32 border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              FAALİYET ALANLARIMIZ
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
              Hayatın Her Anında Değer Üretiyoruz
            </h2>
          </RevealOnScroll>
        </div>

        {/* Sectors Grid */}
        <div className="space-y-16 md:space-y-24">
          
          {/* 1. Cinema Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual (Left) */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" delay={0.2} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-brand-border/40 group">
                <Image
                  src="/images/modern_cinema.png"
                  alt="AURA Cinema Salonu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />
              </RevealOnScroll>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-5 space-y-6">
              <RevealOnScroll direction="up" delay={0.1}>
                <div className="flex items-center space-x-3 text-brand-accent">
                  <Film className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">AURA CINEMA</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.2}>
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-brand-dark tracking-tight leading-tight">
                  En Son Teknolojiyle Sıra Dışı Sinema Deneyimi
                </h3>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.3}>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed font-light">
                  AURA Cinema, IMAX projeksiyon teknolojisi, Dolby Atmos 360 derece çevreleyen ses sistemi ve tamamen yatırılabilen VIP koltuklarıyla sinemayı bir sanata dönüştürüyor.
                </p>
              </RevealOnScroll>

              {/* Showings list */}
              <RevealOnScroll direction="up" delay={0.4} className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">GÜNCEL VİZYONDAKİLER</h4>
                <div className="divide-y divide-brand-border">
                  {currentMovies.map((movie, idx) => (
                    <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                      <div>
                        <span className="font-semibold text-brand-dark block">{movie.title}</span>
                        <span className="text-brand-gray">{movie.hall}</span>
                      </div>
                      <span className="text-brand-accent font-semibold">{movie.time}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-brand-border" />

          {/* 2. Cafe Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content (Left) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <RevealOnScroll direction="up" delay={0.1}>
                <div className="flex items-center space-x-3 text-brand-accent">
                  <Coffee className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">AURA CAFE</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.2}>
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-brand-dark tracking-tight leading-tight">
                  Starbucks Konseptli Rahat ve Modern Yaşam Alanı
                </h3>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.3}>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed font-light">
                  AURA Cafe, özel Arabica kahve çekirdekleri, Starbucks konseptli menüsü, sessiz çalışma alanları ve hızlı Wi-Fi altyapısı ile günün her saatinde üretkenliği ve dinlenmeyi bir arada sunar.
                </p>
              </RevealOnScroll>

              {/* Menu highlights */}
              <RevealOnScroll direction="up" delay={0.4} className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">MENÜDEN SEÇMELER</h4>
                <div className="space-y-3">
                  {cafeMenuHighlights.map((menu, idx) => (
                    <div key={idx} className="flex flex-col text-xs bg-white p-3 rounded-lg border border-brand-border">
                      <span className="font-semibold text-brand-dark">{menu.name}</span>
                      <span className="text-brand-gray mt-0.5">{menu.desc}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* Visual (Right) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <RevealOnScroll direction="left" delay={0.2} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-brand-border/40 group">
                <Image
                  src="/images/premium_cafe.png"
                  alt="AURA Cafe Starbucks Konsept"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />
              </RevealOnScroll>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-brand-border" />

          {/* 3. Other Sectors Block */}
          <div className="space-y-8">
            <RevealOnScroll direction="up" delay={0.1} className="text-center lg:text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent">DİĞER FAALİYET KOLLARIMIZ</h4>
              <p className="text-brand-gray text-sm font-light mt-1">Geniş yatırım portföyümüz ve holdingimize bağlı diğer iş kolları</p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherSectors.map((sector, index) => (
                <RevealOnScroll
                  key={index}
                  direction="up"
                  delay={0.1 + index * 0.1}
                  className="bg-white p-8 rounded-xl border border-brand-border hover:shadow-md hover:border-brand-accent/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors">
                      {sector.icon}
                    </div>
                    <h5 className="font-display font-semibold text-lg text-brand-dark">
                      {sector.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-light">
                      {sector.desc}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center text-xs font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                    <span>Detayları İncele</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
