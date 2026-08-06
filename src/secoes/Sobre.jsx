/* =========================================================================
   Secao Sobre - Conceito do gastrobar
   ========================================================================= */

import { Beer, Music, Utensils } from 'lucide-react';
import heroFundo from '../assets/imagens/hero-fundo.png';
import CopoChopp from '../componentes/CopoChopp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Sobre.css';

export default function Sobre() {
  const containerRef = useScrollReveal();

  return (
    <section id="sobre" className="sobre" ref={containerRef}>
      {/* Elemento de assinatura decorativo de fundo */}
      <CopoChopp className="sobre__decoracao-copo" />

      <div className="sobre__container">
        <div className="sobre__texto revelar-item">
          <p className="sobre__subtitulo-manuscrito">Quem somos</p>
          <h2 className="sobre__titulo">Mais que um bar, uma experiencia</h2>
          <p className="sobre__descricao">
            O Nossa Breja e o ponto de encontro de Pirai do Sul pra quem curte uma breja gelada,
            comida de respeito e musica que faz a noite valer a pena. De quarta a domingo,
            a casa abre as portas com cerveja artesanal da Patanegra Cervejaria na chopeira,
            hamburguer artesanal, drinks autorais e uma programacao musical que vai
            do sertanejo ao pagode, passando pelo acustico no domingo.
          </p>
          <p className="sobre__descricao">
            Aqui a resenha e garantida. Traga a galera, escolha seu canto favorito
            e deixa que a gente cuida do resto.
          </p>

          <div className="sobre__destaques">
            <div className="sobre__destaque revelar-item">
              <div className="sobre__destaque-icone">
                <Beer size={24} />
              </div>
              <div>
                <h3 className="sobre__destaque-titulo">Chopp Artesanal</h3>
                <p className="sobre__destaque-texto">Patanegra Cervejaria direto na chopeira</p>
              </div>
            </div>
            <div className="sobre__destaque revelar-item">
              <div className="sobre__destaque-icone">
                <Utensils size={24} />
              </div>
              <div>
                <h3 className="sobre__destaque-titulo">Gastronomia</h3>
                <p className="sobre__destaque-texto">Hamburguer artesanal e petiscos de qualidade</p>
              </div>
            </div>
            <div className="sobre__destaque revelar-item">
              <div className="sobre__destaque-icone">
                <Music size={24} />
              </div>
              <div>
                <h3 className="sobre__destaque-titulo">Musica ao Vivo</h3>
                <p className="sobre__destaque-texto">Programacao musical toda semana</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sobre__imagem-container revelar-item">
          <img
            src={heroFundo}
            alt="Interior acolhedor do Nossa Breja Gastrobar com iluminacao quente"
            className="sobre__imagem"
            loading="lazy"
          />
          <div className="sobre__imagem-moldura" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
