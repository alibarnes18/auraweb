'use client';

import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 'strategy',
      num: '01',
      title: 'Ürün Stratejisi',
      desc: 'Fikirlerinizi pazarda öne çıkaracak araştırma, kullanıcı analizleri ve ürün yol haritalarını hazırlıyoruz. Doğru hedeflere odaklanan ürünler tasarlıyoruz.'
    },
    {
      id: 'design',
      num: '02',
      title: 'Arayüz & Deneyim Tasarımı',
      desc: 'Kullanıcı testlerinden tel kafeslere, piksel hassasiyetinde mobil ve web tasarımlarına kadar tüm deneyimi insanların seveceği hale getiriyoruz.'
    },
    {
      id: 'branding',
      num: '03',
      title: 'Marka Kimliği',
      desc: 'Yeni nesil markalar için logo, görsel dil, renk paleti ve tipografi kılavuzları üreterek ürünlerinize akılda kalıcı bir karakter kazandırıyoruz.'
    },
    {
      id: 'engineering',
      num: '04',
      title: 'Yazılım Geliştirme',
      desc: 'Tasarımı gerçeğe dönüştüren, modern web teknolojileri ve mobil kod altyapıları ile hızlı, güvenli ve ölçeklenebilir dijital çözümler kodluyoruz.'
    }
  ];

  return (
    <section id="services" className="bg-[#FAFAFC] py-24 md:py-32 border-t border-[#E5E5EB]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6042EC]">
              YÖNTEMİMİZ VE YETENEKLERİMİZ
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0E0E10] tracking-tight leading-tight">
              Fikirden Koda, Tüm Süreci Yönetiyoruz.
            </h2>
          </RevealOnScroll>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <RevealOnScroll
              key={service.id}
              direction="up"
              delay={0.1 + index * 0.1}
              className="space-y-4 border-b border-[#E5E5EB] pb-8 md:pb-12"
            >
              <div className="text-xs font-bold text-[#6042EC] tracking-widest font-display">
                {service.num}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0E0E10]">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-[#565660] leading-relaxed font-light">
                {service.desc}
              </p>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
