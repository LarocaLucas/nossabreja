import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ fotos, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Distancia minima para considerar swipe
  const minSwipeDistance = 50;

  const prevPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  }, [fotos.length]);

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  }, [fotos.length]);

  // Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prevPhoto, nextPhoto]);

  // Bloqueia scroll do body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPhoto();
    }
    if (isRightSwipe) {
      prevPhoto();
    }
  };

  // Clica fora da imagem
  const handleOverlayClick = (e) => {
    if (
      e.target.classList.contains('lightbox__overlay') ||
      e.target.classList.contains('lightbox__conteudo')
    ) {
      onClose();
    }
  };

  const fotoAtual = fotos[currentIndex];

  // Baixar foto atual, util para mobile e para o botao do lightbox
  const handleDownload = (e) => {
    e.stopPropagation();
    // Forca o download da imagem caso o atributo download falhe em links crus
    fetch(fotoAtual.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // Tenta pegar o nome do arquivo da URL ou fallback
        const filename = fotoAtual.src.split('/').pop() || 'foto-nossa-breja.jpg';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => {
        // Fallback abre em nova aba
        window.open(fotoAtual.src, '_blank');
      });
  };

  return (
    <div
      className="lightbox__overlay"
      onClick={handleOverlayClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      <button className="lightbox__fechar" onClick={onClose} aria-label="Fechar">
        <X size={32} />
      </button>

      <div className="lightbox__controles-superiores">
        <span className="lightbox__contador">
          {currentIndex + 1} / {fotos.length}
        </span>
        <button
          className="lightbox__download"
          onClick={handleDownload}
          aria-label="Baixar Foto"
          title="Baixar Foto"
        >
          <Download size={24} />
        </button>
      </div>

      <button className="lightbox__btn-nav lightbox__btn-prev" onClick={prevPhoto} aria-label="Anterior">
        <ChevronLeft size={48} />
      </button>

      <div className="lightbox__conteudo">
        <img
          src={fotoAtual.src}
          alt={fotoAtual.alt}
          className="lightbox__imagem"
          draggable="false"
        />
      </div>

      <button className="lightbox__btn-nav lightbox__btn-next" onClick={nextPhoto} aria-label="Proxima">
        <ChevronRight size={48} />
      </button>
    </div>
  );
}
