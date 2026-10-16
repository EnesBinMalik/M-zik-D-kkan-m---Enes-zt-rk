import React from 'react';

interface FooterProps {
  onSelectTab: (tab: 'home' | 'products' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                <i className="bi bi-music-note-beamed"></i>
              </div>
              <h5 className="fw-bold mb-0 text-white">Müzik Dükkanım</h5>
            </div>
            <p className="text-secondary small mb-3">
              Türkiye'nin en seçkin müzik aletleri, ses sistemleri ve profesyonel luthier bakım hizmetleri.
              Müziğin ritmini bizimle yakalayın.
            </p>
            <div className="d-inline-block p-2 rounded bg-secondary bg-opacity-25 border border-secondary border-opacity-50 small text-warning">
              <span className="signature-font fs-6 fw-bold">Enes Öztürk</span> imzalı özel müzik koleksiyonu
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Hızlı Menü
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li>
                <button onClick={() => onSelectTab('home')} className="btn btn-link text-secondary text-decoration-none p-0">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('products')} className="btn btn-link text-secondary text-decoration-none p-0">
                  Ürünlerimiz
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('about')} className="btn btn-link text-secondary text-decoration-none p-0">
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contact')} className="btn btn-link text-secondary text-decoration-none p-0">
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Kategoriler
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 text-secondary">
              <li>Elektro & Klasik Gitar</li>
              <li>Dijital & Akustik Piyano</li>
              <li>Elektronik & Akustik Davul</li>
              <li>Keman & Viyolonsel</li>
              <li>Saksafon & Klarnet</li>
              <li>Lambalı Amfiler</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Müzisyen Bülteni
            </h6>
            <p className="text-secondary small mb-3">
              Yeni gelen enstrümanlar, luthier bakım ipuçları ve özel indirimlerden ilk siz haberdar olun.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Bültene başarıyla abone oldunuz! Teşekkür ederiz.'); }} className="d-flex gap-2">
              <input
                type="email"
                required
                className="form-control form-control-sm bg-dark text-light border-secondary"
                placeholder="E-posta adresiniz..."
              />
              <button type="submit" className="btn btn-primary btn-sm px-3 fw-semibold">
                Kaydol
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 small text-secondary">
          <div>
            © {new Date().getFullYear()} <strong>Müzik Dükkanım</strong> — Tasarım & Geliştirme: <span className="text-warning fw-semibold">Enes Öztürk</span> (Kodluyoruz Bootstrap Ödevi)
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-secondary">Bootstrap 5</span>
            <span className="badge bg-primary">React 19</span>
            <span>Tüm Hakları Saklıdır.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
