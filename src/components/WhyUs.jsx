const features = [
  {
    icon: 'fa-dollar-sign',
    title: 'البيع بسعر المصنع',
    description: 'أفضل الأسعار في السوق بدون وسطاء',
  },
  {
    icon: 'fa-tools',
    title: 'تصنيع حسب الطلب',
    description: 'نلبي جميع احتياجاتك ومتطلباتك الخاصة',
  },
  {
    icon: 'fa-gem',
    title: 'جودة عالية في الخامات',
    description: 'نستخدم أفضل أنواع الأخشاب المحلية والمستوردة',
  },
  {
    icon: 'fa-ruler-combined',
    title: 'تنفيذ جميع المقاسات',
    description: 'مرونة كاملة في تنفيذ المقاسات المطلوبة',
  },
  {
    icon: 'fa-certificate',
    title: 'خبرة واحترافية',
    description: 'سنوات من الخبرة في صناعة الأبواب والأثاث',
  },
  {
    icon: 'fa-shipping-fast',
    title: 'تسليم سريع',
    description: 'التزام كامل بمواعيد التسليم المحددة',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">لماذا نحن؟</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نتميز بالعديد من المزايا التي تجعلنا الخيار الأمثل لك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${feature.icon} text-amber-900 text-xl`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
