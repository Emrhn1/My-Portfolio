import { ShoppingCart, Payment, LocalShipping, Inventory, AdminPanelSettings, TrendingUp, Chat, Notifications, Group, SmartToy, AutoAwesome, Speed, BarChart, PieChart, FilterList, AccountBalanceWallet, Security, Layers, FitnessCenter, Restaurant, Timer } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';
import TuneIcon from '@mui/icons-material/Tune';
import DescriptionIcon from '@mui/icons-material/Description';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WebAssetIcon from '@mui/icons-material/WebAsset';
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
    liveUrl: '#',
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
    slug: 'kisisel-web-sitesi',
    title: 'Kişisel Web Sitesi',
    description: 'Portföy ve blog içeren kişisel web sitesi. Projeler, makaleler ve iletişim formu.',
    fullDescription: `Kişisel web sitesi, portföy ve blog içeriklerini barındırır. Kullanıcı dostu arayüz ve responsive tasarım ile her cihazda mükemmel görünüm sağlar.`,
    image: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['HTML', 'CSS', 'JS'],
    githubUrl: 'https://github.com/Emrhn1/Emrhn1.github.io?tab=readme-ov-file',
    liveUrl: 'https://emrhn1.github.io/',
    date: '2025',
    features: [
      { 
        icon: DescriptionIcon, 
        title: "Ayrıntılı Proje Açıklamaları", 
        desc: "Her projenin teknolojileri, zorlukları ve çözümleri hakkında detaylı bilgiler." 
      },
      { 
        icon: AutoAwesome, 
        title: "Responsive Tasarım", 
        desc: "Mobil ve masaüstü uyumlu, her cihazda mükemmel görünüm." 
      },
    ]
  },
  {
    slug: 'Adventureworks-2022-Veritabani-Projesi',
    title: 'Adventureworks 2022 Veritabanı Projesi',
    description: 'Belirli bir kategoriye ürün listeleme, sipariş detayı görüntüleme ve satış raporları oluşturma özellikleri.',
    fullDescription: `AdventureWorks 2022 veritabanı kullanılarak geliştirilmiş C# ve ASP.NET Core tabanlı web uygulaması. 
Kullanıcılar belirli kategorilere göre ürünleri listeleyebilir, sipariş detaylarını görüntüleyebilir ve satış raporları oluşturabilirler. 
Entity Framework Core ile veritabanı işlemleri gerçekleştirilmiş olup, kullanıcı dostu arayüz Razor Pages ile tasarlanmıştır.`,
    image: 'https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['C#',"ASP.NET Core", "SQL Server", "Entity Framework"],
    githubUrl: 'https://github.com/Emrhn1/AdventureWorks-2022-Sample-Project',
    liveUrl: '#',
    date: '2025',
    features: [
      { 
        icon: BarChart, 
        title: "Kategori Bazlı Satış Raporları", 
        desc: "Belirli kategorilere göre satış performansını analiz etme." 
      },
      { 
        icon: PieChart, 
        title: "Kategori Bazlı Ürün Listeleme", 
        desc: "Belirli kategorilere göre ürünlerin listelenmesi." 
      },
      { 
        icon: FilterList, 
        title: "Çıkış", 
        desc: "Uygulamadan güvenli çıkış yapma." 
      },
      { 
        icon: TrendingUp, 
        title: "Yeni Sipariş Ekleme", 
        desc: "Yeni sipariş oluşturma ve sipariş detaylarını görüntüleme." 
      }
    ]
  },
  {
    slug: 'dunya-ulkeleri-quiz-uygulamasi',
    title: 'Dünya Ülkeleri Quiz Uygulaması',
    description: 'Dünya ülkelerini haritada üzerinde bulma odaklı quiz uygulaması.',
    fullDescription: `Dünya ülkelerini öğrenmeyi eğlenceli hale getiren interaktif quiz uygulaması. Kullanıcı dünya haritası üzerindeki herhangi bir ülkeyi bilmeye çalışır ve her yazdığı ülkenin coğrafi konumu harita üzerinde gösterilir.`,
    image: 'https://plus.unsplash.com/premium_photo-1712509212206-ab4e7b3bb593?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Emrhn1/World-Countries-Quiz',
    liveUrl: '#',
    date: '2025',
    features: [
      { 
        icon: PublicIcon, 
        title: "Dünya Haritası Entegrasyonu", 
        desc: "Interaktif dünya haritası üzerinde ülkeleri bulma." 
      },
      { 
        icon: AccessTimeIcon, 
        title: "Süreli Bazlı Oyun Modu", 
        desc: "Belirli bir süre içinde mümkün olduğunca çok ülke bulma." 
      },
      { 
        icon: EmojiEventsIcon, 
        title: "Başarımların Takibi", 
        desc: "Kullanıcıların bildiği ülkeleri ve skorlarını kaydetme." 
      },
      { 
        icon: ZoomInIcon, 
        title: "İlgili yere yakınlaştırma", 
        desc: "Harita üzerinde ilgili ülkeye yakınlaştırma ve uzaklaştırma." 
      }
    ]
  },
  {
    slug: 'coreweb',
    title: 'Coreweb -Grup Projesi',
    description: 'Kullanıcıların logo ve web sitesi sipariş edebileceği, adminin bu siparişleri yönetebileceği bir platform.',
    fullDescription: `Coreweb, kullanıcıların profesyonel logo ve web sitesi sipariş edebileceği, adminin ise bu siparişleri yönetebileceği kapsamlı bir platformdur.`,
    image: 'https://plus.unsplash.com/premium_photo-1661319071349-e89f0097393a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['HTML', 'CSS', 'Javascript', 'Express.js', 'JSON'],
    githubUrl: 'https://github.com/Emrhn1/coreweb',
    liveUrl: '#',
    date: '2024',
    features: [
      { 
        icon: WebAssetIcon, 
        title: "Çeşitli logo ve Web Sitesi Seçenekleri", 
        desc: "Farklı sektörlere yönelik logo ve web sitesi tasarım seçenekleri." 
      },
      { 
        icon: BookmarkIcon, 
        title: "Sipariş Yönetimi", 
        desc: "Kullanıcıların logo ve web sitesi siparişlerini yönetme." 
      },
      { 
        icon: ShoppingBagIcon, 
        title: "Sipariş Takibi", 
        desc: "Kullanıcıların logo ve web sitesi siparişlerini takip etme." 
      },
      { 
        icon: AttachMoneyIcon, 
        title: "Güvenli Ödeme Altyapısı", 
        desc: "Güvenli ödeme yöntemleri ile sorunsuz işlem deneyimi." 
      }
    ]
  }
];

