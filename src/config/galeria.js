/* =========================================================================
   Galeria de eventos - Nossa Breja Gastrobar
   Integrado com Cloudflare R2
   ========================================================================= */

// TODO: Cole aqui o endereco publico do seu bucket R2!
// Exemplo: 'https://pub-abcdef123456.r2.dev'
export const BASE_URL_R2 = 'https://pub-9fbfcd55584544da98451ebf6ef85d8d.r2.dev/SIMBORASIM';

// Funcao para gerar a lista de fotos de 01.jpg a 168.jpg
const gerarFotos = (quantidade) => {
  return Array.from({ length: quantidade }, (_, i) => {
    // PadStart garante que 1 vire 01, 2 vire 02, etc. (se no bucket estiverem como 01.jpg, 02.jpg...)
    // Caso no bucket esteja 1.jpg, 2.jpg, remova o padStart(2, '0')
    const numeroStr = String(i + 1).padStart(2, '0');
    return {
      src: `${BASE_URL_R2}/${numeroStr}.jpg`,
      alt: `Foto ${numeroStr} do evento`,
    };
  });
};

export const albumsGaleria = [
  {
    slug: 'simborasim',
    nome: 'Simborasim',
    data: '2026-08-08',
    descricao: 'Confira os registros oficiais do Simborasim!',
    capa: `${BASE_URL_R2}/01.jpg`, // Usa a foto 1 como capa
    fotos: gerarFotos(168),
  },
];
