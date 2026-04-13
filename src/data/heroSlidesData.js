import { sliderImages, heroFallbackSlideImages } from './localImages';

/** نصوص تتبدل مع كل شريحة (تُعاد بالتدوير إن زادت الصور) */
const SLIDE_COPY = [
  {
    title: 'الفادي للأبواب الخشبية والأثاث',
    subtitle:
      'تصنيع الأبواب والشبابيك والأثاث حسب الطلب بأجود الخامات وبسعر المصنع مباشرةً من دون وسطاء.',
  },
  {
    title: 'أبواب وديكورات تليق بمنزلك',
    subtitle:
      'تشكيلة واسعة من التصاميم الكلاسيكية والعصرية، مع ضبط دقيق للمقاسات والتشطيب حسب ذوقك.',
  },
  {
    title: 'مطابخ خشبية تنفيذ كامل',
    subtitle:
      'نخطط معك وننفّذ مطبخك بالكامل بخشب متين وتخزين عملي يدوم مع الاستخدام اليومي.',
  },
  {
    title: 'غرف سفرة وأثاث مخصص',
    subtitle:
      'طاولات سفرة ووحدات عرض وقطع أثاث مصممة لتناسب مساحتك ولون دهاناتك.',
  },
];

const slideImages =
  sliderImages.length > 0 ? sliderImages : heroFallbackSlideImages;

export const heroSlidesData = slideImages.map((image, i) => ({
  image,
  ...SLIDE_COPY[i % SLIDE_COPY.length],
}));
