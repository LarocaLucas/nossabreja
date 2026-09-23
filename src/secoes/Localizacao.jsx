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
            src={dadosSite.endereco.googleMapsUrl}
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
