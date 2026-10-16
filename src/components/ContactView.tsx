import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Genel Bilgi',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Genel Bilgi', message: '' });
    }, 4000);
  };

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Ana Sayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">İletişim</li>
        </ol>
      </nav>

      <div className="row g-4">
        {/* Contact Form Card */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white h-100">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge bg-primary px-3 py-1">Bize Ulaşın</span>
            </div>
            <h2 className="fw-bold text-dark mb-2">Enes Öztürk & Ekibine Mesaj Gönderin</h2>
            <p className="text-muted small mb-4">
              Enstrüman danışmanlığı, özel siparişler veya servis talepleriniz için aşağıdaki formu doldurabilirsiniz.
            </p>

            {submitted && (
              <div className="alert alert-success alert-dismissible fade show d-flex align-items-center gap-2" role="alert">
                <i className="bi bi-check-circle-fill fs-5"></i>
                <div>
                  <strong>Mesajınız Alındı!</strong> Enes Öztürk ve Müzik Dükkanım ekibi en kısa sürede sizinle iletişime geçecektir.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label fw-semibold small text-dark">
                  Adınız ve Soyadınız <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light text-secondary border-end-0">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="form-control"
                    placeholder="Örn: Ahmet Yılmaz"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="emailAddr" className="form-label fw-semibold small text-dark">
                  E-Posta Adresiniz <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light text-secondary border-end-0">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="emailAddr"
                    required
                    className="form-control"
                    placeholder="ahmet@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subjectSelect" className="form-label fw-semibold small text-dark">
                  Konu
                </label>
                <select
                  id="subjectSelect"
                  className="form-select"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="Genel Bilgi">Genel Bilgi & Sipariş Durumu</option>
                  <option value="Enstrüman Tavsiyesi">Enstrüman Seçim Tavsiyesi</option>
                  <option value="Luthier & Bakım">Luthier & Bakım / Onarım</option>
                  <option value="Toptan & Okul">Müzik Kursları & Toptan Alım</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="msgContent" className="form-label fw-semibold small text-dark">
                  Mesajınız <span className="text-danger">*</span>
                </label>
                <textarea
                  id="msgContent"
                  required
                  rows={4}
                  className="form-control"
                  placeholder="Hangi enstrüman hakkında bilgi almak istiyorsunuz?.."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-send-fill"></i> Mesajı Gönder
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-dark text-white h-100">
            <h4 className="fw-bold mb-4 text-warning">
              <i className="bi bi-geo-alt-fill me-2"></i> Mağaza & Atölye
            </h4>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                  <i className="bi bi-geo-alt fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-light">Adres</h6>
                  <p className="text-secondary small mb-0">
                    İstiklal Caddesi No: 142/B, Müzisyenler Pasajı<br />
                    Beyoğlu / İstanbul, Türkiye
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                  <i className="bi bi-telephone fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-light">Telefon & WhatsApp</h6>
                  <p className="text-secondary small mb-0">
                    +90 (212) 555 43 21<br />
                    +90 (532) 123 45 67 (WhatsApp Danışma)
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                  <i className="bi bi-clock fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-light">Çalışma Saatleri</h6>
                  <p className="text-secondary small mb-0">
                    Pazartesi - Cumartesi: 09:30 - 20:00<br />
                    Pazar: 11:00 - 18:00
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                  <i className="bi bi-envelope-at fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-light">E-Posta</h6>
                  <p className="text-secondary small mb-0">
                    iletisim@muzikdukkanim.com<br />
                    enes.ozturk@muzikdukkanim.com
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-4 border-secondary" />

            <div>
              <h6 className="fw-bold text-light mb-2">Bizi Sosyal Medyada Takip Edin</h6>
              <div className="d-flex gap-2">
                <a href="#instagram" className="btn btn-outline-light btn-sm rounded-circle p-2" style={{ width: 36, height: 36 }}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#youtube" className="btn btn-outline-light btn-sm rounded-circle p-2" style={{ width: 36, height: 36 }}>
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#spotify" className="btn btn-outline-light btn-sm rounded-circle p-2" style={{ width: 36, height: 36 }}>
                  <i className="bi bi-spotify"></i>
                </a>
                <a href="#facebook" className="btn btn-outline-light btn-sm rounded-circle p-2" style={{ width: 36, height: 36 }}>
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
