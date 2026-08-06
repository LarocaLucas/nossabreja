/* =========================================================================
   Pagina Home - Monta todas as secoes em sequencia
   ========================================================================= */

import Hero from '../secoes/Hero';
import Sobre from '../secoes/Sobre';
import AgendaPrevia from '../secoes/AgendaPrevia';
import EventoDestaque from '../secoes/EventoDestaque';
import CardapioPrevia from '../secoes/CardapioPrevia';
import GaleriaPrevia from '../secoes/GaleriaPrevia';
import Localizacao from '../secoes/Localizacao';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <AgendaPrevia />
      <EventoDestaque />
      <CardapioPrevia />
      <GaleriaPrevia />
      <Localizacao />
    </main>
  );
}
