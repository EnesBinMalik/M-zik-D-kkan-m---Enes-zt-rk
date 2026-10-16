import React, { useState } from 'react';

export const AboutView: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      q: 'Enstrümanlar kargoda hasar görmemesi için nasıl paketleniyor?',
      a: 'Tüm müzik aletlerimiz, özel darbe emici hava yastıkları, çift katmanlı sert koruma kolileri ve su geçirmez kılıflarla luthier ekibimiz tarafından özenle paketlenir. Kargoda oluşabilecek her türlü duruma karşı sigortalıdır.',
    },
    {
      q: 'Satın aldığım enstrüman akortlu ve ayarları yapılmış olarak mı geliyor?',
      a: 'Evet! Atölyemizde Luthier Enes Öztürk ve uzman teknisyenlerimiz her enstrümanı göndermeden önce sap ayarı (truss rod), tel yüksekliği (action), köprü ayarı ve tam akort kontrolünden geçirir. Kutusundan çıkarıp hemen çalmaya başlayabilirsiniz.',
    },
    {
      q: 'Başlangıç için hangi gitarı veya piyanoyu önerirsiniz?',
      a: 'Klasik gitar ile başlamak isteyenlere naylon telli yumuşak tuşeli Yamaha C40 modelimizi; piyano için ise ağırlıklı tuş hissi ve kulaklık desteği sunan Yamaha P-145 dijital piyanoyu gönül rahatlığıyla tavsiye ediyoruz.',
    },
    {
      q: 'Garanti süresi ve teknik servis imkanları nelerdir?',
      a: 'Sitemizden aldığınız tüm sıfır ürünler 2 yıl resmi distribütör garantisine sahiptir. Ayrıca ömür boyu ücretsiz ilk tel değişimi ve rutin luthier kontrolü servisimizden yararlanabilirsiniz.',
    },
  ];

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Ana Sayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">Hakkımızda</li>
        </ol>
      </nav>

      {/* Main Card Wrapper (as required: "Hakkımızda sayfasını da bir card yapısı içine alın") */}
      <div className="card shadow border-0 rounded-4 overflow-hidden mb-5 bg-white">
        {/* Card Header with Banner */}
        <div className="position-relative bg-dark text-white p-5">
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80"
              alt="Müzik Sahnesi"
              className="w-100 h-100 object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="position-relative z-1">
            <span className="badge bg-warning text-dark text-uppercase px-3 py-1 mb-2 fw-bold">
              Hikayemiz & Tutkumuz
            </span>
            <h1 className="display-5 fw-bold text-white mb-2">Hakkımızda</h1>
            <p className="lead text-light opacity-90 mb-0" style={{ maxWidth: '720px' }}>
              Müziği sadece bir hobi değil, bir yaşam tarzı olarak görenler için kurulan Müzik Dükkanım'ın ilham veren yolculuğu.
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body p-4 p-lg-5">
          {/* Founder Section */}
          <div className="row align-items-center g-4 mb-5 pb-4 border-bottom">
            <div className="col-lg-4 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Enes Öztürk"
                  className="rounded-4 shadow img-fluid border border-3 border-light"
                  style={{ width: '280px', height: '320px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-n2 bg-dark text-white px-3 py-1 rounded-pill small fw-semibold shadow text-nowrap">
                  Kurucu & Luthier
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-quote text-primary display-4 lh-1"></i>
                <h3 className="fw-bold text-dark mb-0">Enes Öztürk'ün Mesajı</h3>
              </div>
              <p className="text-secondary fs-6 leading-relaxed mb-3">
                "Müzik Dükkanım, 2021 yılında müziğin evrensel birleştirici gücüne inanan küçük bir atölyede filizlendi. 
                Amacımız her seviyeden müzisyene; ilk akorunu basacak heyecanlı bir gençten, sahnelerin tozunu yutan ustalara kadar 
                en doğru tınıyı, en dayanıklı enstrümanı ve samimi bir danışmanlığı ulaştırmaktı."
              </p>
              <p className="text-secondary fs-6 leading-relaxed mb-4">
                "Bugün binlerce enstrümanı akort edip sahipleriyle buluşturmanın gururunu yaşıyoruz. 
                Sitemizdeki her bir ürün, bizzat benim ve luthier ekibimin titiz kontrolünden geçerek kapınıza ulaşır."
              </p>

              {/* Founder Signature Area */}
              <div className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light border">
                <div>
                  <div className="signature-font fs-3 text-primary fw-bold">
                    Enes Öztürk
                  </div>
                  <div className="small text-muted">Müzik Dükkanım Kurucusu & Genel Müdürü</div>
                </div>
                <div className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2">
                  <i className="bi bi-shield-check me-1"></i> %100 Orijinal Ürün İmzası
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Mini Cards (Bootstrap Grid) */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 border-0 bg-light-subtle rounded-3 p-4 shadow-sm border-start border-primary border-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-primary text-white rounded-3 p-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-compass fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-0 text-dark">Misyonumuz</h4>
                </div>
                <p className="text-secondary mb-0">
                  Türkiye'deki tüm müzikseverlere dünya standartlarında orijinal enstrümanları, 
                  ulaşılabilir fiyatlarla ve dürüst luthier danışmanlığı ile sunmak; 
                  müzik eğitimine ve sanatçı gelişimine her adımda destek olmak.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 bg-light-subtle rounded-3 p-4 shadow-sm border-start border-warning border-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-warning text-dark rounded-3 p-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-0 text-dark">Vizyonumuz</h4>
                </div>
                <p className="text-secondary mb-0">
                  Yenilikçi teknolojilerle donatılmış, Türkiye'nin ve bölgenin en güvenilen, 
                  müşteri memnuniyeti en yüksek enstrüman ve müzik teknolojileri merkezi haline gelmek.
                </p>
              </div>
            </div>
          </div>

          {/* Values / Neden Müzik Dükkanım? */}
          <div className="mb-5">
            <h4 className="fw-bold text-dark text-center mb-4">
              Neden Müzik Dükkanım'ı Seçmelisiniz?
            </h4>
            <div className="row row-cols-1 row-cols-md-4 g-3">
              <div className="col">
                <div className="card text-center h-100 p-3 border rounded-3 bg-white shadow-none">
                  <i className="bi bi-award text-primary fs-1 mb-2"></i>
                  <h6 className="fw-bold text-dark">Orijinal Distribütör</h6>
                  <p className="text-muted small mb-0">Fender, Yamaha, Roland, Ibanez yetkili bayisi.</p>
                </div>
              </div>
              <div className="col">
                <div className="card text-center h-100 p-3 border rounded-3 bg-white shadow-none">
                  <i className="bi bi-sliders text-warning fs-1 mb-2"></i>
                  <h6 className="fw-bold text-dark">Ücretsiz Setup</h6>
                  <p className="text-muted small mb-0">Her gitar göndermeden önce profesyonelce ayarlanır.</p>
                </div>
              </div>
              <div className="col">
                <div className="card text-center h-100 p-3 border rounded-3 bg-white shadow-none">
                  <i className="bi bi-box-seam text-success fs-1 mb-2"></i>
                  <h6 className="fw-bold text-dark">Zırhlı Paketleme</h6>
                  <p className="text-muted small mb-0">Darbe emici özel kutularla hasarsız teslimat.</p>
                </div>
              </div>
              <div className="col">
                <div className="card text-center h-100 p-3 border rounded-3 bg-white shadow-none">
                  <i className="bi bi-headset text-danger fs-1 mb-2"></i>
                  <h6 className="fw-bold text-dark">7/24 Müzisyen Desteği</h6>
                  <p className="text-muted small mb-0">Enstrüman seçimi ve bakımı için uzman kadro.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bootstrap Accordion: Sıkça Sorulan Sorular */}
          <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="fw-bold text-dark mb-0">
                <i className="bi bi-question-circle text-primary me-2"></i>
                Sıkça Sorulan Sorular (SSS)
              </h4>
              <span className="badge bg-secondary-subtle text-secondary">Bootstrap Accordion</span>
            </div>

            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => {
                const isOpen = activeAccordion === index;
                return (
                  <div key={index} className="accordion-item mb-2 border rounded-3 overflow-hidden">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${!isOpen ? 'collapsed' : ''} fw-semibold`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
                      <div className="accordion-body text-secondary small bg-light">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-footer bg-light p-4 text-center border-top">
          <p className="text-muted small mb-0">
            © {new Date().getFullYear()} Müzik Dükkanım - Tüm hakları saklıdır. Kurucu ve Baş Luthier: <strong>Enes Öztürk</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
