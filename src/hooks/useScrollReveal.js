import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para animacao de revelacao suave on scroll (fade + slide up).
 * Respeita a preferencia de reducao de movimento do usuario.
 *
 * @param {Object} options - Opcoes de configuracao da animacao
 * @param {string} options.selector - Seletor CSS dos elementos a animar
 * @param {number} options.stagger - Tempo de delay entre os elementos
 * @returns {React.RefObject} Ref para atrelar ao container pai
 */
export function useScrollReveal({ selector = '.revelar-item', stagger = 0.1 } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Verifica prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Se usuario prefere menos movimento, aborta animacao GSAP
    }

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector);
      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: stagger,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%', // Anima quando o topo do container atinge 85% da tela
            toggleActions: 'play none none none', // Toca a animacao apenas uma vez
          },
        }
      );
    }, container);

    return () => ctx.revert(); // Limpa as animacoes ao desmontar o componente
  }, [selector, stagger]);

  return containerRef;
}
