export interface Product {
  id: string;
  name: string;
  category: 'Gitar' | 'Piyano' | 'Davul' | 'Yaylı' | 'Nefesli' | 'Ekipman';
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  description: string;
  features: string[];
  inStock: boolean;
  soundType: 'guitar' | 'piano' | 'violin' | 'drum' | 'flute' | 'bass';
}

export const PRODUCTS: Product[] = [
  {
    id: 'gitar-1',
    name: 'Fender Player Stratocaster Elektro Gitar',
    category: 'Gitar',
    price: 34500,
    oldPrice: 38900,
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Çok Satan',
    badgeColor: 'danger',
    description: 'Klasik Stratocaster tonu, modern C profil akçaağaç sap ve Alnico 5 manyetikler ile sahneye hazır profesyonel elektro gitar.',
    features: ['Alder gövde', '3x Player Series Alnico 5 Strat Single-Coil', '22 Medium Jumbo perde', '2-Noktalı Senkronize Tremolo'],
    inStock: true,
    soundType: 'guitar'
  },
  {
    id: 'gitar-2',
    name: 'Yamaha C40 Klasik Gitar',
    category: 'Gitar',
    price: 6850,
    oldPrice: 7500,
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Yeni Başlayanlara',
    badgeColor: 'primary',
    description: 'Müzik okulları ve başlangıç seviyesindeki öğrenciler için dünya standardı, dayanıklı ve sıcak tonlu klasik gitar.',
    features: ['Ladin kapak', 'Gül ağacı klavye', 'Klasik naylon teller', 'Mükemmel intonasyon'],
    inStock: true,
    soundType: 'guitar'
  },
  {
    id: 'gitar-3',
    name: 'Ibanez SR300E Bas Gitar',
    category: 'Gitar',
    price: 19200,
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 24,
    badge: 'Fırsat',
    badgeColor: 'warning',
    description: 'İnce ve hızlı sap yapısı, PowerSpan çift sargılı manyetikler ve 3 bant aktif EQ ile her müzik tarzına uyumlu bas gitar.',
    features: ['Nyatoh gövde', '5 parça Akçaağaç/Ceviz sap', 'Ibanez Custom Electronics 3-bant EQ', 'PowerSpan Dual Coil manyetikler'],
    inStock: true,
    soundType: 'bass'
  },
  {
    id: 'piyano-1',
    name: 'Yamaha P-145 Dijital Piyano',
    category: 'Piyano',
    price: 26900,
    oldPrice: 29500,
    image: 'https://images.unsplash.com/photo-1520523839898-507121c009a7?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 45,
    badge: 'Popüler',
    badgeColor: 'success',
    description: 'Kompakt gövde tasarımı, GHC ağırlıklı 88 tuş mekanizması ve CFIIIS kuyruklu piyano ses örneği ile gerçekçi piyano deneyimi.',
    features: ['88 Tuş Graded Hammer Compact (GHC)', 'Yamaha CFIIIS Konser Piyano Sesleri', 'Dahili Hoparlör Sistemi (2x7W)', 'Smart Pianist Uygulama Uyumluluğu'],
    inStock: true,
    soundType: 'piano'
  },
  {
    id: 'piyano-2',
    name: 'Roland FP-30X Taşınabilir Sahne Piyanosu',
    category: 'Piyano',
    price: 41200,
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 31,
    badge: 'Profesyonel',
    badgeColor: 'info',
    description: 'SuperNATURAL Piyano ses işlemcisi ve PHA-4 Standart klavye hissi ile hem evde hem sahnede üstün müzikal ifade.',
    features: ['SuperNATURAL Ses Modellemesi', 'PHA-4 Escapement Fildişi Hissi Tuşlar', 'Bluetooth Ses ve MIDI Bağlantısı', '256 Nota Polifoni'],
    inStock: true,
    soundType: 'piano'
  },
  {
    id: 'davul-1',
    name: 'Roland TD-07KV Elektronik Davul Seti',
    category: 'Davul',
    price: 48900,
    oldPrice: 53500,
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 19,
    badge: 'Premium',
    badgeColor: 'danger',
    description: 'Roland çift katmanlı file (mesh) deriler, doğal tepkili ziller ve sessiz ev çalışmaları için gelişmiş TD-07 ses modülü.',
    features: ['Mesh-head trampet ve tom pedleri', 'Dahili Bluetooth ses akışı', 'Gelişmiş koçluk fonksiyonları', 'USB ses ve MIDI çıkışı'],
    inStock: true,
    soundType: 'drum'
  },
  {
    id: 'davul-2',
    name: 'Mapex Tornado Akustik Davul Seti',
    category: 'Davul',
    price: 29800,
    image: 'https://images.unsplash.com/photo-1543443436-13a84b0fefd1?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviewsCount: 14,
    description: 'Ihlamur ağacı gövdeler, çift takviyeli sağlam aksamlar ve komple zil seti ile eksiksiz akustik davul deneyimi.',
    features: ['5 parça davul gövdesi', 'Zil seti (Hi-hat ve Crash-Ride)', 'Sağlam donanım sehpaları', 'Tabure ve bagetler dahil'],
    inStock: true,
    soundType: 'drum'
  },
  {
    id: 'yayli-1',
    name: 'Stentor Student II El Yapımı Keman 4/4',
    category: 'Yaylı',
    price: 11400,
    oldPrice: 12900,
    image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 29,
    badge: 'En Çok Satan',
    badgeColor: 'success',
    description: 'Masif ladin ön kapak ve masif akçaağaç arka gövdesi ile konservatuvar öğrencileri ve keman tutkunları için ideal seçim.',
    features: ['Masif ladin ve akçaağaç ağacı', 'Abanoz klavye ve burgular', 'Kaliteli yay ve reçine dahil', 'Hafif lüks koruma kutusu (case)'],
    inStock: true,
    soundType: 'violin'
  },
  {
    id: 'yayli-2',
    name: 'Cremona SV-175 Master Seri Çello 4/4',
    category: 'Yaylı',
    price: 36500,
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 8,
    badge: 'Özel Seri',
    badgeColor: 'warning',
    description: 'Seçilmiş ağaçlardan elde işlenmiş, rezonansı yüksek, derin ve etkileyici tınıya sahip profesyonel çello.',
    features: ['Elde oyulmuş ladin ve akçaağaç', 'Abanoz burgu ve kuyruk parçası', 'Fransız Aubert köprü', 'Dolgulu taşıma çantası'],
    inStock: false,
    soundType: 'violin'
  },
  {
    id: 'nefesli-1',
    name: 'Yamaha YAS-280 Alto Saksafon',
    category: 'Nefesli',
    price: 52000,
    oldPrice: 56900,
    image: 'https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    reviewsCount: 16,
    badge: 'Japon Kalitesi',
    badgeColor: 'primary',
    description: 'Hassas tuşe mekanizması, dengeli ağırlık dağılımı ve pürüzsüz entonasyonu ile dünya çapında öğretmenlerin ilk tavsiyesi.',
    features: ['Pirinç gövde ve altın lake kaplama', 'Yüksek F# tuşu', 'Özel boyun bağlantı mekanizması', 'Yamaha 4C ağızlık ve lüks kutu'],
    inStock: true,
    soundType: 'flute'
  },
  {
    id: 'nefesli-2',
    name: 'Buffet Crampon Prodige Bb Klarnet',
    category: 'Nefesli',
    price: 24700,
    image: 'https://images.unsplash.com/photo-1573871669414-010dbf73ca84?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 18,
    description: 'Fransız klarnet geleneğinin başlangıç başyapıtı. Akustik polimer gövdesi çatlamaz ve zengin ton üretir.',
    features: ['Dayanıklı ABS reçine gövde', 'Gümüş kaplama perdeler', 'Ayarlanabilir başparmak desteği', 'Hafif ergonomik sırt çantası'],
    inStock: true,
    soundType: 'flute'
  },
  {
    id: 'ekipman-1',
    name: 'Marshall DSL20CR Lambalı Kombo Gitar Amfisi',
    category: 'Ekipman',
    price: 28400,
    oldPrice: 31000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 22,
    badge: 'Efsane Ton',
    badgeColor: 'danger',
    description: 'Saf lambalı Marshall crunch ve gain tonları, 12 inç Celestion hoparlör ve dahili stüdyo kalitesinde reverb.',
    features: ['20 Watt (10W güç azaltma modu)', 'ECC83 ve EL34 tüpler', '12 inç Celestion Seventy-80 hoparlör', 'Ayak pedalı (footswitch) dahil'],
    inStock: true,
    soundType: 'guitar'
  }
];

export const CATEGORIES = ['Tümü', 'Gitar', 'Piyano', 'Davul', 'Yaylı', 'Nefesli', 'Ekipman'] as const;
