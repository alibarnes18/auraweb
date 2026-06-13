'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function ContactCTA() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-[#FAFAFC] py-24 md:py-36 border-t border-[#E5E5EB] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="max-w-4xl space-y-8">
          
          <RevealOnScroll direction="up" delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6042EC] block mb-2">
              BİZİMLE ÇALIŞIN
            </span>
          </RevealOnScroll>

          {/* Mega Text CTA */}
          <RevealOnScroll direction="up" delay={0.2}>
            <button
              onClick={() => setShowForm(!showForm)}
              className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-[#0E0E10] tracking-tight leading-none text-left block hover:text-[#6042EC] transition-colors duration-300 select-none group cursor-pointer"
            >
              Aklınızda bir proje mi var? <br className="hidden sm:inline" />
              <span className="inline-flex items-center border-b-[6px] md:border-b-[10px] border-current pb-2 group-hover:border-[#6042EC]">
                Hadi Konuşalım
                <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 ml-4 transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </RevealOnScroll>

          {/* Minimalist Contact Form Panel */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 overflow-hidden text-left"
              >
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-xl bg-white p-8 sm:p-10 rounded-[2rem] border border-[#E5E5EB] shadow-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-[#0E0E10] uppercase tracking-wider block">Adınız</label>
                        <input
                          type="text"
                          required
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#FAFAFC] border border-[#E5E5EB] rounded-xl px-4 py-3 text-sm text-[#0E0E10] focus:outline-hidden focus:border-[#6042EC] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-[#0E0E10] uppercase tracking-wider block">E-posta</label>
                        <input
                          type="email"
                          required
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAFAFC] border border-[#E5E5EB] rounded-xl px-4 py-3 text-sm text-[#0E0E10] focus:outline-hidden focus:border-[#6042EC] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-[#0E0E10] uppercase tracking-wider block">Projenizden Bahsedin</label>
                      <textarea
                        rows={4}
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FAFAFC] border border-[#E5E5EB] rounded-xl px-4 py-3 text-sm text-[#0E0E10] focus:outline-hidden focus:border-[#6042EC] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6042EC] text-white text-sm font-semibold hover:bg-[#0E0E10] transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Mesaj Gönder</span>
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-xl bg-white p-8 sm:p-10 rounded-[2rem] border border-[#E5E5EB] text-center space-y-4"
                  >
                    <h4 className="font-display font-bold text-xl text-[#0E0E10]">Harika! Mesajınızı aldık.</h4>
                    <p className="text-sm text-[#565660] font-light leading-relaxed">
                      En kısa sürede (genellikle 24 saat içinde) sizinle iletişime geçeceğiz. Projeniz hakkında konuşmak için sabırsızlanıyoruz.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-[#6042EC] underline cursor-pointer"
                    >
                      Yeni bir mesaj gönder
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
