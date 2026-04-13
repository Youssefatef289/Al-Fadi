import { useState, useEffect } from 'react';
import { heroSlidesData } from '../data/heroSlidesData';

export default function Hero() {
  const slides = heroSlidesData;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide] ?? null;

  return (
    <section
      id="home"
      className="hero-split relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white scroll-mt-24"
    >
      {/* مساحة علوية لشريط التنقل المدمج (fixed) */}
      <div className="container mx-auto px-4 pt-24 pb-10 lg:pt-28 lg:pb-14 relative z-10">
        {!slide ? (
          <div className="text-center py-24 text-amber-900/80">
            <p className="text-xl">أضف صوراً في مجلد images/slider أو images/door لعرض الهيرو.</p>
          </div>
        ) : (
          <div
            key={currentSlide}
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center hero-animate"
          >
            {/* في RTL: النص يظهر يميناً أولاً */}
            <div className="order-2 lg:order-1 text-center lg:text-right space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-950 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:mr-0">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
                <a
                  href="https://wa.me/201279781350"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-green-900/10"
                >
                  <i className="fab fa-whatsapp text-2xl" />
                  تواصل عبر واتساب
                </a>
                <a
                  href="tel:01279781350"
                  className="bg-amber-900 hover:bg-amber-950 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                >
                  <i className="fas fa-phone text-2xl" />
                  اتصل الآن
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] flex items-center justify-center">
                <img
                  src={slide.image}
                  alt=""
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-10 lg:mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-10 bg-amber-800'
                    : 'w-2.5 bg-amber-300 hover:bg-amber-500'
                }`}
                aria-label={`شريحة ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
