/* =========================================================================
   Eventos especiais do Nossa Breja Gastrobar
   Cada evento pode ter venda antecipada de ingresso via Cheers.
   O campo vendaAtiva controla se o botao de ingresso aparece no site.
   ========================================================================= */

export const eventosEspeciais = [
  {
    id: 'boteco-do-nossa-breja-34722',
    nome: 'Boteco do Nossa Breja',
    descricao: 'Artistas de forma simultanea em um palco 360, com um repertorio variado durante 3h de musicas!',
    data: '2026-08-08',
    horario: '19h',
    local: 'Nossa Breja Gastrobar',
    atracoes: ['Palco 360 com artistas variados'],
    preco: 'A partir de R$ 15,00',
    vendaAtiva: true,
    linkIngresso: 'https://cheers.com.br/evento/boteco-do-nossa-breja-34722',
    imagemBanner: 'https://uploads.cheers.com.br/media/event/banner/b00c6e961d0f1d979dc66c9e066d981b64bf2a305e53b4bf2b0fc2dd04c20efc.webp?v=1.193',
    destaque: true,
  },
];

/* Retorna apenas eventos futuros com venda ativa */
export function obterEventosAtivos() {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  return eventosEspeciais.filter((evento) => {
    const dataEvento = new Date(evento.data + 'T23:59:59');
    return evento.vendaAtiva && dataEvento >= hoje;
  });
}

/* Retorna o evento marcado como destaque, se houver e estiver ativo */
export function obterEventoDestaque() {
  const ativos = obterEventosAtivos();
  return ativos.find((evento) => evento.destaque) || ativos[0] || null;
}
