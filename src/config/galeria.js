/* =========================================================================
   Galeria de eventos - Nossa Breja Gastrobar
   Cada album tem slug unico, nome, data e lista de fotos.
   Preparada para receber fotos reais organizadas por evento.
   ========================================================================= */

import imgEvento01 from '../assets/imagens/galeria-evento-01.png';

export const albumsGaleria = [
  {
    slug: 'sextaneja-agosto-2026',
    nome: 'Sextaneja',
    data: '2026-08-01',
    descricao: 'Uma noite de sertanejo que ninguem esqueceu.',
    capa: imgEvento01,
    fotos: [
      { src: imgEvento01, alt: 'Publico curtindo a Sextaneja no Nossa Breja' },
    ],
  },
  {
    slug: 'pagodinho-no-deck-julho-2026',
    nome: 'Pagodinho no Deck',
    data: '2026-07-24',
    descricao: 'Pagode de qualidade no deck do Nossa Breja.',
    capa: imgEvento01,
    fotos: [
      { src: imgEvento01, alt: 'Pagodinho no Deck do Nossa Breja' },
    ],
  },
  {
    slug: 'esquenta-rodeio-julho-2026',
    nome: 'Esquenta Rodeio',
    data: '2026-07-19',
    descricao: 'A galera se reuniu pro esquenta mais animado da cidade.',
    capa: imgEvento01,
    fotos: [
      { src: imgEvento01, alt: 'Esquenta Rodeio no Nossa Breja' },
    ],
  },
];
