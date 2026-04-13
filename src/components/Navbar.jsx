import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoUrl } from '../data/localImages';

const navLinks = [
  { name: 'الرئيسية', to: '/' },
  { name: 'منتجاتنا', to: '/#products' },
  { name: 'أنواع الخشب', to: '/#wood-types' },
  { name: 'معرض الأعمال', to: '/gallery' },
  { name: 'عن المصنع', to: '/#about' },
  { name: 'تواصل معنا', to: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (to) => {
    const galleryActive = to === '/gallery' && pathname === '/gallery';
    const homeActive = to === '/' && pathname === '/';
    const active = galleryActive || homeActive;
    if (active) {
      return isScrolled
        ? 'text-amber-900 font-bold border-b-2 border-amber-700 pb-0.5'
        : 'text-amber-950 font-bold border-b-2 border-amber-800 pb-0.5 drop-shadow-sm';
    }
    return isScrolled
      ? 'text-gray-700 hover:text-amber-900 font-semibold transition-colors'
      : 'text-amber-950/90 hover:text-amber-900 font-semibold transition-colors drop-shadow-sm';
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100/80'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
            {logoUrl ? (
              <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-lg bg-white shadow-md border border-amber-100 overflow-hidden shrink-0 group-hover:shadow-lg transition-shadow">
                <img src={logoUrl} alt="الفادي" className="max-h-full max-w-full object-contain p-1" />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-amber-900 to-amber-700 p-3 rounded-lg">
                <i className="fas fa-door-open text-white text-2xl" />
              </div>
            )}
            <div>
              <span className="text-2xl font-bold text-amber-900 block">الفادي</span>
              <span className="text-xs text-gray-600">للأبواب الخشبية والأثاث</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} className={linkClass(link.to)}>
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/201279781350"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all"
            >
              <i className="fab fa-whatsapp text-xl" />
              واتساب
            </a>
          </div>

          <button
            type="button"
            className={`md:hidden text-2xl ${isScrolled ? 'text-amber-900' : 'text-amber-950 drop-shadow-sm'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu fixed top-0 right-0 w-full h-screen bg-white md:hidden ${
          isMobileMenuOpen ? 'active' : ''
        }`}
      >
        <div className="p-6">
          <button
            type="button"
            className="absolute top-6 left-6 text-2xl text-amber-900"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="إغلاق"
          >
            <i className="fas fa-times" />
          </button>
          <div className="flex flex-col space-y-6 mt-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-xl font-semibold ${
                  pathname === '/gallery' && link.to === '/gallery'
                    ? 'text-amber-900'
                    : 'text-gray-700 hover:text-amber-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/201279781350"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 text-lg"
            >
              <i className="fab fa-whatsapp text-2xl" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
