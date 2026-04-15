export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-brand-100/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-950 mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-brand-800 mx-auto mb-6" />
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتك، تواصل معنا الآن للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm hover-lift text-center scroll-reveal">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200 text-green-700">
              <i className="fab fa-whatsapp text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-brand-950 mb-3">واتساب</h3>
            <p className="text-slate-700 mb-4 text-2xl font-bold" dir="ltr">
              01279781350
            </p>
            <a
              href="https://wa.me/201279781350"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border-2 border-emerald-600 bg-white px-6 py-2.5 font-bold text-emerald-700 antialiased shadow-md shadow-slate-300/35 transition-all hover:bg-emerald-50"
            >
              راسلنا على واتساب
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm hover-lift text-center scroll-reveal">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-200 text-brand-800">
              <i className="fas fa-phone text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-brand-950 mb-3">الهاتف</h3>
            <p className="text-slate-700 mb-4 text-2xl font-bold" dir="ltr">
              01279781350
            </p>
            <a
              href="tel:01279781350"
              className="inline-block rounded-full border-2 border-brand-800 bg-white px-6 py-2.5 font-bold text-brand-900 antialiased shadow-md shadow-slate-300/35 transition-all hover:bg-brand-50"
            >
              اتصل الآن
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm hover-lift text-center scroll-reveal">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-200 text-brand-800">
              <i className="fas fa-clock text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-brand-950 mb-3">مواعيد العمل</h3>
            <p className="text-slate-700 mb-2">من 10 صباحاً</p>
            <p className="text-slate-700 mb-4">حتى 10 مساءً</p>
            <p className="text-brand-900 font-bold">جميع أيام الأسبوع</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl border border-brand-100 shadow-sm max-w-4xl mx-auto scroll-reveal">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-brand-200 text-brand-900">
              <i className="fas fa-map-marker-alt text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-950 mb-2">العنوان</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                بني سويف – حي الزهور – الشارع الذي ناصيته هايبر الغيث وسنترال الوزير – في منتصف الشارع
                بجوار الحضانة
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-800 bg-white px-8 py-3 text-lg font-bold text-brand-900 antialiased shadow-md shadow-slate-300/35 transition-all hover:bg-brand-50"
          >
            <i className="fas fa-map-marked-alt" />
            افتح الموقع على الخريطة
          </a>
        </div>
      </div>
    </section>
  );
}
