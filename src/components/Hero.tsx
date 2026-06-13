'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const words = "Dünyanın en iyi şirketleri için insanların sevdiği arayüzler tasarlıyoruz.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center bg-[#FAFAFC] pt-32 pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-[1000px] space-y-8">
          
          {/* Main Title */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-[#0E0E10] leading-[1.05] tracking-tight"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#565660] font-normal max-w-2xl leading-relaxed font-light"
          >
            AURA Lab; strateji, kullanıcı deneyimi ve yazılımı birleştiren dijital bir ürün ajansıdır. Fikirlerinizi dünya çapında milyonlarca insanın severek kullandığı ürünlere dönüştürüyoruz.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
