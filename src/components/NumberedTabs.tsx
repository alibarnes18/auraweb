'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

interface TabItem {
  id: string;
  num: string;
  label: string;
  title: string;
  desc: string;
  image: string;
}

export default function NumberedTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: TabItem[] = [
    {
      id: 'human',
      num: '01',
      label: 'İnsan Odaklılık',
      title: 'Her yatırımımızın merkezinde insan var',
      desc: 'Sinema salonlarımızdan kafelerimize kadar tüm hizmetlerimizde misafirlerimizin mutluluğunu ve konforunu ön planda tutuyoruz. Yaşam alanlarına değer katan projeler üretiyoruz.',
      image: '/images/lab_research.png'
    },
    {
      id: 'innovation',
      num: '02',
      label: 'Teknolojik Yenilik',
      title: 'Dijital dönüşüme öncülük ediyoruz',
      desc: 'Yapay zeka, akıllı şehir teknolojileri ve modern yazılım çözümleriyle geleceğin altyapısını bugünden inşa ediyoruz. İş süreçlerimizde daima en son teknolojileri kullanıyoruz.',
      image: '/images/neural_network.png'
    },
    {
      id: 'sustainability',
      num: '03',
      label: 'Sürdürülebilir Gelecek',
      title: 'Çevreye ve doğaya saygılı adımlar atıyoruz',
      desc: 'Tüm faaliyet kollarımızda karbon ayak izimizi küçültüyor, enerji verimliliği yüksek yeşil binalar tasarlıyor ve gelecek nesillere daha yaşanabilir bir dünya bırakmak için çalışıyoruz.',
      image: '/images/hero_dna_helix.png'
    }
  ];

  return (
    <section id="services" className="bg-brand-light py-24 md:py-36 border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              DEĞERLERİMİZ
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
              Geleceği Birlikte İnşa Ediyoruz
            </h2>
          </RevealOnScroll>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Vertical List Selector */}
          <div className="lg:col-span-5 space-y-2">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(idx)}
                  onClick={() => setActiveTab(idx)}
                  className="w-full text-left py-6 px-8 rounded-2xl flex items-center justify-between group transition-all duration-300 relative overflow-hidden"
                  style={{
                    backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                    boxShadow: isActive ? '0 4px 20px -2px rgba(10,22,40,0.06)' : 'none',
                    border: isActive ? '1px solid #E8ECF1' : '1px solid transparent'
                  }}
                >
                  <div className="flex items-center space-x-6">
                    <span
                      className={`font-display font-medium text-lg md:text-xl transition-colors duration-300 ${
                        isActive ? 'text-brand-accent' : 'text-brand-gray/60 group-hover:text-brand-dark'
                      }`}
                    >
                      {tab.num}
                    </span>
                    <span
                      className={`font-display font-medium text-lg md:text-xl transition-colors duration-300 ${
                        isActive ? 'text-brand-dark' : 'text-brand-gray group-hover:text-brand-dark'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>

                  {/* Right chevron or visual marker */}
                  <div className="w-5 h-5 relative flex items-center justify-center">
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-brand-accent transition-all duration-300 ${
                        isActive ? 'scale-150 opacity-100' : 'scale-50 opacity-0 group-hover:opacity-40 group-hover:scale-100'
                      }`}
                    />
                  </div>

                  {/* Active Indicator vertical line on the left edge */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Crossfade Content Area */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-border p-6 sm:p-10 shadow-lg min-h-[460px] flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full w-full"
              >
                
                {/* Content Text (Left) */}
                <div className="md:col-span-6 space-y-4">
                  <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-2 py-0.5 rounded">
                    Bölmə {tabs[activeTab].num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-brand-dark tracking-tight leading-tight">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {tabs[activeTab].desc}
                  </p>
                </div>

                {/* Content Image (Right) */}
                <div className="md:col-span-6 relative aspect-square w-full rounded-2xl overflow-hidden shadow-md bg-brand-light">
                  <Image
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].label}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
