import { useEffect } from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 sm:pt-24 bg-white min-h-screen">
      <Gallery />
    </main>
  );
}
