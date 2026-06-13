'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Share2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import CountUp from './CountUp';

interface BranchPin {
  id: string;
  name: string;
  x: string;
  y: string;
  address: string;
  phone: string;
  hours: string;
  details: string;
}

export default function IstanbulMap() {
  const [activePin, setActivePin] = useState<string | null>(null);

  const branches: BranchPin[] = [
    {
      id: 'besiktas',
      name: 'AURA Beşiktaş (Sinema & Kafe)',
      x: '53%',
      y: '43%',
      address: 'Sinanpaşa Mah. Barbaros Bulv. No: 12, Beşiktaş',
      phone: '+90 (212) 222 56 78',
      hours: '09:00 - 23:00',
      details: 'Laser IMAX ve Dolby Atmos salonları, Starbucks konseptli geniş bahçeli kafe.'
    },
    {
      id: 'kadikoy',
      name: 'AURA Kadıköy (Sinema & Kafe)',
      x: '63%',
      y: '58%',
      address: 'Caferağa Mah. Moda Cad. No: 45, Kadıköy',
      phone: '+90 (216) 555 12 34',
      hours: '09:00 - 23:00',
      details: 'Tarihi salon konsepti, kitap-kafe çalışma alanları, özel tasarım teras.'
    },
    {
      id: 'sisli',
      name: 'AURA Şişli (Sinema)',
      x: '47%',
      y: '36%',
      address: 'Büyükdere Cad. No: 171, Metrocity AVM, Şişli',
      phone: '+90 (212) 333 90 12',
      hours: '10:00 - 22:00',
      details: 'Tamamen VIP yatan koltuklu salonlar, zengin büfe seçenekleri.'
    },
    {
      id: 'bakirkoy',
      name: 'AURA Bakırköy (Kafe)',
      x: '28%',
      y: '63%',
      address: 'Zeytinlik Mah. Fişekhane Cad. No: 8, Bakırköy',
      phone: '+90 (212) 444 89 01',
      hours: '08:30 - 22:30',
      details: 'Sessiz çalışma alanları, taze hamur işleri ve tescilli kahve harmanları.'
    },
    {
      id: 'atasehir',
      name: 'AURA Ataşehir (Sinema)',
      x: '76%',
      y: '52%',
      address: 'Atatürk Mah. Ataşehir Bulv. No: 28, Ataşehir',
      phone: '+90 (216) 444 34 56',
      hours: '10:00 - 22:00',
      details: 'Premium çocuk sinema salonu, açık hava sinema alanı (yaz sezonunda).'
    }
  ];

  return (
    <section id="branches" className="bg-white py-24 md:py-32 overflow-hidden border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-24">
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              ŞUBELERİMİZ
            </span>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
              İstanbul’un En Seçkin Noktalarında Sizinleyiz
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-brand-gray text-base md:text-lg font-light">
              Sinema keyfini ve taze kahve kokusunu şehrin merkezine taşıyoruz. Size en yakın şubemizi bulmak için haritadaki pinlere tıklayın.
            </p>
          </RevealOnScroll>
        </div>

        {/* Istanbul SVG Map Wrapper */}
        <RevealOnScroll direction="up" delay={0.4} className="relative w-full aspect-[2/1] bg-brand-light rounded-3xl border border-brand-border p-4 sm:p-8 flex items-center justify-center overflow-hidden shadow-xs">
          
          {/* Grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#E8ECF1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-75 pointer-events-none" />

          {/* Stylized Istanbul Silhouette (Bosphorus & Landmasses) */}
          <svg
            className="w-full h-full text-[#E8ECF1] fill-current opacity-70 select-none pointer-events-none"
            viewBox="0 0 1000 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* European Side Landmass */}
            <path d="M50 50 L460 50 L460 180 L490 200 L500 240 L480 260 L450 240 L430 250 L380 240 L340 250 L200 240 L100 220 L50 180 Z" />
            
            {/* Asian Side Landmass */}
            <path d="M540 190 L530 230 L550 255 L580 260 L620 275 L680 300 L720 320 L780 330 L950 330 L950 50 L540 50 Z" />
            
            {/* Marmara Sea Islands */}
            <circle cx="680" cy="380" r="10" />
            <circle cx="710" cy="390" r="8" />
            <circle cx="730" cy="405" r="6" />

            {/* Scale indicators / decorative elements */}
            <text x="50" y="450" className="fill-brand-gray/30 text-[10px] font-semibold tracking-widest">İSTANBUL BOĞAZI / BOSPHORUS</text>
            <path d="M500 150 L515 220 L530 240" stroke="#0A1628" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" fill="none" />
          </svg>

          {/* Pulsing Interactive Branch Pins */}
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="absolute z-20"
              style={{ left: branch.x, top: branch.y }}
              onMouseEnter={() => setActivePin(branch.id)}
              onMouseLeave={() => setActivePin(null)}
              onClick={() => setActivePin(activePin === branch.id ? null : branch.id)}
            >
              {/* Pulsing visual outer ring */}
              <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-brand-accent/30 animate-pulse-ring pointer-events-none" />
              
              {/* Interactive pin point */}
              <button
                className={`relative w-3.5 h-3.5 rounded-full border border-white cursor-pointer shadow-sm transition-all duration-300 ${
                  activePin === branch.id ? 'bg-brand-accent scale-125' : 'bg-brand-accent'
                }`}
                aria-label={branch.name}
              />

              {/* Popup Info Card */}
              <AnimatePresence>
                {activePin === branch.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-white p-5 rounded-2xl shadow-xl border border-brand-border pointer-events-none"
                  >
                    <div className="font-display font-semibold text-sm text-brand-dark mb-1">
                      {branch.name}
                    </div>
                    <p className="text-xs text-brand-accent font-medium mb-3">
                      {branch.details}
                    </p>

                    <div className="space-y-2 text-xs text-brand-gray border-t border-brand-border/60 pt-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-gray shrink-0 mt-0.5" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 text-brand-gray" />
                        <span>{branch.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3.5 h-3.5 text-brand-gray" />
                        <span>{branch.hours}</span>
                      </div>
                    </div>

                    {/* Small triangle pin pointer */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r border-b border-brand-border rotate-45 -translate-y-[6px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </RevealOnScroll>

        {/* Global numbers overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <RevealOnScroll
            direction="up"
            delay={0.1}
            className="bg-brand-light p-6 rounded-2xl border border-brand-border flex items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-display font-semibold text-brand-dark tracking-tight">
                <CountUp end={5} suffix="" />
              </div>
              <p className="text-sm text-brand-gray">Aktif İstanbul Şubesi</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            direction="up"
            delay={0.2}
            className="bg-brand-light p-6 rounded-2xl border border-brand-border flex items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-display font-semibold text-brand-dark tracking-tight">
                <CountUp end={14} suffix="K+" />
              </div>
              <p className="text-sm text-brand-gray">Haftalık Ziyaretçi Hacmi</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            direction="up"
            delay={0.3}
            className="bg-brand-light p-6 rounded-2xl border border-brand-border flex items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-display font-semibold text-brand-dark tracking-tight">
                <CountUp end={100} suffix="%" />
              </div>
              <p className="text-sm text-brand-gray">Müşteri Memnuniyeti</p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
