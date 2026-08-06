/* =========================================================================
   Pagina Galeria - Listagem de albums por evento
   ========================================================================= */

import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { albumsGaleria } from '../config/galeria';
import './Galeria.css';

export default function Galeria() {
  return (
    <main className="pagina-galeria">
      <div className="pagina-galeria__container">
        <div className="pagina-galeria__cabecalho">
          <p className="pagina-galeria__manuscrito">Registros</p>
          <h1 className="pagina-galeria__titulo">Galeria de Eventos</h1>
          <p className="pagina-galeria__subtitulo">
            As melhores noites registradas. Clica no album e confere as fotos.
          </p>
        </div>

        <div className="pagina-galeria__grid">
          {albumsGaleria.map((album) => (
            <Link
              key={album.slug}
              to={`/galeria/${album.slug}`}
              className="pagina-galeria__album"
            >
              <div className="pagina-galeria__album-imagem-container">
                <img
                  src={album.capa}
                  alt={`Capa do album ${album.nome}`}
                  className="pagina-galeria__album-imagem"
                  loading="lazy"
                />
                <div className="pagina-galeria__album-overlay">
                  <Camera size={32} />
                  <span>Ver fotos</span>
                </div>
              </div>
              <div className="pagina-galeria__album-info">
                <h2 className="pagina-galeria__album-nome">{album.nome}</h2>
                <p className="pagina-galeria__album-data">
                  {new Date(album.data + 'T12:00:00').toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
