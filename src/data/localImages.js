/** مسارات الصور المحلية من مجلد /images (Vite يدمجها في البناء) */
const modules = import.meta.glob(
  ['../../images/*.{jpeg,jpg,png}', '../../images/**/*.{jpeg,jpg,png}'],
  { eager: true, as: 'url' }
);

function norm(p) {
  return p.replace(/\\/g, '/');
}

const entries = Object.entries(modules).map(([path, url]) => ({
  path: norm(path),
  url,
}));

const isLogoFile = ({ path }) =>
  /Logo\.(jpg|jpeg|png)$/i.test(path) || path.includes('Logo-removebg');

export const logoUrl =
  entries.find(({ path }) => path.includes('Logo-removebg-preview'))?.url ??
  entries.find(({ path }) => /\/Logo\.jpg$/i.test(path))?.url ??
  null;

const productEntries = entries.filter((e) => !isLogoFile(e));

function urlsSorted(filterFn) {
  return productEntries
    .filter(filterFn)
    .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }))
    .map((x) => x.url);
}

export const doorImages = urlsSorted(({ path }) => path.includes('/door/'));
export const diningImages = urlsSorted(({ path }) => path.includes('/dining table/'));
export const kitchenImages = urlsSorted(({ path }) => path.includes('/kitchens/'));
/** صور الهيرو من مجلد images/slider (مرتبة حسب اسم الملف) */
export const sliderImages = urlsSorted(({ path }) => path.includes('/slider/'));

const allProductUrls = [...doorImages, ...kitchenImages, ...diningImages];

/** احتياطي للهيرو إن لم يوجد مجلد slider */
export const heroFallbackSlideImages =
  doorImages.length >= 3
    ? doorImages.slice(0, 3)
    : allProductUrls.length >= 3
      ? allProductUrls.slice(0, 3)
      : allProductUrls;

function at(arr, i) {
  if (!arr.length) return null;
  return arr[i % arr.length];
}

/** صور لعرض أنواع الخشب (نماذج من أعمال الأبواب والمطابخ والسفرة) */
const woodImages = [
  at(doorImages, 0),
  at(doorImages, 5),
  at(kitchenImages, 0),
  at(diningImages, 0),
  at(kitchenImages, 3),
].filter(Boolean);

export const woodTypes = [
  { name: 'موسكي سويد', description: 'خشب عالي الجودة', image: woodImages[0] },
  { name: 'زان', description: 'متين وفاخر', image: woodImages[1] },
  { name: 'أرو', description: 'خشب صلب ومقاوم', image: woodImages[2] },
  { name: 'عزايزي', description: 'تصميم أنيق', image: woodImages[3] },
  { name: 'بيتش باين', description: 'خشب طبيعي مميز', image: woodImages[4] },
].map((row, i) => ({
  ...row,
  image:
    row.image ||
    (allProductUrls.length ? allProductUrls[i % allProductUrls.length] : '') ||
    '',
}));

export const galleryImages =
  allProductUrls.length > 0 ? allProductUrls : [];

/** صورة قسم «مصنع الفادي للأخشاب» — تفضيل طاولة السفرة (8) */
const aboutDining8Url = productEntries.find(({ path }) =>
  /dining table.*\(8\)\./i.test(path)
)?.url;

export const aboutImage =
  aboutDining8Url || kitchenImages[0] || doorImages[0] || allProductUrls[0] || '';
