/* =========================================================================
   Pagina Agenda - Grade completa + eventos especiais
   ========================================================================= */

import { Calendar, Ticket, ArrowRight } from 'lucide-react';
import { agendaSemanal } from '../config/agenda';
import { obterEventosAtivos } from '../config/eventos';
import './Agenda.css';

export default function Agenda() {
  const eventosAtivos = obterEventosAtivos();

  return (
    <main className="pagina-agenda">
      <div className="pagina-agenda__container">
        {/* Cabecalho da pagina */}
        <div className="pagina-agenda__cabecalho">
          <p className="pagina-agenda__manuscrito">Programacao completa</p>
          <h1 className="pagina-agenda__titulo">Agenda da Semana</h1>
          <p className="pagina-agenda__subtitulo">
            Toda semana tem atracao diferente no Nossa Breja. Confere a programacao e vem curtir.
          </p>
        </div>

        {/* Grade semanal completa */}
        <div className="pagina-agenda__grade">
          {agendaSemanal.map((dia) => (
            <div
              key={dia.diaSemana}
              className={`pagina-agenda__dia ${dia.ativo ? '' : 'pagina-agenda__dia--inativo'}`}
            >
              <div className="pagina-agenda__dia-header">
                <Calendar size={18} className="pagina-agenda__dia-icone" />
                <span className="pagina-agenda__dia-nome">{dia.diaSemana}</span>
              </div>
              <h2 className="pagina-agenda__atracao">{dia.atracao}</h2>
              <span className="pagina-agenda__estilo">{dia.estilo}</span>
              <p className="pagina-agenda__descricao">{dia.descricao}</p>
            </div>
          ))}
        </div>

        {/* Eventos especiais */}
        {eventosAtivos.length > 0 && (
          <div className="pagina-agenda__eventos">
            <h2 className="pagina-agenda__eventos-titulo">Eventos Especiais</h2>
            <div className="pagina-agenda__eventos-lista">
              {eventosAtivos.map((evento) => {
                const dataFormatada = new Date(evento.data + 'T12:00:00').toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  weekday: 'long',
                });

                return (
                  <div key={evento.id} className="pagina-agenda__evento-card">
                    {evento.imagemBanner && (
                      <div className="pagina-agenda__evento-imagem-container">
                        <img
                          src={evento.imagemBanner}
                          alt={`Banner do evento ${evento.nome}`}
                          className="pagina-agenda__evento-imagem"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="pagina-agenda__evento-info">
                      <span className="pagina-agenda__evento-tag">
                        <Ticket size={14} />
                        Evento Especial
                      </span>
                      <h3 className="pagina-agenda__evento-nome">{evento.nome}</h3>
                      <p className="pagina-agenda__evento-descricao">{evento.descricao}</p>
                      <p className="pagina-agenda__evento-data">{dataFormatada} / {evento.horario}</p>
                      <p className="pagina-agenda__evento-preco">{evento.preco}</p>
                      {evento.vendaAtiva && evento.linkIngresso && (
                        <a
                          href={evento.linkIngresso}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="botao botao--secundario"
                        >
                          Garantir ingresso
                          <ArrowRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
