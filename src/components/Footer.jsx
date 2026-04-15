import { Link } from 'react-router-dom';
import { logoUrl } from '../data/localImages';

/** ???? ????? ??????? (Unicode escapes ?????? ????? ??????? ??? ?????) */
const t = {
  brand: '\u0627\u0644\u0641\u0627\u062f\u064a',
  tagline: '\u0644\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u062e\u0634\u0628\u064a\u0629 \u0648\u0627\u0644\u0623\u062b\u0627\u062b',
  desc:
    '\u0645\u0635\u0646\u0639 \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0623\u0628\u0648\u0627\u0628 \u0648\u0627\u0644\u0634\u0628\u0627\u0628\u064a\u0643 \u0648\u0627\u0644\u0623\u062b\u0627\u062b \u0627\u0644\u062e\u0634\u0628\u064a \u0628\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0628\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631',
  quick: '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629',
  contact: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
  home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
  products: '\u0645\u0646\u062a\u062c\u0627\u062a\u0646\u0627',
  services: '\u062e\u062f\u0645\u0627\u062a\u0646\u0627',
  wood: '\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062e\u0634\u0628',
  gallery: '\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644',
  about: '\u0639\u0646 \u0627\u0644\u0645\u0635\u0646\u0639',
  contactLink: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
  wa: '\u0648\u0627\u062a\u0633\u0627\u0628',
  city: '\u0628\u0646\u064a \u0633\u0648\u064a\u0641 \u2013 \u062d\u064a \u0627\u0644\u0632\u0647\u0648\u0631',
  hours: '10 \u0635 - 10 \u0645',
  rights:
    '\u0627\u0644\u0641\u0627\u062f\u064a \u0644\u0644\u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u062e\u0634\u0628\u064a\u0629 \u0648\u0627\u0644\u0623\u062b\u0627\u062b - \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629',
};

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 py-12 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              {logoUrl ? (
                <img src={logoUrl} alt={t.brand} className="h-14 sm:h-16 w-auto max-w-[240px] object-contain" />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="bg-brand-50 p-3 rounded-lg border border-brand-100">
                    <i className="fas fa-door-open text-brand-900 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{t.brand}</h3>
                    <p className="text-slate-600 text-sm">{t.tagline}</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-slate-600 leading-relaxed">{t.desc}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">{t.quick}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/#products" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.products}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link to="/#wood-types" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.wood}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-slate-600 hover:text-brand-900 transition-colors">
                  {t.contactLink}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">{t.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600">
                <i className="fas fa-phone text-brand-800" />
                <span dir="ltr">01279781350</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-brand-800" />
                <a
                  href="https://wa.me/201279781350"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-brand-900"
                >
                  {t.wa}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <i className="fas fa-map-marker-alt text-brand-800 mt-1" />
                <span>{t.city}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <i className="fas fa-clock text-brand-800" />
                <span>{t.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center">
          <p className="text-slate-500">
            {'\u00a9 '}
            {new Date().getFullYear()} {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
