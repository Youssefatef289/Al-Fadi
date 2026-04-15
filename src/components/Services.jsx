const services = [
  {
    icon: 'fa-door-open',
    title: 'تصنيع الأبواب الخشبية',
    description: 'نقوم بتصنيع جميع أنواع الأبواب الخشبية بجودة عالية وتصاميم عصرية',
  },
  {
    icon: 'fa-window-maximize',
    title: 'تصنيع الشبابيك',
    description: 'شبابيك خشبية متينة بأفضل الخامات وبجميع المقاسات',
  },
  {
    icon: 'fa-couch',
    title: 'تصنيع الأثاث الخشبي',
    description: 'أثاث خشبي فاخر يناسب جميع الأذواق والديكورات',
  },
  {
    icon: 'fa-hammer',
    title: 'تصنيع حسب الطلب',
    description: 'نلبي جميع احتياجاتك الخاصة بتصاميم فريدة ومخصصة',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-brand-800 mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من خدمات التصنيع الخشبي بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl hover-lift border border-brand-100 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/60">
                <i className={`fa-solid ${service.icon} text-3xl text-black`} aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
