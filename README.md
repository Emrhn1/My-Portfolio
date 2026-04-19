# Emirhan Erkan — Portfolio

Terminal estetiğinde, çok dilli (TR/EN), tam responsive kişisel portföy sitesi. Next.js 16 App Router, React 19 ve TypeScript ile geliştirildi.

**Canlı:** [emirhanerkan.com](https://www.emirhanerkan.com)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss)

---

## Özellikler

- **Terminal temalı tasarım** — Monospace tipografi (Space Mono + JetBrains Mono), komut satırı esintili UI
- **Çok dilli (i18n)** — `next-intl` ile Türkçe ve İngilizce, locale-aware metadata ve hreflang
- **Dark / Light mode** — `next-themes` ile sistem tercihini takip eden tema desteği
- **Command Palette** — `cmdk` tabanlı `Ctrl/Cmd + K` ile hızlı gezinme
- **Animasyonlar** — Framer Motion ile sayfa geçişleri, SplitText, TiltCard, SpotlightCard
- **Proje detay sayfaları** — Dinamik route'lar (`/[locale]/projects/[slug]`) ile her proje için özel sayfa
- **İletişim formu** — React Hook Form + Zod validasyonu, Nodemailer ile e-posta gönderimi
- **Spam koruması** — Cloudflare Turnstile ile CAPTCHA doğrulaması
- **SEO** — Locale-aware metadata, Open Graph, Twitter Card, sitemap (`next-sitemap`), robots
- **Dinamik OG image** — `app/[locale]/opengraph-image.tsx` ile 1200×630 sosyal medya önizlemesi
- **Analytics** — Vercel Analytics entegrasyonu
- **Accessibility** — Skip-to-content linki, semantik HTML

## Teknoloji Stack

### Core
- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**

### UI & Styling
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animasyonlar
- **Lucide React** — icon seti
- **tw-animate-css** — hazır animasyon yardımcıları

### Forms & Validation
- **React Hook Form** — form state yönetimi
- **Zod** — schema validasyonu
- **@hookform/resolvers** — Zod ↔ RHF entegrasyonu

### i18n & Theme
- **next-intl** — çok dilli içerik
- **next-themes** — tema yönetimi

### Backend
- **Next.js API Routes** — serverless endpoint (`/api/contact`)
- **Nodemailer** — SMTP üzerinden e-posta
- **@marsidev/react-turnstile** — Cloudflare Turnstile React wrapper

### UX
- **cmdk** — command palette
- **vaul** — mobile drawer


---

## Proje Yapısı

```
app/
├── [locale]/                    # Locale-aware sayfalar (tr, en)
│   ├── layout.tsx               # Metadata, providers, html/body
│   ├── page.tsx                 # Ana sayfa
│   ├── opengraph-image.tsx      # Dinamik OG görseli
│   └── projects/[slug]/         # Proje detay sayfaları
├── api/
│   └── contact/route.ts         # İletişim formu + Turnstile verify
├── components/                  # UI bileşenleri
│   ├── Hero, About, Projects, SkillMatrix, Contact, Footer
│   ├── Navbar, CommandPalette, PageTransition
│   └── TiltCard, SpotLightCard, SplitText
├── layout.tsx                   # Root shell
├── icon.svg                     # Site favicon
└── globals.css                  # Global stiller

messages/                        # i18n çevirileri
├── tr.json
└── en.json
```

---

## Lisans

Bu proje kişisel portföy amaçlıdır. Tasarım ve içerik koruma altındadır; kod parçaları referans amaçlı incelenebilir.

## İletişim

- **Web:** [emirhanerkan.com](https://www.emirhanerkan.com)
- **E-posta:** oyuncut80@gmail.com
