import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoUrl } from '../data/localImages';

const navLinks = [
  { name: 'الرئيسية', to: '/#home' },
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
        ? 'text-brand-900 font-bold border-b-2 border-brand-800 pb-0.5'
        : 'text-brand-950 font-bold border-b-2 border-brand-900 pb-0.5 drop-shadow-sm';
    }
    return isScrolled
      ? 'text-slate-700 hover:text-brand-900 font-semibold transition-colors'
      : 'text-slate-800/95 hover:text-brand-900 font-semibold transition-colors drop-shadow-sm';
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 space-x-reverse group min-h-[3rem]"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={'\u0627\u0644\u0641\u0627\u062f\u064a \u0644\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u062e\u0634\u0628\u064a\u0629 \u0648\u0627\u0644\u0623\u062b\u0627\u062b'}
                className=" object-contain object-right drop-shadow-sm"
                style={{ width: '150px', height: '100px'  }}
              />
            ) : (
              <>
                <div className="bg-gradient-to-br from-brand-900 to-brand-800 p-3 rounded-lg shadow">
                  <i className="fas fa-door-open text-white text-2xl" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-slate-900 block">الفادي</span>
                  <span className="text-xs text-slate-600">للأبواب الخشبية والأثاث</span>
                </div>
              </>
            )}
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
              className="flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-2 font-bold text-white antialiased shadow-md shadow-emerald-950/25 transition-all hover:bg-emerald-800"
            >
              <i className="fab fa-whatsapp text-xl" />
              واتساب
            </a>
          </div>

          <button
            type="button"
            className={`md:hidden text-2xl ${isScrolled ? 'text-brand-900' : 'text-slate-900 drop-shadow-sm'}`}
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
            className="absolute top-6 left-6 text-2xl text-brand-900"
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
                    ? 'text-brand-900'
                    : 'text-slate-700 hover:text-brand-900'
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
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-lg font-bold text-white antialiased shadow-md shadow-emerald-950/25 transition-all hover:bg-emerald-800"
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
