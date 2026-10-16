import React, { useState } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [coupon, setCoupon] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 1000 || subtotal === 0 ? 0 : 79;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = coupon.trim().toUpperCase();
    if (code === 'ENES10' || code === 'KODLUYORUZ' || code === 'BOOTSTRAP') {
      setDiscountPercent(10);
    } else {
      setCouponError('Geçersiz indirim kodu. "ENES10" veya "KODLUYORUZ" deneyin.');
    }
  };

  const handleCompleteOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setIsOrderPlaced(false);
      onClose();
    }, 2500);
  };

  return (
    <>
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1060 }}
        onClick={onClose}
      ></div>

      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{ zIndex: 1065 }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content shadow-lg border-0 rounded-4">
            {/* Header */}
            <div className="modal-header bg-dark text-white px-4 py-3">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-cart3 fs-5 text-warning"></i>
                <h5 className="modal-title fw-bold mb-0">Alışveriş Sepetim</h5>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
                aria-label="Kapat"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body p-4">
              {isOrderPlaced ? (
                <div className="text-center py-5">
                  <div className="display-1 text-success mb-3">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h3 className="fw-bold text-dark">Siparişiniz Başarıyla Alındı!</h3>
                  <p className="text-muted">
                    Enes Öztürk ve Müzik Dükkanım ekibi enstrümanınızı özenle akort edip kargoya hazırlıyor.
                  </p>
                  <div className="spinner-border text-primary mt-3" role="status">
                    <span className="visually-hidden">Yönlendiriliyor...</span>
                  </div>
                </div>
              ) : items.length === 0 ? (
                <div className="text-center py-5">
                  <div className="display-3 text-secondary opacity-50 mb-3">
                    <i className="bi bi-bag-x"></i>
                  </div>
                  <h5 className="fw-bold text-dark">Sepetiniz Boş</h5>
                  <p className="text-muted small">
                    Müzik aletlerimizi inceleyerek sepetinizi doldurabilirsiniz.
                  </p>
                  <button onClick={onClose} className="btn btn-primary mt-2">
                    Alışverişe Başla
                  </button>
                </div>
              ) : (
                <div className="row g-4">
                  {/* Item List */}
                  <div className="col-lg-7">
                    <div className="list-group list-group-flush border rounded-3 p-2 bg-white">
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="list-group-item d-flex align-items-center gap-3 py-3 border-bottom"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="rounded-3 object-cover shadow-sm"
                            style={{ width: 64, height: 64, objectFit: 'cover' }}
                          />
                          <div className="flex-grow-1 min-w-0">
                            <h6 className="mb-1 text-truncate fw-bold text-dark fs-6" title={item.product.name}>
                              {item.product.name}
                            </h6>
                            <div className="text-primary fw-semibold small">
                              {item.product.price.toLocaleString('tr-TR')} ₺
                            </div>
                          </div>

                          {/* Quantity control */}
                          <div className="d-flex align-items-center border rounded-pill px-2 py-1 bg-light">
                            <button
                              type="button"
                              className="btn btn-sm btn-link p-0 text-dark"
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <span className="px-2 fw-bold small">{item.quantity}</span>
                            <button
                              type="button"
                              className="btn btn-sm btn-link p-0 text-dark"
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>

                          {/* Delete item */}
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm rounded-circle p-1"
                            onClick={() => onRemoveItem(item.product.id)}
                            title="Ürünü Çıkar"
                            style={{ width: 28, height: 28 }}
                          >
                            <i className="bi bi-trash small"></i>
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Promo code form */}
                    <div className="mt-3">
                      <form onSubmit={handleApplyCoupon} className="d-flex gap-2">
                        <input
                          type="text"
                          className="form-control form-control-sm text-uppercase"
                          placeholder="İndirim Kodu (örn: ENES10)"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button type="submit" className="btn btn-dark btn-sm text-nowrap">
                          Kupon Uygula
                        </button>
                      </form>
                      {discountPercent > 0 && (
                        <div className="text-success small mt-1">
                          <i className="bi bi-check-circle me-1"></i> %{discountPercent} İndirim Kuponu Uygulandı!
                        </div>
                      )}
                      {couponError && (
                        <div className="text-danger small mt-1">
                          <i className="bi bi-exclamation-triangle me-1"></i> {couponError}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="col-lg-5">
                    <div className="card bg-light border-0 rounded-3 p-3 shadow-sm">
                      <h6 className="fw-bold mb-3 text-dark">Sipariş Özeti</h6>
                      <div className="d-flex justify-content-between mb-2 small text-secondary">
                        <span>Ara Toplam:</span>
                        <span>{subtotal.toLocaleString('tr-TR')} ₺</span>
                      </div>
                      {discountPercent > 0 && (
                        <div className="d-flex justify-content-between mb-2 small text-success">
                          <span>Kupon İndirimi (%{discountPercent}):</span>
                          <span>-{discountAmount.toLocaleString('tr-TR')} ₺</span>
                        </div>
                      )}
                      <div className="d-flex justify-content-between mb-2 small text-secondary">
                        <span>Kargo Ücreti:</span>
                        <span>{shipping === 0 ? <strong className="text-success">Ücretsiz</strong> : `${shipping} ₺`}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="d-flex justify-content-between mb-4 fs-5 fw-bold text-dark">
                        <span>Toplam Tutar:</span>
                        <span className="text-primary">{total.toLocaleString('tr-TR')} ₺</span>
                      </div>

                      <button
                        onClick={handleCompleteOrder}
                        className="btn btn-success w-100 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                      >
                        <i className="bi bi-lock-fill"></i> Siparişi Onayla
                      </button>

                      <div className="text-center mt-3 text-muted small">
                        <i className="bi bi-shield-check text-success me-1"></i> 256-bit SSL Güvenli Ödeme
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
