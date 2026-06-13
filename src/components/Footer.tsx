'use client';

import React from 'react';

export default function Footer() {
  const offices = [
    { city: 'İstanbul', timezone: 'GMT+3' },
    { city: 'Victoria', timezone: 'GMT-7' },
    { city: 'Vancouver', timezone: 'GMT-7' }
  ];

  return (
    <footer className="bg-white pb-16 pt-8 border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8 text-xs text-brand-gray">
        
        {/* Left: Brand copyright & disclaimer */}
        <div className="space-y-2 order-2 md:order-1 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} AURA Holding. Tüm hakları saklıdır.</p>
          <p className="opacity-60">Geleceği şekillendiren yatırımlar.</p>
        </div>

        {/* Right: Office Locations and Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 order-1 md:order-2 w-full md:w-auto justify-center md:justify-end">
          
          {/* Offices */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            {offices.map((office) => (
              <div key={office.city} className="flex flex-col items-center sm:items-start">
                <span className="font-semibold text-brand-dark">{office.city}</span>
                <span className="opacity-60">{office.timezone}</span>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-brand-accent transition-colors font-semibold">
              LinkedIn
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors font-semibold">
              Twitter
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors font-semibold">
              Instagram
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
