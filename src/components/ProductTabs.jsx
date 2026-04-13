import { useState } from 'react';
import { Link } from 'react-router-dom';
import { doorImages, kitchenImages, diningImages } from '../data/localImages';

const tabs = [
  {
    id: 'doors',
    label: 'الأبواب',
    description: 'أبواب رئيسية وداخلية، تشطيبات متنوعة وتصاميم حسب الطلب',
    images: doorImages,
  },
  {
    id: 'kitchens',
    label: 'المطابخ',
    description: 'وحدات مطابخ خشبية كاملة مع تخزين عملي وتنسيق ديكور',
    images: kitchenImages,
  },
  {
    id: 'dining',
    label: 'غرف السفرة',
    description: 'طاولات سفرة ومجموعات أثاث للمساحات الكبيرة والصغيرة',
    images: diningImages,
  },
];

const PREVIEW_COUNT = 9;

export default function ProductTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];
  const preview = active.images.slice(0, PREVIEW_COUNT);
  const hasMore = active.images.length > PREVIEW_COUNT;

  return (
    <section id="products" className="py-20 bg-white border-t border-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">منتجاتنا</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            تصفّح نماذج من أعمالنا حسب الفئة، وشاهد كامل الصور في صفحة معرض الأعمال
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 scroll-reveal"
          role="tablist"
          aria-label="تصنيف المنتجات"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeId === tab.id}
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={`px-5 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all ${
                activeId === tab.id
                  ? 'bg-amber-900 text-white shadow-lg shadow-amber-900/25'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="scroll-reveal"
        >
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{active.description}</p>

          {preview.length === 0 ? (
            <p className="text-center text-gray-500 py-12">لا توجد صور في هذا التصنيف بعد.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {preview.map((src, index) => (
                <Link
                  key={src}
                  to="/gallery"
                  className="group gallery-item rounded-2xl overflow-hidden shadow-md ring-1 ring-amber-900/5 aspect-[4/3] block"
                >
                  <img
                    src={src}
                    alt={`${active.label} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="gallery-overlay rounded-2xl">
                    <span className="text-white text-sm font-semibold px-3 py-1 bg-amber-900/90 rounded-full">
                      المعرض
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="text-center mt-10">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-amber-900 font-bold border-b-2 border-amber-600 hover:text-amber-700 pb-0.5 transition-colors"
              >
                عرض كل صور {active.label} في المعرض
                <i className="fas fa-chevron-down text-sm" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
