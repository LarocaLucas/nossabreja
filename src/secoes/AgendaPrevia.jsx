/* =========================================================================
   Secao Agenda Previa - Grade resumida da semana na Home
   Dados vem do config/agenda.js, nunca hardcoded
   ========================================================================= */

import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { agendaSemanal } from '../config/agenda';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './AgendaPrevia.css';

export default function AgendaPrevia() {
  const containerRef = useScrollReveal();

  return (
    <section id="agenda-previa" className="agenda-previa" ref={containerRef}>
      <div className="agenda-previa__container">
        <div className="agenda-previa__cabecalho revelar-item">
          <div>
            <p className="agenda-previa__manuscrito">Programacao</p>
            <h2 className="agenda-previa__titulo">Agenda da Semana</h2>
          </div>
          <Link to="/agenda" className="botao botao--outline" id="cta-ver-agenda">
            Ver agenda completa
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="agenda-previa__grade">
          {agendaSemanal.map((dia) => (
            <div
              key={dia.diaSemana}
              className={`agenda-previa__dia revelar-item ${dia.ativo ? '' : 'agenda-previa__dia--inativo'}`}
            >
              <span className="agenda-previa__dia-nome">{dia.diaAbreviado}</span>
              <div className="agenda-previa__dia-conteudo">
                <h3 className="agenda-previa__atracao">{dia.atracao}</h3>
                <span className="agenda-previa__estilo">{dia.estilo}</span>
              </div>
              <Calendar size={16} className="agenda-previa__icone" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
