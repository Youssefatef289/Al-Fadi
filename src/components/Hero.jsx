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
      className="hero-split relative isolate min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-x-hidden scroll-mt-24 bg-slate-50"
    >
      {/* خلفية متناسقة مع ألوان الشعار (أزرق ملكي + رمادي فاتح) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/70 to-brand-100/50" />
        <div className="absolute -top-28 right-[10%] h-[min(26rem,72vw)] w-[min(26rem,72vw)] rounded-full bg-brand-300/25 blur-[100px]" />
        <div className="absolute top-[36%] -left-24 h-[min(20rem,58vw)] w-[min(20rem,58vw)] rounded-full bg-brand-200/30 blur-[90px]" />
        <div className="absolute bottom-[-8%] left-[20%] h-[min(24rem,62vw)] w-[min(24rem,62vw)] rounded-full bg-brand-100/40 blur-[96px]" />
        <div className="absolute inset-0 opacity-[0.2] [background-image:radial-gradient(circle_at_1px_1px,rgba(30,58,138,0.06)_1px,transparent_0)] [background-size:26px_26px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/75 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-10 lg:pt-28 lg:pb-14 relative z-10">
        {!slide ? (
          <div className="text-center py-24 text-slate-700">
            <p className="text-xl">أضف صوراً في مجلد images/slider أو images/door لعرض الهيرو.</p>
          </div>
        ) : (
          <div
            key={currentSlide}
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center hero-animate"
          >
            <div className="order-2 lg:order-1 text-center lg:text-right space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight [text-shadow:0_1px_0_rgba(255,255,255,0.75)]">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:mr-0">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap py-1">
                <a
                  href="https://wa.me/201279781350"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 px-8 py-4 text-lg font-bold text-white antialiased shadow-lg shadow-emerald-950/30 inline-flex items-center justify-center gap-3 rounded-full transition-all hover:scale-[1.02]"
                >
                  <i className="fab fa-whatsapp text-2xl text-white" aria-hidden />
                  تواصل عبر واتساب
                </a>
                <a
                  href="tel:01279781350"
                  className="bg-brand-800 hover:bg-brand-900 px-8 py-4 text-lg font-bold  antialiased shadow-xl shadow-brand-950/40 ring-2 ring-white/25 inline-flex items-center justify-center gap-3 rounded-full transition-all hover:scale-[1.02]"
                >
                  <i className="fas fa-phone text-2xl" aria-hidden />
                  اتصل الآن
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-[4/3] flex items-center justify-center rounded-3xl bg-white/40 ring-1 ring-brand-900/5 backdrop-blur-[2px]">
                <img
                  src={slide.image}
                  alt=""
                  className="max-w-full max-h-full w-auto h-auto object-contain p-4"
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
                    ? 'w-10 bg-brand-900'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
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
