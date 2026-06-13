'use client';

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogSection() {
  const posts: BlogPost[] = [
    {
      id: 1,
      category: 'AÇILIŞ',
      title: 'AURA Cinema Kadıköy Kapılarını Ziyaretçilere Açtı!',
      excerpt: 'Moda’nın tarihi dokusuyla harmanlanan yeni şubemizde, hem sinema salonumuzu hem de geniş kütüphane çalışma alanımızı hizmete sunduk.',
      date: '12 Haziran 2026'
    },
    {
      id: 2,
      category: 'SEKTÖR HABERİ',
      title: 'IMAX Lazer Teknolojisi ve Sinemanın Yeni Geleceği',
      excerpt: 'Görüntü kalitesini 4 katına çıkaran lazer projeksiyon ve Dolby Atmos çevreleyen ses sistemlerinin izleyici deneyimindeki rolünü analiz ettik.',
      date: '08 Haziran 2026'
    },
    {
      id: 3,
      category: 'KAHVE KÜLTÜRÜ',
      title: 'Organik Kahve Çekirdeklerinin AURA Cafe Yolculuğu',
      excerpt: 'Sürdürülebilir tarım ortaklıklarıyla doğrudan tarladan fincanınıza gelen %100 Arabica çekirdeklerimizin kavrulma ve demlenme sırları.',
      date: '02 Haziran 2026'
    }
  ];

  return (
    <section id="blog" className="bg-brand-light py-24 md:py-32 border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <RevealOnScroll direction="up" delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                GÜNCEL YAZILARIMIZ
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-dark tracking-tight leading-tight">
                AURA Dünyasından Haberler ve İçerikler
              </h2>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="up" delay={0.3} className="shrink-0">
            <a
              href="#blog"
              className="inline-flex items-center text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors group"
            >
              <span>Tüm Yazıları Gör</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </RevealOnScroll>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <RevealOnScroll
              key={post.id}
              direction="up"
              delay={0.1 + index * 0.1}
              className="bg-white rounded-2xl border border-brand-border hover:shadow-lg hover:border-brand-accent/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card top */}
              <div className="p-8 space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                
                <h3 className="font-display font-semibold text-lg sm:text-xl text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card bottom */}
              <div className="px-8 py-5 bg-brand-light border-t border-brand-border flex items-center justify-between text-xs text-brand-gray">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span className="font-semibold text-brand-dark group-hover:text-brand-accent transition-colors flex items-center">
                  Oku <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
