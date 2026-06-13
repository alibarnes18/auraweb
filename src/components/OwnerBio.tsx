'use client';

import React from 'react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

export default function OwnerBio() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Blur BG elements */}
      <div className="absolute top-20 right-[-10%] w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[300px] h-[300px] bg-brand-light rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Executive Portrait */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="right" delay={0.2} className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl bg-brand-light border border-brand-border/40">
              <Image
                src="/images/company_owner.png"
                alt="Ahmet Yılmaz - AURA Holding Yönetim Kurulu Başkanı"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Soft overlay on bottom of image for text fallback or clean edging */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
            </RevealOnScroll>
          </div>

          {/* Right: Message & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll direction="up" delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                KURUCUMUZDAN MESAJ
              </span>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
                Ahmet Yılmaz <br />
                <span className="text-brand-gray text-xl sm:text-2xl font-light block mt-2">
                  Yönetim Kurulu Başkanı
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed font-light">
                AURA Holding kurucusu ve Yönetim Kurulu Başkanı Ahmet Yılmaz, yarım asra yaklaşan girişimcilik kariyerinde toplumsal gelişime katkı sunmayı temel amaç edinmiştir. Sinema, gastronomi ve teknoloji kollarında kurduğu markalarla toplumsal yaşama nitelikli alternatifler sunan Yılmaz, vizyoner bakış açısıyla holdingimizin geleceğine yön vermektedir.
              </p>
            </RevealOnScroll>

            {/* Philosophy quote card */}
            <RevealOnScroll direction="up" delay={0.4}>
              <div className="bg-brand-light border-l-4 border-brand-accent p-6 rounded-r-xl space-y-3 shadow-xs">
                <p className="text-brand-dark font-display font-medium text-base italic leading-relaxed">
                  &ldquo;Biz sadece binalar veya ticari alanlar inşa etmiyoruz. En büyük yatırımımız; insanların bir araya gelerek mutlu anlar paylaştığı, sanatla ve keyifle beslendiği yaşam alanları yaratmaktır.&rdquo;
                </p>
                <div className="text-xs font-semibold text-brand-gray uppercase tracking-wider">
                  — FAALİYET FELSEFEMİZ
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.5}>
              <p className="text-sm text-brand-gray leading-relaxed">
                Yılmaz’ın liderliğinde AURA Holding, insana ve çevreye saygı prensibinden ödün vermeden, yenilikçi yatırımları ve toplumsal sosyal sorumluluk projeleriyle sektöründe öncü olmaya devam etmektedir.
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
