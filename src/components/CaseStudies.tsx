'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface CaseStudy {
  id: number;
  brand: string;
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  image: string;
}

export default function CaseStudies() {
  const projects: CaseStudy[] = [
    {
      id: 1,
      brand: 'SLACK',
      title: 'İş birliğini sıfırdan tasarladık',
      desc: 'Slack henüz bir fikir aşamasındayken ekibe katıldık. Arayüz sistemlerini ve kullanıcı deneyimini tasarlayarak modern iş dünyasının iletişim şeklini kökten değiştirdik.',
      bgColor: 'bg-[#4A154B]',
      textColor: 'text-white',
      image: '/images/slack_redesign.png'
    },
    {
      id: 2,
      brand: 'COINBASE',
      title: 'Kripto ticaretini herkes için kolaylaştırdık',
      desc: 'Karmaşık finansal grafikleri ve işlemleri sadeleştirerek, herkesin güvenle kripto alıp satabileceği, modern ve minimalist bir mobil borsa deneyimi inşa ettik.',
      bgColor: 'bg-[#0052FF]',
      textColor: 'text-white',
      image: '/images/coinbase_crypto.png'
    },
    {
      id: 3,
      brand: 'UBER',
      title: 'Ulaşımı gerçek zamanlı optimize ettik',
      desc: 'Yolcular ve sürücüler için sipariş alma, harita takibi ve ödeme akışlarını kolaylaştıran, karmaşadan uzak ve akıcı arayüzler tasarladık.',
      bgColor: 'bg-[#000000]',
      textColor: 'text-white',
      image: '/images/uber_transit.png'
    }
  ];

  return (
    <section id="work" className="bg-[#FAFAFC] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
        
        {/* Project Cards */}
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <RevealOnScroll
              key={project.id}
              direction="up"
              delay={0.1}
              className={`w-full ${project.bgColor} ${project.textColor} rounded-[2rem] overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-700 border border-[#E5E5EB]/10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 md:p-16">
                
                {/* Text Content */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <span className="text-xs font-bold tracking-widest opacity-80 uppercase block">
                    {project.brand}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base opacity-70 leading-relaxed font-light">
                    {project.desc}
                  </p>

                  <div className="pt-4">
                    <a
                      href="#work"
                      className="inline-flex items-center space-x-2 text-sm font-semibold border-b border-current pb-1 hover:opacity-85 transition-opacity"
                    >
                      <span>Vakayı İncele</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Mockup Image */}
                <div className={`lg:col-span-7 flex justify-center items-center ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative w-full max-w-[480px] aspect-[4/3] pointer-events-none select-none">
                    <Image
                      src={project.image}
                      alt={`${project.brand} Mockup`}
                      fill
                      className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          );
        })}

      </div>
    </section>
  );
}
