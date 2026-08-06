/* =========================================================================
   Elemento de Assinatura: Copo de Chopp
   SVG customizado com as cores da marca (Laranja e Amarelo).
   Pode ser usado como decoracao ou background.
   ========================================================================= */

import './CopoChopp.css';

export default function CopoChopp({ className = '', style = {} }) {
  return (
    <div className={`assinatura-copo ${className}`} style={style} aria-hidden="true">
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="assinatura-copo__svg"
      >
        {/* Corpo do copo (Tulipa) */}
        <path
          d="M30 30 C 25 70, 40 100, 50 110 C 60 100, 75 70, 70 30 Z"
          fill="var(--cor-secundaria)"
          stroke="var(--cor-contraste)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Espuma */}
        <path
          d="M25 35 C 20 20, 40 10, 50 20 C 60 10, 80 20, 75 35 C 85 45, 65 50, 50 45 C 35 50, 15 45, 25 35 Z"
          fill="var(--cor-texto-principal)"
          stroke="var(--cor-contraste)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Detalhe de reflexo no vidro */}
        <path
          d="M38 50 C 35 70, 42 85, 45 90"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
