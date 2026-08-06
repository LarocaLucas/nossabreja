/* =========================================================================
   Secao Galeria Previa - Grid de fotos na Home
   ========================================================================= */

import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { albumsGaleria } from '../config/galeria';
import './GaleriaPrevia.css';

export default function GaleriaPrevia() {
  /* Pega as 3 primeiras fotos de capa dos albums para o preview */
  const fotosPreview = albumsGaleria.slice(0, 3);

  return (
    <section id="galeria-previa" className="galeria-previa">
      <div className="galeria-previa__container">
        <div className="galeria-previa__cabecalho">
          <div>
            <p className="galeria-previa__manuscrito">Momentos</p>
            <h2 className="galeria-previa__titulo">Galeria de Eventos</h2>
          </div>
          <Link to="/galeria" className="botao botao--outline" id="cta-ver-galeria">
            Ver galeria completa
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="galeria-previa__grid">
          {fotosPreview.map((album) => (
            <Link
              key={album.slug}
              to={`/galeria/${album.slug}`}
              className="galeria-previa__item"
            >
              <img
                src={album.capa}
                alt={`Fotos do evento ${album.nome} no Nossa Breja`}
                className="galeria-previa__imagem"
                loading="lazy"
              />
              <div className="galeria-previa__item-overlay">
                <Camera size={20} />
                <span className="galeria-previa__item-nome">{album.nome}</span>
                <span className="galeria-previa__item-data">
                  {new Date(album.data + 'T12:00:00').toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
