import { useState, useEffect } from 'react';
import { galleryImages } from '../data/localImages';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e) => e.key === 'Escape' && setSelectedImage(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">معرض الأعمال</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            استعرض نماذج من أعمالنا المميزة في تصنيع الأبواب والأثاث الخشبي — اضغط على الصورة
            لمشاهدتها بالحجم الكامل
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.length === 0 && (
            <p className="col-span-full text-center text-gray-600 py-12">لا توجد صور في المعرض بعد.</p>
          )}
          {galleryImages.map((image, index) => (
            <div
              key={image}
              role="button"
              tabIndex={0}
              className="gallery-item rounded-2xl cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(image);
                }
              }}
            >
              <img
                src={image}
                alt={`معرض ${index + 1}`}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="gallery-overlay rounded-2xl">
                <i className="fas fa-search-plus text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`modal ${selectedImage ? 'active' : ''}`}
        onClick={() => setSelectedImage(null)}
        role="presentation"
      >
        <button
          type="button"
          className="absolute top-8 left-8 text-white text-4xl z-10"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
          aria-label="إغلاق"
        >
          <i className="fas fa-times" />
        </button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </section>
  );
}
