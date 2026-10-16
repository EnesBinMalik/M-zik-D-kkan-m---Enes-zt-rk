import React, { useState } from 'react';
import { Product } from '../data/products';
import { playInstrumentPreview } from '../utils/audioPlayer';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!product) return null;

  const handlePlay = () => {
    setIsPlaying(true);
    playInstrumentPreview(product.soundType);
    setTimeout(() => setIsPlaying(false), 1400);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1050 }}
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{ zIndex: 1055 }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow-lg border-0 rounded-4 overflow-hidden">
            {/* Modal Header */}
            <div className="modal-header bg-dark text-white px-4 py-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-primary text-uppercase">{product.category}</span>
                <h5 className="modal-title fs-5 fw-bold text-white mb-0">{product.name}</h5>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
                aria-label="Kapat"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4">
              <div className="row g-4">
                <div className="col-md-6 text-center">
                  <div className="position-relative rounded-3 overflow-hidden bg-light shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid rounded-3"
                      style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
                    />
                    {product.badge && (
                      <span className={`badge bg-${product.badgeColor || 'primary'} position-absolute top-0 start-0 m-3 shadow`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Play sound trigger */}
                  <div className="mt-3">
                    <button
                      onClick={handlePlay}
                      className={`btn w-100 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm ${
                        isPlaying ? 'btn-warning text-dark' : 'btn-outline-dark'
                      }`}
                    >
                      <i className={`bi ${isPlaying ? 'bi-volume-up-fill' : 'bi-music-note-beamed'}`}></i>
                      <span>{isPlaying ? 'Canlı Akort / Ton Çalınıyor...' : 'Canlı Enstrüman Sesini Dinle'}</span>
                    </button>
                    <small className="text-muted d-block mt-1">Web Audio API ile modellenmiş gerçekçi ses tonu</small>
                  </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="text-warning">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={`bi bi-star${i < Math.floor(product.rating) ? '-fill' : i < product.rating ? '-half' : ''}`}
                          ></i>
                        ))}
                      </div>
                      <span className="fw-semibold text-dark">{product.rating} / 5.0</span>
                      <span className="text-muted small">({product.reviewsCount} müşteri değerlendirmesi)</span>
                    </div>

                    <h4 className="fw-bold text-dark mb-2">{product.name}</h4>
                    <p className="text-secondary leading-relaxed mb-4">{product.description}</p>

                    <h6 className="fw-bold text-dark mb-2">
                      <i className="bi bi-gear me-1 text-primary"></i> Öne Çıkan Özellikler:
                    </h6>
                    <ul className="list-group list-group-flush mb-4">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="list-group-item px-0 py-1 bg-transparent text-secondary small d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-top">
                    <div className="d-flex align-items-baseline gap-2 mb-3">
                      <span className="display-6 fw-bold text-primary">
                        {product.price.toLocaleString('tr-TR')} ₺
                      </span>
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through fs-5">
                          {product.oldPrice.toLocaleString('tr-TR')} ₺
                        </span>
                      )}
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-secondary px-3"
                        onClick={onClose}
                      >
                        Vazgeç
                      </button>
                      <button
                        className="btn btn-primary fw-bold flex-grow-1 d-flex align-items-center justify-content-center gap-2 shadow"
                        disabled={!product.inStock}
                        onClick={() => {
                          onAddToCart(product);
                          onClose();
                        }}
                      >
                        <i className="bi bi-cart-plus-fill fs-5"></i>
                        <span>{product.inStock ? 'Hemen Sepete Ekle' : 'Stokta Kalmadı'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
