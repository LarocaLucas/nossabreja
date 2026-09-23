/* =========================================================================
   Secao Hero - Tela principal com foto do ambiente, tagline e CTAs
   Comunica em poucos segundos: bar de resenha, comida boa e musica ao vivo
   ========================================================================= */

import { ChevronDown } from 'lucide-react';
import { dadosSite } from '../config/site';
import heroFundo from '../assets/imagens/148.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Imagem de fundo com overlay */}
      <div className="hero__fundo">
        <img
          src={heroFundo}
          alt="Ambiente interno do Nossa Breja Gastrobar a noite, com luzes quentes e musica ao vivo"
          className="hero__imagem"
          loading="eager"
        />
        <div className="hero__overlay" />
      </div>

      {/* Efeito de luz quente pulsante (elemento de assinatura) */}
      <div className="hero__luz-ambiente" aria-hidden="true" />

      <div className="hero__conteudo">
        <p className="hero__manuscrita">O seu barzinho favorito</p>
        <h1 className="hero__titulo">{dadosSite.tagline}</h1>
        <p className="hero__horario">
          <span className="hero__horario-tag">{dadosSite.horario.dias}</span>
          <span className="hero__horario-separador">/</span>
          <span className="hero__horario-tag">A partir das {dadosSite.horario.abertura}</span>
        </p>

        <div className="hero__acoes">
          <a
            href={dadosSite.contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="botao botao--primario botao--grande"
            id="cta-reserva-hero"
          >
            Reservar mesa
          </a>
          <a
            href="/agenda"
            className="botao botao--outline botao--grande"
            id="cta-agenda-hero"
          >
            Ver agenda da semana
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
