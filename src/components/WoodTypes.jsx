import { woodTypes } from '../data/localImages';

export default function WoodTypes() {
  return (
    <section id="wood-types" className="py-20 wood-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">أنواع الخشب</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            نستخدم أفضل أنواع الأخشاب المحلية والمستوردة لضمان الجودة والمتانة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {woodTypes.map((wood, index) => (
            <div
              key={wood.name}
              className="bg-white rounded-2xl overflow-hidden hover-lift shadow-lg scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                {wood.image ? (
                  <img src={wood.image} alt={wood.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center text-amber-800">
                    قريباً
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{wood.name}</h3>
                <p className="text-gray-600">{wood.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
