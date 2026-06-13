'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface FaqItem {
  id: number;
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 1,
      q: 'AURA Cinema şubelerinin çalışma saatleri nedir?',
      a: 'AURA Cinema salonlarımız haftanın her günü vizyon saatlerine göre açılmaktadır. Genellikle sabah 10:00 ile gece 23:00 saatleri arasında gösterimlerimiz devam etmektedir. Detaylı şube planları için Şubelerimiz bölümünü inceleyebilirsiniz.'
    },
    {
      id: 2,
      q: 'AURA Cafe şubelerinde çalışma ve kütüphane alanları ücretli mi?',
      a: 'Hayır, kütüphane ve bireysel çalışma alanlarımız misafirlerimize tamamen ücretsizdir. Kahvenizi yudumlarken hızlı Wi-Fi altyapımızdan ve priz entegreli çalışma masalarımızdan dilediğiniz gibi faydalanabilirsiniz.'
    },
    {
      id: 3,
      q: 'Sinema biletlerimi önceden nasıl satın alabilirim?',
      a: 'Biletlerinizi web sitemiz üzerinden online olarak ya da doğrudan sinema gişelerimizden temin edebilirsiniz. Online alımlarda size iletilen QR kod ile bilet kuyruğuna girmeden doğrudan salonlara geçiş yapabilirsiniz.'
    },
    {
      id: 4,
      q: 'AURA bünyesindeki kariyer fırsatlarına nasıl başvurabilirim?',
      a: 'Holdingimize bağlı tüm şirketler için iş ve staj başvurularını kariyer@auragrup.com e-posta adresi üzerinden özgeçmişinizi paylaşarak gerçekleştirebilirsiniz. İnsan Kaynakları ekibimiz başvuruları titizlikle incelemektedir.'
    },
    {
      id: 5,
      q: 'Şubelerinizde vale ve otopark hizmeti bulunuyor mu?',
      a: 'Beşiktaş, Şişli ve Ataşehir şubelerimizin yer aldığı binalarda kapalı otopark ve profesyonel vale hizmeti mevcuttur. Kadıköy şubemizde ise cadde üzeri otopark alanlarını kullanabilirsiniz.'
    }
  ];

  return (
    <section id="faq" className="bg-white py-24 md:py-32 border-t border-brand-border">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              SIKÇA SORULAN SORULAR
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-brand-dark tracking-tight leading-tight">
              Merak Edilen Her Şeyi Yanıtladık
            </h2>
          </RevealOnScroll>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <RevealOnScroll
                key={faq.id}
                direction="up"
                delay={0.1 + index * 0.05}
                className="border border-brand-border rounded-2xl overflow-hidden transition-all duration-300 bg-brand-light"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between font-display font-semibold text-sm sm:text-base text-brand-dark hover:bg-brand-border/20 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-brand-accent shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-brand-gray shrink-0" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-xs sm:text-sm text-brand-gray leading-relaxed font-light border-t border-brand-border/40 pt-4 bg-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
