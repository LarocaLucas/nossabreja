/* =========================================================================
   Componente Footer
   Logo, redes sociais, endereco, horario e links uteis
   ========================================================================= */

import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { dadosSite } from '../config/site';
import logoImg from '../assets/imagens/logo.png';
import './Footer.css';

// SVG do icone do Instagram para evitar problemas com bibliotecas de icones
const IconeInstagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer-principal" className="footer">
      {/* Divisor decorativo: luzes penduradas (elemento de assinatura) */}
      <div className="footer__luzes" aria-hidden="true">
        <div className="footer__luzes-fio" />
      </div>

      <div className="footer__container">
        {/* Coluna 1: Logo e tagline */}
        <div className="footer__marca">
          <Link to="/" aria-label="Voltar ao inicio">
            <img src={logoImg} alt="Logo Nossa Breja" className="footer__logo" />
          </Link>
          <p className="footer__tagline">{dadosSite.tagline}</p>
          <p className="footer__manuscrita">O seu barzinho favorito</p>
        </div>

        {/* Coluna 2: Navegacao */}
        <div className="footer__coluna">
          <h3 className="footer__titulo-coluna">Navegacao</h3>
          <nav aria-label="Navegacao do footer">
            <ul className="footer__lista-links">
              <li><Link to="/" className="footer__link">Inicio</Link></li>
              <li><Link to="/agenda" className="footer__link">Agenda</Link></li>
              <li><Link to="/cardapio" className="footer__link">Cardapio</Link></li>
              <li><Link to="/galeria" className="footer__link">Galeria</Link></li>
            </ul>
          </nav>
        </div>

        {/* Coluna 3: Contato e localizacao */}
        <div className="footer__coluna">
          <h3 className="footer__titulo-coluna">Encontre a gente</h3>
          <div className="footer__info">
            <div className="footer__info-item">
              <MapPin size={16} className="footer__icone" />
              <span>{dadosSite.endereco.completo}</span>
            </div>
            <div className="footer__info-item">
              <Clock size={16} className="footer__icone" />
              <span>{dadosSite.horario.texto}</span>
            </div>
          </div>
        </div>

        {/* Coluna 4: Redes sociais */}
        <div className="footer__coluna">
          <h3 className="footer__titulo-coluna">Redes</h3>
          <div className="footer__redes">
            <a
              href={dadosSite.redesSociais.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__rede-link"
              aria-label="Seguir no Instagram"
            >
              <IconeInstagram size={20} />
              <span>{dadosSite.redesSociais.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__rodape">
        <p>Nossa Breja Gastrobar. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
