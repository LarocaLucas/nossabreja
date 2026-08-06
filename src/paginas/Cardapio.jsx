/* =========================================================================
   Pagina Cardapio - Destaques visuais + CTA Mogo Menu
   ========================================================================= */

import { ExternalLink } from 'lucide-react';
import { destaquesCardapio } from '../config/cardapio';
import { dadosSite } from '../config/site';
import './Cardapio.css';

export default function Cardapio() {
  return (
    <main className="pagina-cardapio">
      <div className="pagina-cardapio__container">
        <div className="pagina-cardapio__cabecalho">
          <p className="pagina-cardapio__manuscrito">Pra comer e beber</p>
          <h1 className="pagina-cardapio__titulo">Nosso Cardapio</h1>
          <p className="pagina-cardapio__subtitulo">
            Destaques da cozinha e do bar. Pra ver o cardapio completo e fazer seu pedido,
            acessa o Mogo Menu.
          </p>
          <a
            href={dadosSite.linksExternos.mogoMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao--primario botao--grande"
            id="cta-pedir-cardapio"
          >
            Fazer pedido pelo Mogo Menu
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="pagina-cardapio__lista">
          {destaquesCardapio.map((item, index) => (
            <div
              key={item.id}
              className={`pagina-cardapio__item ${index % 2 !== 0 ? 'pagina-cardapio__item--inverso' : ''}`}
            >
              <div className="pagina-cardapio__item-imagem-container">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="pagina-cardapio__item-imagem"
                  loading="lazy"
                />
              </div>
              <div className="pagina-cardapio__item-conteudo">
                <span className="pagina-cardapio__item-categoria">{item.categoria}</span>
                <h2 className="pagina-cardapio__item-nome">{item.nome}</h2>
                <p className="pagina-cardapio__item-descricao">{item.descricao}</p>
                <a
                  href={dadosSite.linksExternos.mogoMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao botao--outline"
                >
                  Fazer pedido
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="pagina-cardapio__cta-final">
          <p className="pagina-cardapio__cta-texto">
            Quer ver tudo? O cardapio completo ta no Mogo Menu.
          </p>
          <a
            href={dadosSite.linksExternos.mogoMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao--secundario botao--grande"
          >
            Acessar cardapio completo
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
