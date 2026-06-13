'use client';

import React from 'react';
import Image from 'next/image';
import { Activity, Cpu, Users, GraduationCap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import CountUp from './CountUp';

export default function WhoWeAre() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-brand-accent" />,
      number: 45,
      suffix: 'M+',
      title: 'Pasiyent Portfeli',
      desc: 'Hər il dünyada müalicəsinə dəstək olduğumuz insanların sayı.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-accent" />,
      number: 120,
      suffix: '+',
      title: 'Süni İntellekt Modeli',
      desc: 'Klinik diaqnostikada tətbiq edilən AI alqoritmləri.'
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-accent" />,
      number: 99,
      suffix: '.8%',
      title: 'Diaqnostik Dəqiqlik',
      desc: 'Molekulyar səviyyədə testlərimizin dəqiqlik dərəcəsi.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-accent" />,
      number: 15,
      suffix: 'K+',
      title: 'Qlobal Tibb Tərəfdaşı',
      desc: 'Dünyanın müxtəlif yerlərində əməkdaşlıq etdiyimiz həkimlər.'
    }
  ];

  return (
    <section id="products" className="bg-brand-light py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Image with hover zoom */}
          <div className="lg:col-span-6">
            <RevealOnScroll direction="right" delay={0.2} className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-brand-border">
              <Image
                src="/images/lab_research.png"
                alt="Clinical Laboratory Diagnostics"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </RevealOnScroll>
          </div>

          {/* Right Column: Title and Staggered Stats Cards */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <RevealOnScroll direction="up" delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  BİZ KİMİK?
                </span>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
                  Tibb Dünyasına Texnoloji Güc Qatırıq
                </h2>
              </RevealOnScroll>
              
              <RevealOnScroll direction="up" delay={0.3}>
                <p className="text-brand-gray text-base md:text-lg leading-relaxed">
                  AURA Healthineers olaraq, süni intellekt və molekulyar elmin sintezi ilə yeni nəsil klinik diaqnostika həlləri yaradırıq. Məqsədimiz xəstəlikləri yaranma mərhələsində aşkar edib effektiv müalicə planlaşdırılmasına kömək etməkdir.
                </p>
              </RevealOnScroll>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <RevealOnScroll
                  key={index}
                  direction="up"
                  delay={0.1 + index * 0.1}
                  className="bg-white p-6 rounded-xl border border-brand-border hover:shadow-md hover:border-brand-accent/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-display font-semibold text-brand-dark tracking-tight mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-brand-dark mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    {stat.desc}
                  </p>
                </RevealOnScroll>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
