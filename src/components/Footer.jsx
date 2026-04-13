import { Link } from 'react-router-dom';
import { logoUrl } from '../data/localImages';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {logoUrl ? (
                <div className="bg-white p-2 rounded-lg h-14 w-14 flex items-center justify-center overflow-hidden shrink-0">
                  <img src={logoUrl} alt="" className="max-h-full max-w-full object-contain" />
                </div>
              ) : (
                <div className="bg-white p-3 rounded-lg">
                  <i className="fas fa-door-open text-amber-900 text-2xl" />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold">الفادي</h3>
                <p className="text-amber-200 text-sm">للأبواب الخشبية والأثاث</p>
              </div>
            </div>
            <p className="text-amber-100 leading-relaxed">
              مصنع متخصص في تصنيع الأبواب والشبابيك والأثاث الخشبي بأعلى معايير الجودة وبأفضل الأسعار
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/#products" className="text-amber-100 hover:text-white transition-colors">
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-amber-100 hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/#wood-types" className="text-amber-100 hover:text-white transition-colors">
                  أنواع الخشب
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-amber-100 hover:text-white transition-colors">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-amber-100 hover:text-white transition-colors">
                  عن المصنع
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-amber-100 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-amber-300" />
                <span className="text-amber-100" dir="ltr">
                  01279781350
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-amber-300" />
                <a
                  href="https://wa.me/201279781350"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-100 hover:text-white"
                >
                  واتساب
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-amber-300 mt-1" />
                <span className="text-amber-100">بني سويف – حي الزهور</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-amber-300" />
                <span className="text-amber-100">10 ص - 10 م</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-200">
            © {new Date().getFullYear()} الفادي للأبواب الخشبية والأثاث - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
