/* =========================================================================
   Secao Localizacao - Mapa, endereco e reserva via WhatsApp
   ========================================================================= */

import { MapPin, Clock, Phone } from 'lucide-react';
import { dadosSite } from '../config/site';
import './Localizacao.css';

export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao">
      <div className="localizacao__container">
        <div className="localizacao__info">
          <p className="localizacao__manuscrito">Vem nos visitar</p>
          <h2 className="localizacao__titulo">Como Chegar</h2>

          <div className="localizacao__detalhes">
            <div className="localizacao__detalhe">
              <div className="localizacao__detalhe-icone">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="localizacao__detalhe-titulo">Endereco</h3>
                <p className="localizacao__detalhe-texto">{dadosSite.endereco.completo}</p>
              </div>
            </div>

            <div className="localizacao__detalhe">
              <div className="localizacao__detalhe-icone">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="localizacao__detalhe-titulo">Horario</h3>
                <p className="localizacao__detalhe-texto">{dadosSite.horario.texto}</p>
              </div>
            </div>

            <div className="localizacao__detalhe">
              <div className="localizacao__detalhe-icone">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="localizacao__detalhe-titulo">Reservas</h3>
                <p className="localizacao__detalhe-texto">Via WhatsApp, rapido e facil</p>
              </div>
            </div>
          </div>

          <a
            href={dadosSite.contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao--primario botao--grande localizacao__cta"
            id="cta-reserva-localizacao"
          >
            Reservar mesa via WhatsApp
          </a>
        </div>

        <div className="localizacao__mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5!2d-49.9461!3d-24.5286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMxJzQzLjAiUyA0OcKwNTYnNDYuMCJX!5e0!3m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localizacao do Nossa Breja Gastrobar no Google Maps"
            className="localizacao__mapa"
          />
        </div>
      </div>
    </section>
  );
}
