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
  featured?: boolean;
  features: {
    iconName: string;
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
    featured: true,
    githubUrl: 'https://github.com/Emrhn1/NextJS-Store-Project',
    liveUrl: 'https://nextjs-store-demo.vercel.app',
    date: '2025',
    features: [
      { iconName: 'ShoppingCart', title: 'Gelişmiş Sepet Sistemi', desc: 'Redux ile yönetilen global state, localStorage persistance ve gerçek zamanlı sepet güncellemeleri.' },
      { iconName: 'CreditCard', title: 'Güvenli Ödeme', desc: 'Stripe entegrasyonu ile güvenli ödeme altyapısı ve çoklu ödeme yöntemi desteği.' },
      { iconName: 'Truck', title: 'Sipariş Takibi', desc: 'Gerçek zamanlı sipariş durumu, kargo takibi ve e-posta bildirimleri.' },
      { iconName: 'Package', title: 'Ürün Yönetimi', desc: 'Detaylı ürün filtreleme, kategori bazlı arama ve stok yönetimi sistemi.' },
      { iconName: 'ShieldCheck', title: 'Admin Paneli', desc: 'Ürün CRUD işlemleri, sipariş yönetimi ve kullanıcı yönetimi için güçlü admin paneli.' },
      { iconName: 'TrendingUp', title: 'Analytics & Raporlama', desc: 'Satış analitiği, kullanıcı davranış takibi ve detaylı raporlama özellikleri.' },
    ],
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
      { iconName: 'Grid3X3', title: 'Gerçek Zamanlı Ürün/Talep Yönetimi', desc: 'Birden fazla kategori altında ürün talep etme ve yönetme.' },
      { iconName: 'SlidersHorizontal', title: 'Filtreleme', desc: 'Her bir sayfada gelişmiş filtreleme seçenekleri ile ürün ve talepleri kolayca bulma.' },
      { iconName: 'Bell', title: 'Push Bildirimler', desc: 'Ürün talep edildiğinde ve durum değiştiğinde anlık bildirimler.' },
      { iconName: 'Lock', title: 'Güvenli İletişim', desc: 'End-to-end encryption ve JWT tabanlı kimlik doğrulama.' },
    ],
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
      { iconName: 'FileText', title: 'Ayrıntılı Proje Açıklamaları', desc: 'Her projenin teknolojileri, zorlukları ve çözümleri hakkında detaylı bilgiler.' },
      { iconName: 'Sparkles', title: 'Responsive Tasarım', desc: 'Mobil ve masaüstü uyumlu, her cihazda mükemmel görünüm.' },
    ],
  },
  {
    slug: 'Learning-Dashboard',
    title: 'Learning Dashboard',
    description: 'Kullanıcıların öğrendikleri konuları takip edebilecekleri ve ilerlemelerini görebilecekleri bir dashboard uygulaması.',
    fullDescription: `Learning Dashboard, kullanıcıların öğrenme süreçlerini yönetmelerine yardımcı olan interaktif bir uygulamadır. Kullanıcılar, öğrendikleri konuları ekleyebilir, ilerlemelerini takip edebilir ve öğrenme hedefleri belirleyebilirler.
    Ayrıca kullanıcılar takıldıkları konuları ekleyip konunun hangi kısmında takıldıklarını da mesaj olarak belirtebilirler`,
    tags: ['React', 'Next.js', 'Typescript', 'Redux Toolkit', 'Shadcn UI'],
    featured: true,
    image: 'https://media.istockphoto.com/id/1954841243/tr/foto%C4%9Fraf/data-analysis-chart-graph-3d-statistics-background.jpg?s=2048x2048&w=is&k=20&c=ezdFnbmakxE2uLDetc-JFrWryW3BGAYQBAp0YR6BuPI=',
    githubUrl: 'https://github.com/Emrhn1/Learning-Dashboard-',
    liveUrl: '#',
    date: '2026',
    features: [
      { iconName: 'BarChart2', title: 'Active, Stuck ve Completed Durumları', desc: 'Kullanıcının öğrenme sürecini üç farklı durumda takip etme imkanı.' },
      { iconName: 'PieChart', title: 'Stuck Konularının Takibi', desc: 'Kullanıcıların takıldıkları konuları ekleyip, bu konuların hangi kısmında takıldıklarını mesaj olarak belirtebilme.' },
      { iconName: 'ClipboardList', title: 'Öğrenilen Konuların Listeleme', desc: 'Kullanıcının o gün öğrendiği konuları yazabilme.' },
      { iconName: 'Filter', title: 'Konuları Seviye ve Duruma Göre Filtreleme', desc: 'Kullanıcıların konularını seviye (kolay, orta, zor) ve duruma (active, stuck, completed) göre filtreleyebilme.' },
      { iconName: 'Sun', title: 'Tema Değiştirme', desc: 'Kullanıcıların dashboard temasını açık ve koyu mod arasında değiştirebilmesi.' },
    ],
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
      { iconName: 'Globe', title: 'Dünya Haritası Entegrasyonu', desc: 'Interaktif dünya haritası üzerinde ülkeleri bulma.' },
      { iconName: 'Clock', title: 'Süreli Bazlı Oyun Modu', desc: 'Belirli bir süre içinde mümkün olduğunca çok ülke bulma.' },
      { iconName: 'Trophy', title: 'Başarımların Takibi', desc: 'Kullanıcıların bildiği ülkeleri ve skorlarını kaydetme.' },
      { iconName: 'ZoomIn', title: 'İlgili yere yakınlaştırma', desc: 'Harita üzerinde ilgili ülkeye yakınlaştırma ve uzaklaştırma.' },
    ],
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
      { iconName: 'Monitor', title: 'Çeşitli logo ve Web Sitesi Seçenekleri', desc: 'Farklı sektörlere yönelik logo ve web sitesi tasarım seçenekleri.' },
      { iconName: 'Bookmark', title: 'Sipariş Yönetimi', desc: 'Kullanıcıların logo ve web sitesi siparişlerini yönetme.' },
      { iconName: 'ShoppingBag', title: 'Sipariş Takibi', desc: 'Kullanıcıların logo ve web sitesi siparişlerini takip etme.' },
      { iconName: 'DollarSign', title: 'Güvenli Ödeme Altyapısı', desc: 'Güvenli ödeme yöntemleri ile sorunsuz işlem deneyimi.' },
    ],
  },
];
