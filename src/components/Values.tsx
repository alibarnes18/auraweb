'use client';

import React from 'react';
import { Layers, ShieldCheck, Heart } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Values() {
  const values: ValueItem[] = [
    {
      icon: <Layers className="w-6 h-6 text-[#6042EC]" />,
      title: 'Yönetim Katmanları Yok',
      desc: 'Bürokrasi ve gereksiz toplantılarla vakit kaybetmiyoruz. AURA Lab’de doğrudan tasarımı ve yazılımı geliştiren ekiple çalışır, hedefe doğrudan ulaşırsınız.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#6042EC]" />,
      title: 'Önce Kalite ve Detaylar',
      desc: 'Hızlıca geçiştirilmiş işler yerine, her pikseli ve her kod satırı titizlikle düşünülmüş, markanıza yakışacak premium dijital ürünler tasarlamayı hedefliyoruz.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#6042EC]" />,
      title: 'Yüzde Yüz Şeffaflık',
      desc: 'İş ortaklığımızı dürüstlük ve tam şeffaflık üzerine kuruyoruz. Haftalık güncellemeler, ortak Slack kanalları ve açık iletişim ile sürecin her anına dahil olursunuz.'
    }
  ];

  return (
    <section id="values" className="bg-white py-24 md:py-32 border-t border-[#E5E5EB]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6042EC]">
              DEĞERLERİMİZ
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0E0E10] tracking-tight leading-tight">
              Nasıl Çalışıyoruz ve Neye İnanıyoruz?
            </h2>
          </RevealOnScroll>
        </div>

        {/* Grid of Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <RevealOnScroll
              key={idx}
              direction="up"
              delay={0.1 + idx * 0.1}
              className="bg-[#FAFAFC] p-8 sm:p-10 rounded-[2rem] border border-[#E5E5EB] space-y-6 hover:shadow-xs transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5EB] flex items-center justify-center shadow-xs">
                {val.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#0E0E10]">
                {val.title}
              </h3>
              <p className="text-sm text-[#565660] leading-relaxed font-light">
                {val.desc}
              </p>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
