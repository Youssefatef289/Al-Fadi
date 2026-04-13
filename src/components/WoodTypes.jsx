import { woodTypes } from '../data/localImages';

export default function WoodTypes() {
  return (
    <section id="wood-types" className="py-20 bg-white border-t border-b border-amber-100/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">أنواع الخشب</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            نستخدم أفضل أنواع الأخشاب المحلية والمستوردة لضمان الجودة والمتانة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {woodTypes.map((wood, index) => (
            <article
              key={wood.name}
              className="rounded-2xl overflow-hidden border border-amber-200/80 hover-lift bg-transparent scroll-reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="h-52 overflow-hidden bg-gray-50">
                {wood.image ? (
                  <img src={wood.image} alt={wood.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-amber-900">
                    قريباً
                  </div>
                )}
              </div>
              <div className="pt-4 pb-2 px-1 text-center">
                <h3 className="text-lg font-bold text-amber-950 mb-1">{wood.name}</h3>
                <p className="text-sm text-gray-600">{wood.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
