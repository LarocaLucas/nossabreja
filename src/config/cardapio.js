/* =========================================================================
   Destaques do cardapio - Nossa Breja Gastrobar
   Itens de vitrine para o site. Nao e o cardapio completo;
   o completo fica no Mogo Menu (link externo).
   ========================================================================= */

import imgHamburguer from '../assets/imagens/cardapio-hamburguer.png';
import imgDrinks from '../assets/imagens/cardapio-drinks.png';
import imgPetiscos from '../assets/imagens/cardapio-petiscos.png';

export const destaquesCardapio = [
  {
    id: 'hamburguer-artesanal',
    nome: 'Hamburguer Artesanal',
    categoria: 'Burgers',
    descricao: 'Blend da casa, queijo derretido, bacon crocante e molho especial. Servido com fritas temperadas.',
    imagem: imgHamburguer,
    destaque: true,
  },
  {
    id: 'drinks-autorais',
    nome: 'Drinks Autorais',
    categoria: 'Drinks',
    descricao: 'Maracuja Jack, Pagodrink, Doce Ilusao e mais. Cada um com a cara do Nossa Breja.',
    imagem: imgDrinks,
    destaque: true,
  },
  {
    id: 'petiscos-da-casa',
    nome: 'Petiscos da Casa',
    categoria: 'Petiscos',
    descricao: 'Porcoes generosas pra dividir com a galera. Perfeitas com uma breja gelada na mao.',
    imagem: imgPetiscos,
    destaque: true,
  },
];
