import React from 'react';

interface JumbotronProps {
  onExploreProducts: () => void;
  onExploreAbout: () => void;
}

export const Jumbotron: React.FC<JumbotronProps> = ({
  onExploreProducts,
  onExploreAbout,
}) => {
  return (
    <div className="jumbotron-custom p-5 mb-5 shadow-lg position-relative text-white">
      <div className="jumbotron-pattern"></div>
      
      <div className="row align-items-center position-relative z-1 g-4">
        <div className="col-lg-8">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-light bg-opacity-10 text-warning text-xs fw-semibold mb-3 border border-warning border-opacity-25">
            <i className="bi bi-patch-check-fill"></i>
            <span>Enes Öztürk Güvencesiyle Türkiye'nin Müzik Mağazası</span>
          </div>

          <h1 className="display-4 fw-bold lh-sm mb-3">
            Müziğin Ritmini <span className="text-warning">Ruhunda</span> Hisset!
          </h1>

          <p className="lead fs-5 text-light opacity-90 mb-4" style={{ maxWidth: '680px' }}>
            <strong>Müzik Dükkanım</strong>'a hoş geldiniz! Sitemizde elektro gitarlardan kuyruklu piyanolara, 
            el yapımı kemanlardan stüdyo ekipmanlarına kadar aradığınız tüm kaliteli müzik aletlerini 
            en uygun fiyatlar ve uzman tavsiyesiyle bulabilirsiniz.
          </p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <button
              onClick={onExploreProducts}
              className="btn btn-warning btn-lg px-4 py-2 fw-bold text-dark shadow-sm d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-bag-check-fill"></i> Ürünlerimizi İnceleyin
            </button>
            <button
              onClick={onExploreAbout}
              className="btn btn-outline-light btn-lg px-4 py-2 fw-medium d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-file-earmark-person"></i> Hakkımızda
            </button>
          </div>

          {/* Mini badges inside hero */}
          <div className="d-flex flex-wrap gap-4 pt-3 border-top border-light border-opacity-20 text-white-50 small">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-truck text-warning fs-5"></i>
              <span className="text-light">Aynı Gün Ücretsiz Kargo</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-shield-check text-warning fs-5"></i>
              <span className="text-light">2 Yıl Distribütör Garantisi</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-wrench-adjustable text-warning fs-5"></i>
              <span className="text-light">Ücretsiz Luthier Akort & Ayar</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-center d-none d-lg-block">
          <div className="position-relative d-inline-block">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80"
              alt="Müzik Enstrümanları"
              className="img-fluid rounded-4 shadow-lg border border-2 border-secondary border-opacity-25"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
            />
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-n3 bg-dark text-white px-3 py-1 rounded-pill shadow small border border-secondary border-opacity-50 text-nowrap">
              <i className="bi bi-star-fill text-warning me-1"></i> %100 Orijinal Ürünler
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
