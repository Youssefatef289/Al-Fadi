import { aboutImage } from '../data/localImages';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            {aboutImage ? (
              <img
                src={aboutImage}
                alt="طاولة سفرة خشبية — مصنع الفادي للأخشاب"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            ) : (
              <div className="rounded-3xl shadow-2xl w-full aspect-[4/3] bg-amber-100" />
            )}
          </div>
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">مصنع الفادي للأخشاب</h2>
            <div className="w-24 h-1 bg-amber-600 mb-8" />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              نقوم بتصنيع الأبواب والشبابيك والأثاث الخشبي داخل مصنعنا باستخدام أفضل أنواع الأخشاب
              وبجودة عالية، مع تنفيذ جميع المقاسات حسب طلب العميل وبيع المنتجات مباشرة بسعر المصنع.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              نفخر بخبرتنا الطويلة في مجال صناعة الأخشاب والتزامنا الكامل بتقديم منتجات عالية الجودة
              تلبي توقعات عملائنا وتفوقها.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-amber-50 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-bold text-xl">+15</span>
                <span className="text-gray-700 mr-2">سنة خبرة</span>
              </div>
              <div className="bg-amber-50 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-bold text-xl">+1000</span>
                <span className="text-gray-700 mr-2">عميل راضٍ</span>
              </div>
              <div className="bg-amber-50 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-bold text-xl">100%</span>
                <span className="text-gray-700 mr-2">ضمان الجودة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
