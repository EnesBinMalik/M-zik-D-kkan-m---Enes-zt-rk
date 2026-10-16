import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, Product } from './data/products';
import { Navbar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartModal, CartItem } from './components/CartModal';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'products' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  
  // Modals & Cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Toast notification for cart addition
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`"${product.name}" sepete eklendi!`);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#E9ECEF' }}>
      {/* Koyu Renk Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (currentTab !== 'products') {
            setCurrentTab('products');
          }
        }}
      />

      {/* Main Content Area with #E9ECEF background */}
      <main className="flex-grow-1">
        {currentTab === 'home' && (
          <div className="container py-4">
            {/* Jumbotron - Ana Sayfa Açıklaması */}
            <Jumbotron
              onExploreProducts={() => {
                setCurrentTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreAbout={() => {
                setCurrentTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Sitemizde Bulunan Müzik Aletleri - Hızlı Kategori Kartları */}
            <div className="card shadow-sm border-0 rounded-4 p-4 mb-5 bg-white">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-4">
                <div>
                  <span className="badge bg-primary text-uppercase px-3 py-1 mb-1">Koleksiyonlar</span>
                  <h3 className="fw-bold text-dark mb-0">Müzik Aleti Kategorilerimiz</h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('Tümü');
                    setCurrentTab('products');
                  }}
                  className="btn btn-outline-primary btn-sm fw-semibold"
                >
                  Tümünü Gör ({PRODUCTS.length} Enstrüman) &rarr;
                </button>
              </div>

              <div className="row g-3">
                {[
                  { name: 'Gitar', icon: 'bi-guitar', count: PRODUCTS.filter((p) => p.category === 'Gitar').length, desc: 'Elektro, Klasik ve Bas Gitarlar' },
                  { name: 'Piyano', icon: 'bi-music-note', count: PRODUCTS.filter((p) => p.category === 'Piyano').length, desc: 'Dijital ve Sahne Piyanoları' },
                  { name: 'Davul', icon: 'bi-disc', count: PRODUCTS.filter((p) => p.category === 'Davul').length, desc: 'Akustik & Elektronik Davul Setleri' },
                  { name: 'Yaylı', icon: 'bi-soundwave', count: PRODUCTS.filter((p) => p.category === 'Yaylı').length, desc: 'El Yapımı Keman ve Çellolar' },
                  { name: 'Nefesli', icon: 'bi-wind', count: PRODUCTS.filter((p) => p.category === 'Nefesli').length, desc: 'Saksafon ve Profesyonel Klarnet' },
                  { name: 'Ekipman', icon: 'bi-boombox', count: PRODUCTS.filter((p) => p.category === 'Ekipman').length, desc: 'Lambalı Amfi ve Aksesuarlar' },
                ].map((cat) => (
                  <div key={cat.name} className="col-6 col-md-4 col-lg-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setCurrentTab('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="card h-100 text-center p-3 border rounded-3 bg-light text-decoration-none transition-all hover:shadow w-100"
                    >
                      <div className="bg-white rounded-circle shadow-sm mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                        <i className={`bi ${cat.icon} fs-4 text-primary`}></i>
                      </div>
                      <h6 className="fw-bold text-dark mb-1">{cat.name}</h6>
                      <span className="badge bg-secondary-subtle text-secondary small">{cat.count} Model</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Öne Çıkan Ürünler Bölümü (Grid Sisteminde Eşit Boyutlu Card'lar) */}
            <div className="mb-5">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h3 className="fw-bold text-dark mb-1">
                    <i className="bi bi-fire text-danger me-2"></i>
                    Öne Çıkan Ürünlerimiz
                  </h3>
                  <p className="text-secondary small mb-0">
                    Enes Öztürk'ün müzisyenler için özel olarak seçtiği popüler enstrümanlar.
                  </p>
                </div>
                <button
                  onClick={() => setCurrentTab('products')}
                  className="btn btn-dark btn-sm fw-medium"
                >
                  Tüm Ürünler <i className="bi bi-arrow-right"></i>
                </button>
              </div>

              {/* Grid System with uniform cards */}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {PRODUCTS.slice(0, 6).map((product) => (
                  <div key={product.id} className="col">
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewDetails={(prod) => setSelectedProduct(prod)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Enes Öztürk Özel Atölye Banner Kartı */}
            <div className="card shadow-sm border-0 rounded-4 p-4 p-lg-5 bg-dark text-white mb-5 position-relative overflow-hidden">
              <div className="row align-items-center g-4 position-relative z-1">
                <div className="col-lg-8">
                  <span className="badge bg-warning text-dark fw-bold mb-2">Luthier Atölyesi</span>
                  <h3 className="display-6 fw-bold text-white mb-3">
                    Enstrümanınız Güvenilir Ellerde
                  </h3>
                  <p className="text-light opacity-75 mb-4" style={{ maxWidth: '600px' }}>
                    Müzik Dükkanım'dan satın aldığınız tüm gitarlar, kemanlar ve nefesliler 
                    <strong> Enes Öztürk</strong>'ün atölyesinde ücretsiz hassas sap, köprü ve perde tesviyesinden geçer. 
                    İlk akorunuzu basarken farkı hissedeceksiniz!
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <button
                      onClick={() => setCurrentTab('about')}
                      className="btn btn-warning fw-bold text-dark px-4"
                    >
                      Atölyemizi Keşfedin
                    </button>
                    <button
                      onClick={() => setCurrentTab('contact')}
                      className="btn btn-outline-light px-4"
                    >
                      Bize Danışın
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 text-center d-none d-lg-block">
                  <div className="p-4 rounded-4 bg-secondary bg-opacity-25 border border-secondary border-opacity-50">
                    <i className="bi bi-music-note-list display-1 text-warning mb-2"></i>
                    <h5 className="fw-bold mb-1">Müzik Aleti Satış Sitesi</h5>
                    <p className="text-white-50 small mb-0">Kodluyoruz Bootstrap Ödevi - Enes Öztürk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'products' && (
          <div className="container py-4">
            {/* Header / Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <button onClick={() => setCurrentTab('home')} className="btn btn-link p-0 text-decoration-none">
                    Ana Sayfa
                  </button>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Ürünlerimiz</li>
              </ol>
            </nav>

            {/* Page Title & Stats */}
            <div className="card shadow-sm border-0 rounded-4 p-4 mb-4 bg-white">
              <div className="row align-items-center g-3">
                <div className="col-md-6">
                  <span className="badge bg-primary text-uppercase px-3 py-1 mb-1">Katalog</span>
                  <h2 className="fw-bold text-dark mb-1">Ürünlerimiz</h2>
                  <p className="text-secondary small mb-0">
                    En kaliteli müzik enstrümanları, Bootstrap Card yapısı ve Grid sistemiyle listelenmektedir.
                  </p>
                </div>
                <div className="col-md-6 text-md-end">
                  <span className="badge bg-secondary-subtle text-secondary fs-6 px-3 py-2 border">
                    Toplam <strong className="text-dark">{filteredProducts.length}</strong> ürün bulundu
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Bar & Controls */}
            <div className="card shadow-sm border-0 rounded-4 p-3 mb-4 bg-white">
              <div className="row g-3 align-items-center">
                {/* Category Pills */}
                <div className="col-lg-7">
                  <div className="d-flex flex-wrap gap-1">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`btn btn-sm rounded-pill px-3 fw-medium ${
                          selectedCategory === category
                            ? 'btn-dark text-white shadow-sm'
                            : 'btn-outline-secondary'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search & Sort */}
                <div className="col-lg-5">
                  <div className="row g-2">
                    <div className="col-7">
                      <div className="input-group input-group-sm">
                        <span className="input-group-text bg-light text-secondary">
                          <i className="bi bi-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Filtrele veya ara..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => setSearchQuery('')}
                          >
                            <i className="bi bi-x"></i>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="col-5">
                      <select
                        className="form-select form-select-sm"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                      >
                        <option value="featured">Öne Çıkanlar</option>
                        <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                        <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                        <option value="rating">En Yüksek Puan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid (Row & Col Grid system with identical sized cards) */}
            {filteredProducts.length === 0 ? (
              <div className="card shadow-sm border-0 rounded-4 p-5 text-center bg-white my-4">
                <i className="bi bi-search text-secondary display-3 opacity-50 mb-3"></i>
                <h4 className="fw-bold text-dark">Aradığınız kriterlere uygun ürün bulunamadı.</h4>
                <p className="text-secondary small mb-4">
                  Lütfen arama teriminizi değiştirin veya kategori filtresini sıfırlayın.
                </p>
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('Tümü');
                      setSearchQuery('');
                    }}
                    className="btn btn-primary"
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col">
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      onViewDetails={(prod) => setSelectedProduct(prod)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {currentTab === 'about' && <AboutView />}

        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={(tab) => {
        setCurrentTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          className="position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 1100 }}
        >
          <div className="toast show align-items-center text-white bg-dark border-0 shadow-lg rounded-3">
            <div className="d-flex">
              <div className="toast-body d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span>{toastMessage}</span>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setToastMessage(null)}
                aria-label="Kapat"
              ></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
