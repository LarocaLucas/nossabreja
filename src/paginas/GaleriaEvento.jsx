/* =========================================================================
   Pagina GaleriaEvento - Album individual de fotos
   ========================================================================= */

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { albumsGaleria } from '../config/galeria';
import './GaleriaEvento.css';

export default function GaleriaEvento() {
  const { slug } = useParams();
  const album = albumsGaleria.find((a) => a.slug === slug);

  if (!album) {
    return (
      <main className="pagina-galeria-evento">
        <div className="pagina-galeria-evento__container">
          <div className="pagina-galeria-evento__vazio">
            <h1>Album nao encontrado</h1>
            <p>Esse album pode ter sido removido ou o link esta incorreto.</p>
            <Link to="/galeria" className="botao botao--outline">
              <ArrowLeft size={16} />
              Voltar pra galeria
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pagina-galeria-evento">
      <div className="pagina-galeria-evento__container">
        <Link to="/galeria" className="pagina-galeria-evento__voltar">
          <ArrowLeft size={16} />
          Voltar pra galeria
        </Link>

        <div className="pagina-galeria-evento__cabecalho">
          <h1 className="pagina-galeria-evento__titulo">{album.nome}</h1>
          <p className="pagina-galeria-evento__data">
            {new Date(album.data + 'T12:00:00').toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          {album.descricao && (
            <p className="pagina-galeria-evento__descricao">{album.descricao}</p>
          )}
        </div>

        <div className="pagina-galeria-evento__grid">
          {album.fotos.map((foto, index) => (
            <div key={index} className="pagina-galeria-evento__foto">
              <img
                src={foto.src}
                alt={foto.alt}
                className="pagina-galeria-evento__foto-imagem"
                loading="lazy"
              />
              <a
                href={foto.src}
                download
                className="pagina-galeria-evento__foto-download"
                aria-label={`Baixar foto: ${foto.alt}`}
              >
                <Download size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
