'use client';

import React from 'react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function VisionPurpose() {
  return (
    <section id="vision" className="bg-white py-24 md:py-36 border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
        
        {/* Block 1: Our Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll direction="up" delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                MƏQSƏDİMİZ
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
                İnsan Sağlamlığını Hər Şeydən Üstün Tuturuq
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.3}>
              <p className="text-base md:text-lg text-brand-gray leading-relaxed">
                Məqsədimiz səhiyyə provayderlərini ən son texnoloji həllərlə təmin edərək, xəstələrin həyat keyfiyyətini artırmaq və tibbi qərarların dəqiqliyini ən yüksək həddə çatdırmaqdır. Süni intellekt əsaslı alqoritmlərimiz sayəsində xəstəliklərin erkən diaqnostikası artıq xəyal deyil, reallıqdır.
              </p>
            </RevealOnScroll>
          </div>
          
          {/* Image Right */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="left" delay={0.2} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl bg-brand-light">
              <Image
                src="/images/lab_research.png"
                alt="Modern Laboratory Research"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </RevealOnScroll>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-brand-border" />

        {/* Block 2: Our Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Left (On Desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <RevealOnScroll direction="right" delay={0.2} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl bg-brand-light">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-brand-accent/5 z-10" />
              <Image
                src="/images/neural_network.png"
                alt="Advanced Brain Neural Network Visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </RevealOnScroll>
          </div>
          
          {/* Text Right */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <RevealOnScroll direction="up" delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                VİZYONUMUZ
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
                Gələcəyin Tibb Sistemini Bu Gündən Qururuq
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.3}>
              <p className="text-base md:text-lg text-brand-gray leading-relaxed">
                Tibb dünyasının qarşısında duran ən çətin çağırışlara qarşı qlobal miqyasda innovativ infrastrukturlar yaradırıq. Fərdi müalicə üsullarını və rəqəmsal səhiyyə platformalarını inkişaf etdirərək, hər bir insanın keyfiyyətli tibbi xidmətə çıxışını asanlaşdırırıq.
              </p>
            </RevealOnScroll>
          </div>
        </div>

      </div>
    </section>
  );
}
