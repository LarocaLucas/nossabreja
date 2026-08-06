/* =========================================================================
   Componente Header - Navegacao principal
   Navbar fixa com logo, links de navegacao e CTA de reserva
   ========================================================================= */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/imagens/logo.png';
import './Header.css';

const linksNavegacao = [
  { texto: 'Inicio', caminho: '/' },
  { texto: 'Agenda', caminho: '/agenda' },
  { texto: 'Cardapio', caminho: '/cardapio' },
  { texto: 'Galeria', caminho: '/galeria' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrollou, setScrollou] = useState(false);
  const location = useLocation();

  /* Fecha o menu mobile ao navegar */
  useEffect(() => {
    setMenuAberto(false);
  }, [location.pathname]);

  /* Detecta scroll para aplicar fundo solido no header */
  useEffect(() => {
    function aoScrollar() {
      setScrollou(window.scrollY > 50);
    }
    window.addEventListener('scroll', aoScrollar, { passive: true });
    return () => window.removeEventListener('scroll', aoScrollar);
  }, []);

  return (
    <header
      id="header-principal"
      className={`header ${scrollou ? 'header--solido' : ''}`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="Nossa Breja - Voltar ao inicio">
          <img src={logoImg} alt="Logo Nossa Breja Gastrobar" className="header__logo-img" />
        </Link>

        <nav className="header__nav" aria-label="Navegacao principal">
          <ul className={`header__links ${menuAberto ? 'header__links--aberto' : ''}`}>
            {linksNavegacao.map((link) => (
              <li key={link.caminho}>
                <Link
                  to={link.caminho}
                  className={`header__link ${location.pathname === link.caminho ? 'header__link--ativo' : ''}`}
                >
                  {link.texto}
                </Link>
              </li>
            ))}
            <li className="header__link-cta-mobile">
              <a
                href="https://wa.me/554291192668?text=Ola!%20Gostaria%20de%20reservar%20uma%20mesa.%20Para%20o%20dia:%20Para%20__%20pessoas"
                target="_blank"
                rel="noopener noreferrer"
                className="botao botao--primario"
              >
                Reservar mesa
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="https://wa.me/554291192668?text=Ola!%20Gostaria%20de%20reservar%20uma%20mesa.%20Para%20o%20dia:%20Para%20__%20pessoas"
          target="_blank"
          rel="noopener noreferrer"
          className="botao botao--primario header__cta-desktop"
          id="cta-reserva-header"
        >
          Reservar mesa
        </a>

        <button
          className="header__menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay escuro quando menu mobile esta aberto */}
      {menuAberto && (
        <div
          className="header__overlay"
          onClick={() => setMenuAberto(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
