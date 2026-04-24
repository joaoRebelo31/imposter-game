export type Pair = { word: string; hint: string };
export type CategoryId = 'geral' | 'futebol' | 'personalizada';

export const CATEGORY_DATA: Record<CategoryId, Pair[]> = {
  geral: [
    { word: 'Praia', hint: 'Grãos infinitos' },
    { word: 'Pizza', hint: 'Fatias partilhadas' },
    { word: 'Avião', hint: 'Metal com asas' },
    { word: 'Biblioteca', hint: 'Ecossistema de sussurros' },
    { word: 'Netflix', hint: 'Ritual de fim de dia' },
    { word: 'Dentista', hint: 'Alguém que te põe a boca aberta' },
    { word: 'Natal', hint: 'Noite de luzes antigas' },
    { word: 'Guitarra', hint: 'Madeira que canta' },
    { word: 'Café', hint: 'Despertar líquido' },
    { word: 'Elevador', hint: 'Caixa que desafia a gravidade' },
    { word: 'Fotografia', hint: 'Memória congelada' },
    { word: 'Chocolate', hint: 'Tentação que derrete' },
    { word: 'Hospital', hint: 'Lugar de recomeços' },
    { word: 'Bicicleta', hint: 'Equilíbrio em movimento' },
    { word: 'Oceano', hint: 'Imensidão salgada' },
  ],
  futebol: [
    { word: 'Cristiano Ronaldo', hint: 'Obsessão pelo número um' },
    { word: 'Lionel Messi', hint: 'Baíxinho de ouro' },
    { word: 'Benfica', hint: 'Eterna primeira linha' },
    { word: 'FC Porto', hint: 'Invicto por natureza' },
    { word: 'Sporting CP', hint: 'Juventude nas veias' },
    { word: 'Real Madrid', hint: 'Casa da nobreza branca' },
    { word: 'Camp Nou', hint: 'Templo perto do Mediterrâneo' },
    { word: 'Old Trafford', hint: 'Palco dos diabos' },
    { word: 'Pelé', hint: 'Três vezes no topo do mundo' },
    { word: 'VAR', hint: 'Olho que nunca esquece' },
    { word: 'Champions League', hint: 'Hino das quintas-feiras às terças' },
    { word: 'Hat-trick', hint: 'Trilogia num só ato' },
    { word: 'Pepe', hint: 'Muralha com sotaque brasileiro' },
    { word: 'Figo', hint: 'Travessia polémica entre rivais' },
    { word: 'Maracanã', hint: 'Gigante que já chorou em 50' },
  ],
  personalizada: [
    { word: 'Marina', hint: 'Porto de abrigo' },
    { word: 'Isadora', hint: 'Exploradora' },
    { word: 'Cristina', hint: 'Ronaldo' },
    { word: 'Carla', hint: 'Tomar banho' },
    { word: 'Suzy', hint: 'Cenoura' },
    { word: 'Nídia', hint: 'Polivalente' },
    { word: 'Rebejo', hint: 'Transferir dinheiro' },
    { word: 'Dias', hint: 'Quase não se vê' },
    { word: 'Street', hint: 'Areia' },
    { word: 'Félix', hint: 'Monstruoso' },
    { word: 'Rolo', hint: 'Pássaro' },
    { word: 'Pipo', hint: 'Aeroporto' },
  ],
};

export type Accent = { base: string; deep: string; warm: string; soft: string };

export const ACCENT: Accent = {
  base: '#8E5BFF',
  deep: '#4B1D9C',
  warm: '#FF78C4',
  soft: '#EFE7FF',
};

export const AVATAR_GRADIENTS: [string, string][] = [
  ['#FF6B9D', '#FFA8CC'], ['#5E60CE', '#64DFDF'], ['#F9C74F', '#F8961E'],
  ['#43AA8B', '#90BE6D'], ['#F94144', '#F3722C'], ['#277DA1', '#577590'],
  ['#9B5DE5', '#F15BB5'], ['#00BBF9', '#00F5D4'], ['#FEE440', '#FFB84C'],
  ['#EF476F', '#FFD166'],
];
