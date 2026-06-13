'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Yenilikçi Vizyon, Sürdürülebilir Gelecek',
      subtitle: 'AURA HOLDİNG',
      description: 'Sinemadan yeme-içmeye, gayrimenkulden teknolojiye uzanan geniş iş kollarımızla yarınları inşa ediyoruz.',
      image: '/images/premium_cafe.png',
      ctaText: 'Faaliyet Alanlarımız',
      ctaLink: '#sectors'
    },
    {
      id: 2,
      title: 'Sıra Dışı Sinema Deneyimi',
      subtitle: 'AURA CINEMA',
      description: 'En son görüntü ve ses teknolojileriyle donatılmış salonlarımızda beyaz perdenin büyüsünü yaşayın.',
      image: '/images/modern_cinema.png',
      ctaText: 'Seansları İncele',
      ctaLink: '#sectors'
    },
    {
      id: 3,
      title: 'Güven ve Mükemmeliyetçilik',
      subtitle: 'YÖNETİM KURULU MESAJI',
      description: 'Yarım asırlık tecrübemiz ve insana değer veren hizmet felsefemizle her alanda fark yaratıyoruz.',
      image: '/images/company_owner.png',
      ctaText: 'Mesajı Oku',
      ctaLink: '#about'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/65 to-transparent z-10" />
          
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover object-center select-none"
          />

          {/* Slide Text Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl space-y-6 text-left">
                
                {/* Subtitle */}
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white leading-tight tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Action button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="pt-4"
                >
                  <a
                    href={slides[currentSlide].ctaLink}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent text-white font-medium text-base shadow-lg shadow-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    {slides[currentSlide].ctaText}
                  </a>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shadow-xs cursor-pointer"
        aria-label="Önceki Slayt"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shadow-xs cursor-pointer"
        aria-label="Sonraki Slayt"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index ? 'w-8 bg-brand-accent' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
