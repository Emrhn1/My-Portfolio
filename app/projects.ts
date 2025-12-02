import { ShoppingCart, Payment, LocalShipping, Inventory, AdminPanelSettings, TrendingUp, Chat, Notifications, Group, SmartToy, AutoAwesome, Speed, BarChart, PieChart, FilterList, AccountBalanceWallet, Security, Layers, FitnessCenter, Restaurant, Timer } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';
import TuneIcon from '@mui/icons-material/Tune';

export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  features: {
    icon: any;
    title: string;
    desc: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: 'nextjs-store-project',
    title: 'NextJS Store Project',
    description: 'Modern e-ticaret platformu. Sepet yönetimi, ödeme sistemi ve admin paneli ile kapsamlı çözüm.',
    fullDescription: `NextJS Store, modern e-ticaret ihtiyaçlarını karşılamak üzere tasarlanmış full-stack bir web uygulamasıdır. 
Next.js 13+ App Router, TypeScript, Redux Toolkit ve MongoDB teknolojileri kullanılarak geliştirilmiştir.

Proje, kullanıcı dostu arayüzü, güçlü admin paneli, güvenli ödeme sistemi ve gerçek zamanlı sipariş takibi ile 
kapsamlı bir e-ticaret çözümü sunmaktadır. Server-side rendering (SSR) ve static generation (SSG) ile SEO uyumlu 
ve yüksek performanslı bir altyapıya sahiptir.`,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'React', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Emrhn1/NextJS-Store-Project',
    liveUrl: 'https://nextjs-store-demo.vercel.app',
    date: '2025',
    features: [
      { 
        icon: ShoppingCart, 
        title: "Gelişmiş Sepet Sistemi", 
        desc: "Redux ile yönetilen global state, localStorage persistance ve gerçek zamanlı sepet güncellemeleri." 
      },
      { 
        icon: Payment, 
        title: "Güvenli Ödeme", 
        desc: "Stripe entegrasyonu ile güvenli ödeme altyapısı ve çoklu ödeme yöntemi desteği." 
      },
      { 
        icon: LocalShipping, 
        title: "Sipariş Takibi", 
        desc: "Gerçek zamanlı sipariş durumu, kargo takibi ve e-posta bildirimleri." 
      },
      { 
        icon: Inventory, 
        title: "Ürün Yönetimi", 
        desc: "Detaylı ürün filtreleme, kategori bazlı arama ve stok yönetimi sistemi." 
      },
      { 
        icon: AdminPanelSettings, 
        title: "Admin Paneli", 
        desc: "Ürün CRUD işlemleri, sipariş yönetimi ve kullanıcı yönetimi için güçlü admin paneli." 
      },
      { 
        icon: TrendingUp, 
        title: "Analytics & Raporlama", 
        desc: "Satış analitiği, kullanıcı davranış takibi ve detaylı raporlama özellikleri." 
      }
    ]
  },
  {
    slug: 'urun-talep-yonetim-sistemi',
    title: 'Staj -Ürün/Talep Yönetim Sistemi',
    description: 'Admin ve user sayfalarının olduğu, userın talep ettiği adminin de bu ürünleri görüp onayladığı ya da reddettiği bir web uygulaması.',
    fullDescription: `Kullancıların aktif olarak bir ürün talep ederler ve bu taleplerin admin tarafından yönetildiği gerçek zamanlı olarak kabul ya da reddedilir. Ürün yoksa o ürün talep edilemez ya da ürün zaten talep edilmişse aynı ürünü bir daha talep edemez.
`,
    image: 'https://media.istockphoto.com/id/2183482739/tr/foto%C4%9Fraf/procurement-management-and-supply-chain-concept-procurement-icons-related-to-logistics.jpg?s=2048x2048&w=is&k=20&c=MYhWcQThHCSSu9mbbYXa2CO0wTijL-hFj-rSI0SnWEg=',
    tags: ['React', 'Next.Js', 'Redux Toolkit', 'MUI', 'Typescript'],
    githubUrl: 'https://github.com/Emrhn1/Staj-Proje',
    liveUrl: 'https://demo.com',
    date: '2025',
    features: [
      { 
        icon: CategoryIcon, 
        title: "Gerçek Zamanlı Ürün/Talep Yönetimi", 
        desc: "Birden fazla kategori altında ürün talep etme ve yönetme." 
      },
      { 
        icon: TuneIcon, 
        title: "Filtreleme", 
        desc: "Her bir sayfada gelişmiş filtreleme seçenekleri ile ürün ve talepleri kolayca bulma." 
      },
      { 
        icon: Notifications, 
        title: "Push Bildirimler", 
        desc: "Ürün talep edildiğinde ve durum değiştiğinde anlık bildirimler." 
      },
      { 
        icon: Security, 
        title: "Güvenli İletişim", 
        desc: "End-to-end encryption ve JWT tabanlı kimlik doğrulama." 
      }
    ]
  },
  {
    slug: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'OpenAI API entegrasyonu ile içerik üretimi. Blog yazıları, sosyal medya içerikleri ve SEO metinleri.',
    fullDescription: `OpenAI GPT-4 API kullanılarak geliştirilen yapay zeka destekli içerik üretim platformu. 
Kullanıcılar blog yazıları, sosyal medya içerikleri, ürün açıklamaları ve SEO optimize edilmiş metinler oluşturabilir.

Prompt engineering teknikleri ile kaliteli ve bağlama uygun içerikler üretilir. Kullanıcı geçmişi ve template sistemi 
ile hızlı ve verimli içerik üretimi sağlanır. Credit sistemi ve kullanıcı yönetimi implementasyonu bulunmaktadır.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    date: '2024',
    features: [
      { 
        icon: SmartToy, 
        title: "GPT-4 Entegrasyonu", 
        desc: "OpenAI'ın en gelişmiş modeli ile yüksek kaliteli içerik üretimi." 
      },
      { 
        icon: AutoAwesome, 
        title: "Template Sistemi", 
        desc: "Hazır şablonlar ile hızlı blog, social media ve SEO içeriği oluşturma." 
      },
      { 
        icon: Speed, 
        title: "Hızlı Üretim", 
        desc: "Saniyeler içinde profesyonel kalitede içerik üretimi." 
      },
      { 
        icon: Payment, 
        title: "Credit Sistemi", 
        desc: "Token bazlı kullanım ve Stripe entegrasyonu ile ödeme yönetimi." 
      }
    ]
  },
  {
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Kapsamlı veri analiz ve raporlama paneli. Gerçek zamanlı metrikler, grafikler ve özel raporlar.',
    fullDescription: `Modern SaaS uygulamaları için geliştirilmiş profesyonel analitik dashboard platformu. 
Recharts ve D3.js kütüphaneleri ile interaktif grafikler, gerçek zamanlı veri akışı ve özelleştirilebilir widget'lar.

Kullanıcı davranış analizi, conversion tracking, revenue metrics ve cohort analysis gibi ileri seviye analitik 
özellikler bulunmaktadır. CSV/PDF export, scheduled reports ve multi-tenant architecture implementasyonu yapılmıştır.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Recharts', 'Node.js', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    date: '2023',
    features: [
      { 
        icon: BarChart, 
        title: "Interaktif Grafikler", 
        desc: "Recharts ve D3.js ile zengin veri görselleştirme ve drill-down analiz." 
      },
      { 
        icon: PieChart, 
        title: "Gerçek Zamanlı Metrikler", 
        desc: "WebSocket ile canlı veri akışı ve dashboard güncellemeleri." 
      },
      { 
        icon: FilterList, 
        title: "Özel Raporlar", 
        desc: "Tarih aralığı, segment ve metrik bazlı filtreleme sistemi." 
      },
      { 
        icon: TrendingUp, 
        title: "Cohort Analizi", 
        desc: "Kullanıcı segmentasyonu, retention ve conversion tracking." 
      }
    ]
  },
  {
    slug: 'blockchain-nft-marketplace',
    title: 'NFT Marketplace',
    description: 'Ethereum blockchain üzerinde NFT alım-satım platformu. Wallet entegrasyonu ve smart contract yönetimi.',
    fullDescription: `Ethereum blockchain teknolojisi kullanılarak geliştirilmiş NFT marketplace platformu. 
MetaMask ve WalletConnect entegrasyonları ile güvenli wallet bağlantısı, Solidity smart contract'ları ile NFT minting.

IPFS üzerinde decentralized storage, NFT koleksiyonları, auction sistemi, royalty ödemeleri ve gas fee optimizasyonu 
gibi özellikler implementasyonu bulunmaktadır. Web3.js ve Ethers.js kütüphaneleri kullanılmıştır.`,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    tags: ['React', 'Web3.js', 'Solidity', 'Ethereum', 'IPFS', 'Hardhat'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    date: '2023',
    features: [
      { 
        icon: AccountBalanceWallet, 
        title: "Wallet Entegrasyonu", 
        desc: "MetaMask, WalletConnect ve Coinbase Wallet desteği." 
      },
      { 
        icon: Layers, 
        title: "Smart Contracts", 
        desc: "ERC-721 ve ERC-1155 standardında Solidity smart contract'ları." 
      },
      { 
        icon: Security, 
        title: "IPFS Storage", 
        desc: "Decentralized storage ile NFT metadata ve asset yönetimi." 
      },
      { 
        icon: TrendingUp, 
        title: "Auction Sistemi", 
        desc: "İngiliz ve Hollanda tarzı açık artırma mekanizmaları." 
      }
    ]
  },
  {
    slug: 'fitness-tracking-app',
    title: 'Fitness Tracking Mobile App',
    description: 'React Native ile geliştirilmiş fitness ve egzersiz takip uygulaması. Workout planları ve progress tracking.',
    fullDescription: `React Native kullanılarak geliştirilmiş cross-platform fitness tracking mobil uygulaması. 
Özelleştirilebilir workout programları, kalori takibi, egzersiz videoları ve ilerleme grafikleri bulunmaktadır.

Wearable cihaz entegrasyonu (Apple Watch, Fitbit), sosyal özellikler (arkadaşlarla yarışma, başarı rozetleri), 
AI destekli form analizi ve kişiselleştirilmiş öneriler gibi modern fitness app özellikleri implementasyonu yapılmıştır.`,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo', 'HealthKit'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    date: '2023',
    features: [
      { 
        icon: FitnessCenter, 
        title: "Workout Programları", 
        desc: "Özelleştirilebilir egzersiz planları ve video rehberler." 
      },
      { 
        icon: Restaurant, 
        title: "Beslenme Takibi", 
        desc: "Kalori sayacı, makro tracking ve yemek önerileri." 
      },
      { 
        icon: Timer, 
        title: "Wearable Entegrasyonu", 
        desc: "Apple Watch, Fitbit ve Google Fit senkronizasyonu." 
      },
      { 
        icon: BarChart, 
        title: "Progress Analytics", 
        desc: "Detaylı grafikler ile ilerleme takibi ve hedef yönetimi." 
      }
    ]
  }
];

