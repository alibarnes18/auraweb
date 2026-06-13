"use client";

import React, { useState, useEffect, useRef } from 'react';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} className="group relative inline-block overflow-hidden h-5 flex items-center text-sm">
      <div className="flex flex-col transition-transform duration-300 ease-out transform group-hover:-translate-y-1/2">
        <span className="text-gray-300">{children}</span>
        <span className="text-white">{children}</span>
      </div>
    </a>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    };
  }, [isOpen]);

  const logoElement = (
    <a href="#" className="font-display font-extrabold text-lg tracking-tight text-white flex items-center select-none">
      AURA<span className="text-[#FF6B1A]">.</span>
    </a>
  );

  const navLinksData = [
    { label: 'Faaliyet Alanları', href: '#sectors' },
    { label: 'Değerlerimiz', href: '#services' },
    { label: 'Hakkımızda', href: '#about' },
  ];

  const contactButton = (
    <button
      onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto"
    >
      İletişim
    </button>
  );

  const ctaButton = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-[#FF6B1A] opacity-30 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-50 group-hover:blur-xl group-hover:-m-3" />
      <button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-white bg-[#FF6B1A] rounded-full hover:bg-[#e85e10] transition-all duration-200 w-full sm:w-auto">
        Bize Ulaşın
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                 flex flex-col items-center
                 pl-6 pr-6 py-3 backdrop-blur-sm
                 ${headerShapeClass}
                 border border-[#333] bg-[#1f1f1f57]
                 w-[calc(100%-2rem)] sm:w-auto
                 transition-[border-radius] duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        {/* Logo */}
        <div className="flex items-center">
          {logoElement}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {contactButton}
          {ctaButton}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                   ${isOpen ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {contactButton}
          {ctaButton}
        </div>
      </div>
    </header>
  );
}
