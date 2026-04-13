import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductTabs from '../components/ProductTabs';
import Services from '../components/Services';
import WoodTypes from '../components/WoodTypes';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Contact from '../components/Contact';

/** تمرير سلس عند فتح الرئيسية برابط يحتوي #قسم */
function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [pathname, hash]);
}

export default function HomePage() {
  useHashScroll();

  return (
    <>
      <header className="relative">
        <Hero />
      </header>
      <ProductTabs />
      <Services />
      <WoodTypes />
      <WhyUs />
      <About />
      <Contact />
    </>
  );
}
