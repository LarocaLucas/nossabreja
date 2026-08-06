/* =========================================================================
   Secao Cardapio Previa - Destaques do cardapio na Home
   ========================================================================= */

import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { destaquesCardapio } from '../config/cardapio';
import { dadosSite } from '../config/site';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CardapioPrevia.css';

export default function CardapioPrevia() {
  const containerRef = useScrollReveal();

  return (
    <section id="cardapio-previa" className="cardapio-previa" ref={containerRef}>
      <div className="cardapio-previa__container">
        <div className="cardapio-previa__cabecalho revelar-item">
          <div>
            <p className="cardapio-previa__manuscrito">Pra comer e beber</p>
            <h2 className="cardapio-previa__titulo">Destaques do Cardapio</h2>
          </div>
          <div className="cardapio-previa__acoes">
            <Link to="/cardapio" className="botao botao--outline" id="cta-ver-cardapio">
              Ver cardapio
              <ArrowRight size={16} />
            </Link>
            <a
              href={dadosSite.linksExternos.mogoMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="botao botao--primario"
              id="cta-pedir-mogo"
            >
              Fazer pedido
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="cardapio-previa__grade">
          {destaquesCardapio.map((item) => (
            <div key={item.id} className="cardapio-previa__card revelar-item">
              <div className="cardapio-previa__card-imagem-container">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="cardapio-previa__card-imagem"
                  loading="lazy"
                />
                <span className="cardapio-previa__card-categoria">{item.categoria}</span>
              </div>
              <div className="cardapio-previa__card-conteudo">
                <h3 className="cardapio-previa__card-nome">{item.nome}</h3>
                <p className="cardapio-previa__card-descricao">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
