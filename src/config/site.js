/* =========================================================================
   Configuracao global do site Nossa Breja Gastrobar
   Dados centralizados: contato, endereco, redes sociais, horarios
   ========================================================================= */

export const dadosSite = {
  nome: 'Nossa Breja Gastrobar',
  tagline: 'Breja, comida e musica boa!',
  descricao: 'Musica boa, gastronomia de qualidade e experiencias marcantes. Vem pro seu barzinho favorito!',

  endereco: {
    rua: 'Rua Dantas Ribeiro, 454',
    cidade: 'Pirai do Sul',
    estado: 'PR',
    completo: 'Rua Dantas Ribeiro, 454, Pirai do Sul, PR',
    /* Coordenadas para o Google Maps embed */
    latitude: -24.5286,
    longitude: -49.9461,
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5!2d-49.9461!3d-24.5286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Dantas+Ribeiro%2C+454+-+Pira%C3%AD+do+Sul%2C+PR!5e0!3m2!1spt-BR!2sbr',
  },

  horario: {
    dias: 'Quarta a Domingo',
    abertura: '18h30',
    texto: 'De quarta a domingo, a partir das 18h30',
  },

  contato: {
    whatsappNumero: '554291192668',
    whatsappMensagem: 'Ola! Gostaria de reservar uma mesa. Para o dia: Para __ pessoas',
    whatsappLink: 'https://wa.me/554291192668?text=Ola!%20Gostaria%20de%20reservar%20uma%20mesa.%20Para%20o%20dia:%20Para%20__%20pessoas',
  },

  redesSociais: {
    instagram: 'https://www.instagram.com/nossabreja__/',
    instagramHandle: '@nossabreja__',
  },

  linksExternos: {
    mogoMenu: 'https://app.mogomenu.com.br/nossabrejagastrobar',
    cheersPerfil: 'https://cheers.com.br/pagina/nossa-breja~15338',
  },

  cervejaria: 'Patanegra Cervejaria',

  seo: {
    tituloBase: 'Nossa Breja Gastrobar',
    descricaoPadrao: 'Bar e gastrobar em Pirai do Sul, PR. Cerveja artesanal, hamburguer artesanal, drinks autorais e musica ao vivo de quarta a domingo.',
    palavrasChave: 'bar, gastrobar, pirai do sul, cerveja artesanal, musica ao vivo, hamburguer artesanal, drinks',
  },
};
