import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const revealElements = () => {
      document.querySelectorAll('.scroll-reveal').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
        }
      });
    };

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('scroll', revealElements);
    document.addEventListener('click', onAnchorClick);
    revealElements();

    return () => {
      window.removeEventListener('scroll', revealElements);
      document.removeEventListener('click', onAnchorClick);
    };
  }, [pathname, hash]);
}
