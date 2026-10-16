import React, { useState } from 'react';
import { Product } from '../data/products';
import { playInstrumentPreview } from '../utils/audioPlayer';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingSound(true);
    playInstrumentPreview(product.soundType);
    setTimeout(() => {
      setIsPlayingSound(false);
    }, 1200);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div className="card h-100 product-card shadow-sm border-0 d-flex flex-column">
      {/* Image container with uniform height and badge */}
      <div className="product-img-wrapper position-relative">
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="position-absolute top-0 start-0 m-2 d-flex flex-column gap-1">
          {product.badge && (
            <span className={`badge bg-${product.badgeColor || 'primary'} shadow-sm`}>
              {product.badge}
            </span>
          )}
          <span className="badge bg-dark bg-opacity-75 text-light text-uppercase font-monospace" style={{ fontSize: '0.65rem' }}>
            {product.category}
          </span>
        </div>

        {/* Stock status badge */}
        {!product.inStock && (
          <div className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-secondary">Tükendi</span>
          </div>
        )}

        {/* Sound preview button on image */}
        <button
          type="button"
          onClick={handlePlaySound}
          className={`btn btn-sm position-absolute bottom-0 end-0 m-2 rounded-pill shadow-sm d-flex align-items-center gap-1 ${
            isPlayingSound ? 'btn-warning text-dark' : 'btn-light text-dark bg-white'
          }`}
          title="Enstrüman Ses Tonunu Dinle"
          style={{ fontSize: '0.75rem', fontWeight: 600 }}
        >
          <i className={`bi ${isPlayingSound ? 'bi-volume-up-fill' : 'bi-headphones'}`}></i>
          <span>{isPlayingSound ? 'Çalıyor...' : 'Sesi Dinle'}</span>
        </button>
      </div>

      {/* Card Body */}
      <div className="card-body p-3 d-flex flex-column justify-content-between flex-grow-1">
        <div>
          {/* Star rating */}
          <div className="d-flex align-items-center gap-1 mb-2">
            <div className="text-warning small">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`bi bi-star${i < Math.floor(product.rating) ? '-fill' : i < product.rating ? '-half' : ''}`}
                ></i>
              ))}
            </div>
            <span className="text-muted small fw-semibold">({product.reviewsCount})</span>
          </div>

          {/* Title with standardized height */}
          <h5
            className="card-title fs-6 fw-bold text-dark mb-2"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.5rem',
              lineHeight: '1.25rem',
            }}
            title={product.name}
          >
            {product.name}
          </h5>

          {/* Description with standardized height */}
          <p
            className="card-text text-muted small mb-3"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.4rem',
              lineHeight: '1.2rem',
            }}
          >
            {product.description}
          </p>
        </div>

        {/* Price & Action Area */}
        <div className="pt-2 border-top border-light-subtle">
          <div className="d-flex align-items-baseline justify-content-between mb-3">
            <div>
              <span className="fs-5 fw-bolder text-primary">
                {product.price.toLocaleString('tr-TR')} ₺
              </span>
              {product.oldPrice && (
                <span className="text-muted text-decoration-line-through small ms-2">
                  {product.oldPrice.toLocaleString('tr-TR')} ₺
                </span>
              )}
            </div>
            {product.oldPrice && (
              <span className="badge bg-danger-subtle text-danger border border-danger-subtle small">
                %{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)} İndirim
              </span>
            )}
          </div>

          <div className="row g-2">
            <div className="col-4">
              <button
                type="button"
                onClick={() => onViewDetails(product)}
                className="btn btn-outline-secondary btn-sm w-100 fw-medium"
                title="Teknik Detaylar"
              >
                <i className="bi bi-eye"></i> İncele
              </button>
            </div>
            <div className="col-8">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="btn btn-primary btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-1 shadow-sm"
              >
                <i className="bi bi-cart-plus"></i>
                <span>{product.inStock ? 'Sepete Ekle' : 'Tükendi'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
