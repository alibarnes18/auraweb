# Korporativ Holdinq Vebsaytı — Dizayn Brifi (Siemens Healthineers Referansı)

## Ümumi Vizyon
Görseldəki kimi **təmiz, klinik, "scientific-premium"** estetika. Çoxlu boşluq (whitespace), incə tipoqrafiya, foto/illüstrasiya əsaslı hero, hər bölmə öz konteynerində nəfəs alır. Bütün animasiyalar **yumşaq və minimal** — scroll-reveal, fade-up, sayğaç animasiyaları, xəritə üzərində pulsing pin-lər.

## Token Sistemi

**Rənglər:**
- `#FFFFFF` — əsas fon
- `#0A1628` — başlıq mətni (tünd lacivərd-qara)
- `#5A6B7D` — ikinci dərəcəli mətn (boz-mavi)
- `#F5F7FA` — alternativ bölmə fonu (açıq boz)
- `#FF6B1A` — aksent rəng (CTA düymələr, ikonlar, vurğular) — şirkətin əsas brend rənginə uyğunlaşdırıla bilər
- `#E8ECF1` — sərhədlər/divider-lər

**Tipoqrafiya:**
- Başlıqlar (H1-H3): **Söhne** və ya alternativ olaraq **Inter Tight / General Sans** — geniş, az çəkili (font-weight 400-500), böyük letter-spacing mənfi (-0.02em)
- Body: **Inter** və ya **Manrope**, 16-18px, line-height 1.6
- Kiçik etiketlər/eyebrow: uppercase, letter-spacing +0.1em, 12-13px, accent rəngdə

**Layout:**
- Konteyner max-width: 1280px, geniş yan padding (80-120px desktop)
- Bölmələr arası vertical padding: 120-160px (nəfəs aldıran boşluq)
- Grid: 12-column, çox vaxt 2-sütun (mətn solda 40%, görsel sağda 60% və ya əksinə)

---

## Bölmə-Bölmə Struktur

### 1. Header (Sticky/Transparent → Solid)
- Sol: Loqo
- Mərkəz/Sağ: Nav linklər (Products, Clinical, Services, Insights) — hover-də alt xətt slide-in animasiyası
- Sağ: "Contact Us" düyməsi (outline, hover-də fill)
- Scroll edəndə şəffaf fondan ağ/blur fona keçid (backdrop-blur + box-shadow fade-in)

### 2. Hero Bölməsi
- Sol tərəf: Böyük başlıq (3 sətir, məs. "We Pioneer Breakthroughs in Healthcare") — hərflər/sözlər scroll yox, page-load-da aşağıdan yuxarı stagger fade-in
- Altında qısa paragraf + 2 düymə (primary solid accent, secondary outline)
- Sağ tərəf: Mücərrəd 3D/elmi illüstrasiya (DNA spirali, molekul strukturu) — page-load-da yavaş rotate/scale-in, scroll-da parallax (yuxarı sürüşərkən bir az yuxarı hərəkət)
- Hero altında nazik horizontal scroll bannner (partner loqoları/statistika) — sürəkli soldan-sağa marquee animasiyası

### 3. "Our Vision" / "Our Purpose" — İki Sütunlu Mətn Blokları
- Hər biri: kiçik eyebrow etiket ("Our Vision"), böyük başlıq, paragraf mətn
- Scroll-trigger: mətn solda fade-up, kontekst görseli sağda fade-in+slide-from-right (gecikmə ilə, stagger)
- Hər blok arası nazik horizontal divider xətti

### 4. "Who We Are" — Mixed Grid (Şəkil + Statistika Kartları)
- Sol böyük şəkil (laboratoriya/avadanlıq fotosu) — hover-də çox yüngül zoom (scale 1.02)
- Sağda 2 kiçik kart: "Patient Portfolio", "AI-Powered Insights" — hər kartda böyük rəqəm/ikon + qısa mətn
- Kartlar scroll-a girəndə bir-bir (staggered, 100ms fərqlə) fade-up

