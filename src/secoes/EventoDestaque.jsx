/* =========================================================================
   Secao Evento Destaque - Card condicional de evento especial
   So renderiza quando houver evento ativo com venda de ingresso
   ========================================================================= */

import { Ticket, ArrowRight } from 'lucide-react';
import { obterEventoDestaque } from '../config/eventos';
import './EventoDestaque.css';

export default function EventoDestaque() {
  const evento = obterEventoDestaque();

  /* Nao renderiza nada se nao houver evento ativo */
  if (!evento) return null;

  /* Formata a data para exibicao */
  const dataFormatada = new Date(evento.data + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    weekday: 'long',
  });

  return (
    <section id="evento-destaque" className="evento-destaque">
      <div className="evento-destaque__container">
        <div className="evento-destaque__card">
          {/* Imagem do banner do evento */}
          {evento.imagemBanner && (
            <div className="evento-destaque__imagem-container">
              <img
                src={evento.imagemBanner}
                alt={`Banner do evento ${evento.nome}`}
                className="evento-destaque__imagem"
                loading="lazy"
              />
              <div className="evento-destaque__imagem-overlay" />
            </div>
          )}

          <div className="evento-destaque__conteudo">
            <span className="evento-destaque__tag">
              <Ticket size={14} />
              Evento Especial
            </span>
            <h2 className="evento-destaque__nome">{evento.nome}</h2>
            <p className="evento-destaque__descricao">{evento.descricao}</p>

            <div className="evento-destaque__info">
              <div className="evento-destaque__info-item">
                <span className="evento-destaque__info-rotulo">Data</span>
                <span className="evento-destaque__info-valor">{dataFormatada}</span>
              </div>
              <div className="evento-destaque__info-item">
                <span className="evento-destaque__info-rotulo">Horario</span>
                <span className="evento-destaque__info-valor">{evento.horario}</span>
              </div>
              <div className="evento-destaque__info-item">
                <span className="evento-destaque__info-rotulo">Ingressos</span>
                <span className="evento-destaque__info-valor">{evento.preco}</span>
              </div>
            </div>

            {evento.vendaAtiva && evento.linkIngresso && (
              <a
                href={evento.linkIngresso}
                target="_blank"
                rel="noopener noreferrer"
                className="botao botao--secundario botao--grande"
                id="cta-ingresso-destaque"
              >
                Garantir ingresso
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
