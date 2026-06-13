'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const projectTypeOptions = [
  'Sinema & Eğlence',
  'Kafe & Gastronomi',
  'Gayrimenkul',
  'Teknoloji & Yazılım',
  'Lojistik',
  'Yatırım Ortaklığı',
  'Medya & Reklam',
  'Diğer',
];

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, option]
        : prev.interests.filter((t) => t !== option),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/robot_arm_cta.png"
          alt="AURA Holding arka plan"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-brand-dark/95" />
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FF6B1A]/10"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-orb ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">

        {/* Left: Title & Info */}
        <div className="flex flex-col justify-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B1A] px-3 py-1 rounded-full bg-[#FF6B1A]/10 w-fit">
            Birlikte Büyüyelim
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white leading-tight tracking-tight">
            Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim
          </h2>

          <p className="text-brand-gray text-lg leading-relaxed max-w-lg">
            AURA Holding olarak yatırımdan danışmanlığa, teknolojiden gastronomiye kadar geniş bir portföyde size destek olmaya hazırız.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-brand-gray text-sm uppercase tracking-widest font-semibold">E-posta</p>
            <a
              href="mailto:info@auraholding.com"
              className="text-[#FF6B1A] text-xl font-medium hover:text-white transition-colors"
            >
              info@auraholding.com
            </a>

            <div className="flex items-center gap-4 pt-2">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'Instagram', href: '#' },
                { label: 'Twitter', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="px-4 py-2 text-xs font-semibold border border-white/20 text-gray-300 rounded-full hover:border-[#FF6B1A] hover:text-[#FF6B1A] transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF6B1A]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FF6B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold text-white">Mesajınız İletildi!</h3>
              <p className="text-brand-gray">En kısa sürede sizinle iletişime geçeceğiz.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 text-sm border border-white/20 text-gray-300 rounded-full hover:text-white transition-colors"
              >
                Tekrar Gönder
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">Hadi Konuşalım 👋</h3>
              <p className="text-brand-gray text-sm mb-6">Bize kısa bir mesaj bırakın, ekibimiz size ulaşsın.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Adınız
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ahmet Yılmaz"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B1A]/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      E-posta
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ahmet@sirket.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B1A]/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Proje fikrinizi kısaca anlatın..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B1A]/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                {/* Interest Checkboxes */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">İlgilendiğiniz Alanlar</p>
                  <div className="grid grid-cols-2 gap-2">
                    {projectTypeOptions.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all text-xs ${
                          formData.interests.includes(option)
                            ? 'border-[#FF6B1A]/60 bg-[#FF6B1A]/10 text-[#FF6B1A]'
                            : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.interests.includes(option)}
                          onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                        />
                        <span
                          className={`w-3 h-3 rounded-sm border flex-shrink-0 flex items-center justify-center ${
                            formData.interests.includes(option) ? 'border-[#FF6B1A] bg-[#FF6B1A]' : 'border-white/30'
                          }`}
                        >
                          {formData.interests.includes(option) && (
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          )}
                        </span>
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#FF6B1A] text-white font-semibold text-sm hover:bg-[#e85e10] hover:shadow-lg hover:shadow-[#FF6B1A]/25 transition-all duration-200 hover:scale-[1.01]"
                >
                  Mesaj Gönder →
                </button>
              </form>
            </>
          )}
        </div>

      </div>

      {/* Floating orb keyframes */}
      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