### 5. "Trusted Worldwide" — İnteraktiv Dünya Xəritəsi
- Mərkəzdə dot-pattern dünya xəritəsi (SVG)
- Üzərində bir neçə accent rəngli pulsing pin (CSS keyframe pulse — opacity+scale loop)
- Pinlərin yanında floating kartlar: "40+ Countries", "50+ R&D Centers", "10K+ Employees" — sayğaçlar scroll-a girəndə 0-dan yekun rəqəmə count-up animasiyası
- Alt mətn: "Trusted by Healthcare Providers Worldwide"

### 6. "Empowering Care, Sustaining the Future" — Nömrəli Tab Sistemi
- Sol tərəfdə vertikal nömrələnmiş siyahı (01, 02, 03...) — "Patient Focus", "Innovation", "Sustainability" və s.
- Aktiv element accent rəngdə, klik/hover-də sağ tərəfdəki məzmun (mətn+şəkil) crossfade ilə dəyişir
- Şəkil tərəfində mücərrəd bio-tech illüstrasiya (beyin/sinir şəbəkəsi tərzi)

### 7. "Transform Your Diagnostic Capabilities" — CTA Bölməsi
- Tünd fon (#0A1628) — kontrast üçün
- Mərkəzdə böyük başlıq, alt mətndə qısa açıqlama, accent CTA düymə
- Arxa fonda yarı-şəffaf 3D robot qol/avadanlıq görseli, mouse-move ilə yüngül parallax (transform: translate based on cursor position)

### 8. Footer
- 4-5 sütunlu link qrupları (Products, Company, Resources, Legal)
- Aşağıda email subscription input + accent submit düyməsi
- Sosial media ikonları, hover-də accent rəngə dönüş + yüngül rotate
- Ən aşağıda copyright + dil seçici

---

## Animasiya Qaydaları (Framer Motion / GSAP)
1. **Page load:** Hero mətni stagger fade-up (0.1s interval), illüstrasiya scale 0.9→1 + opacity
2. **Scroll-reveal:** Bütün bölmələr `viewport={{ once: true }}` ilə fade-up (y: 40→0, opacity 0→1, duration 0.6, ease "easeOut")
3. **Sayğaçlar:** Intersection Observer ilə tetiklənən count-up (0 → target, 1.5s)
4. **Marquee:** Sonsuz horizontal scroll, linear, 30s loop
5. **Hover:** Düymələr — scale 1.02 + box-shadow artımı; Şəkillər — scale 1.02-1.05; Linklər — underline slide-in soldan
6. **Map pins:** CSS pulse keyframe (scale 1→1.4, opacity 1→0, 2s infinite)
7. **Parallax:** Hero illüstrasiya və CTA arxa fon görseli üçün scroll/mouse əsaslı yüngül translate (max 20-30px)

---

## Texniki Stack Tövsiyəsi
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animasiya:** Framer Motion (scroll-reveal, stagger, hover) + react-countup (sayğaçlar)
- **Xəritə:** SVG dot-map (statik, custom-styled) — react-simple-maps istifadə edilə bilər
- **İkonlar:** Lucide React
- **Fontlar:** next/font ilə Inter + Inter Tight (Google Fonts)
- **Responsive:** Mobile-first, breakpoint-lərdə 2-sütunlu bölmələr 1-sütuna düşür, hero illüstrasiya mobil-də mətnin altına keçir

---

## Cursor üçün İmplementasiya Tövsiyəsi
Hər bölməni ayrı komponent kimi qur (`Hero.tsx`, `VisionPurpose.tsx`, `WhoWeAre.tsx`, `WorldMap.tsx`, `NumberedTabs.tsx`, `CTASection.tsx`, `Footer.tsx`). Reusable `<RevealOnScroll>` wrapper komponenti yarat ki, bütün scroll-animasiyaları üçün istifadə olunsun. Rəng/spacing dəyərlərini `tailwind.config.ts`-də design token kimi təyin et ki, brend rənginə görə asanlıqla dəyişdirilə bilsin.
