import React, { useState } from 'react';

interface NavbarProps {
  currentTab: 'home' | 'products' | 'about' | 'contact';
  onSelectTab: (tab: 'home' | 'products' | 'about' | 'contact') => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'products' | 'about' | 'contact') => {
    onSelectTab(tab);
    setIsOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectTab('products');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow border-bottom border-secondary border-opacity-25">
      <div className="container">
        {/* Brand / Logo */}
        <button
          className="navbar-brand d-flex align-items-center gap-2 border-0 bg-transparent text-white text-decoration-none py-1"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 38, height: 38 }}>
            <i className="bi bi-music-note-beamed fs-5"></i>
          </div>
          <div className="text-start">
            <span className="fw-bold tracking-tight fs-5 d-block lh-1 text-white">Müzik Dükkanım</span>
            <span className="small text-warning text-uppercase fw-semibold" style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}>
              Enes Öztürk
            </span>
          </div>
        </button>

        {/* Mobile Hamburger Toggler */}
        <button
          className="navbar-toggler border-secondary"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Menüyü Aç"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-lg-0' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-lg-3 gap-lg-1">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none px-3 text-start w-100 ${
                  currentTab === 'home' ? 'active text-primary fw-semibold' : 'text-light opacity-75'
                }`}
                onClick={() => handleNavClick('home')}
              >
                <i className="bi bi-house-door me-1"></i> Ana Sayfa
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none px-3 text-start w-100 ${
                  currentTab === 'products' ? 'active text-primary fw-semibold' : 'text-light opacity-75'
                }`}
                onClick={() => handleNavClick('products')}
              >
                <i className="bi bi-grid me-1"></i> Ürünlerimiz
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none px-3 text-start w-100 ${
                  currentTab === 'about' ? 'active text-primary fw-semibold' : 'text-light opacity-75'
                }`}
                onClick={() => handleNavClick('about')}
              >
                <i className="bi bi-info-circle me-1"></i> Hakkımızda
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none px-3 text-start w-100 ${
                  currentTab === 'contact' ? 'active text-primary fw-semibold' : 'text-light opacity-75'
                }`}
                onClick={() => handleNavClick('contact')}
              >
                <i className="bi bi-envelope me-1"></i> İletişim
              </button>
            </li>
          </ul>

          {/* Search bar & Cart button */}
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <div className="input-group input-group-sm">
                <input
                  type="search"
                  className="form-control form-control-sm bg-dark text-light border-secondary placeholder-secondary"
                  placeholder="Enstrüman ara..."
                  aria-label="Enstrüman ara"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  style={{ minWidth: '180px' }}
                />
                <button className="btn btn-outline-light btn-sm" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            <button
              className="btn btn-primary btn-sm position-relative d-flex align-items-center gap-2 px-3 py-1 fw-medium"
              onClick={onOpenCart}
              title="Alışveriş Sepeti"
            >
              <i className="bi bi-cart3 fs-6"></i>
              <span className="d-none d-sm-inline">Sepet</span>
              {cartCount > 0 && (
                <span className="badge rounded-pill bg-danger shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
