export type Pair = { word: string; hint: string };
export type CategoryId = 'geral' | 'futebol' | 'personalizada';

export const CATEGORY_DATA: Record<CategoryId, Pair[]> = {
  geral: [
    { word: 'Espelho', hint: 'Verdade sem voz' },
    { word: 'Futebol', hint: 'Religião de domingo' },
    
    { word: 'Aeroporto', hint: 'Despedidas em série' },
    { word: 'Professor', hint: 'Autoridade com giz' },
    { word: 'Pai Natal', hint: 'Mentira coletiva' },
    { word: 'Cinema', hint: 'Escuridão partilhada' },
    { word: 'Chuva', hint: 'Desculpa para ficar' },
    { word: 'Segunda-feira', hint: 'Regresso inevitável' },
    { word: 'Barba', hint: 'paisagem masculina' },
    { word: 'Sushi', hint: 'asia' },
    { word: 'Tatuagem', hint: 'Decisão permanente' },
    { word: 'Ressaca', hint: 'Fatura da noite ' },
    { word: 'Padaria', hint: 'Cheiro que acorda o bairro' },
    { word: 'Sogra', hint: 'Parente por contrato' },
    { word: 'Lisboa', hint: 'eléctrico' },
    { word: 'Computador', hint: 'Cérebro emprestado' },

{ word: 'Trânsito', hint: 'Paciência testada' },

{ word: 'Médico', hint: 'Confiança obrigatória' },

{ word: 'Supermercado', hint: 'Tentação em corredores' },

{ word: 'Amigo', hint: 'Família escolhida' },

{ word: 'Fogo', hint: 'Calor indomável' },

{ word: 'Ar condicionado', hint: 'deus na terra' },

{ word: 'Teatro', hint: 'Mentira ao vivo' },

{ word: 'Dinossauro', hint: 'Passado gigante' },

{ word: 'Banco', hint: 'Confiança com juros' },

{ word: 'Carta', hint: 'Mensagem lenta' },



{ word: 'Montanha', hint: 'Desafio vertical' },

{ word: 'Desporto', hint: 'Competição organizada' },

{ word: 'Escola', hint: 'Obrigação coletiva' },

{ word: 'Ópera', hint: 'Drama cantado' },



{ word: 'Jantar', hint: 'Ritual noturno' },

{ word: 'Silêncio', hint: 'Barulho ausente' },

{ word: 'Mapa', hint: 'Mundo reduzido' }
  ],
  futebol: [
    { word: 'Ronaldo', hint: 'Acabado' },
    { word: 'Messi', hint: 'Palhaço' },
    { word: 'Vini JR', hint: 'Burro' },
    { word: 'Porto', hint: 'Castanho' },
    { word: 'Sporting', hint: 'Doente' },
    { word: 'Benfica', hint: 'Candeeiro' },
    { word: 'Camp Nou', hint: 'Despido' },
    { word: 'Old Trafford', hint: 'Velho' },
    { word: 'Bayern', hint: 'Precoce' },
    { word: 'Chelsea', hint: 'Nunca mais acaba' },
    { word: 'Bruno Fernandes', hint: 'Ferve rapidamente' },
    { word: 'Kanté', hint: 'Tem golo' },
    { word: 'Pepe', hint: 'Forte e feio' },
    { word: 'Figo', hint: 'Amadureceu' },
    { word: 'Bas Dost', hint: 'Careca' },

    { word: 'Mbappé', hint: 'Apressado' },

{ word: 'Haaland', hint: 'Robô' },

{ word: 'Neymar', hint: 'Piscinas' },

{ word: 'Modric', hint: 'Eterno' },

{ word: 'Sérgio Ramos', hint: 'Perigoso' },





{ word: 'Griezmann', hint: 'Esquisito' },

{ word: 'João Félix', hint: 'Promessa' },

{ word: 'Bernardo Silva', hint: 'Pequeno' },

{ word: 'Atlético Madrid', hint: 'Chato' },

{ word: 'Real Madrid', hint: 'Sorte' },

{ word: 'Barcelona', hint: 'Falido' },

{ word: 'PSG', hint: 'Rico' },

{ word: 'Juventus', hint: 'Velha' },

{ word: 'Anfield', hint: 'Barulhento' },

{ word: 'Santiago Bernabéu', hint: 'Luxo' },

{ word: 'San Siro', hint: 'Partilhado' },


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
    { word: 'Cagão', hint: 'Meu pau na tua mão'},
    { word: 'Papá do açucar', hint: 'Doce'},
    { word: 'Pro Clubs', hint: 'Abandonado'},
    { word: 'Fortnite', hint: 'Nostalgia'},
    { word: 'Tangerino', hint: 'Laranja'},
    { word: 'Madeira', hint: 'Prego'},
    { word: 'Costa Brava', hint: 'Carro'},
    { word: 'Jamor', hint: 'Bebedouro'},
    { word: 'Xereca', hint: 'Leste Europeu'},
    { word: 'Bailarina Capuccina', hint: 'Café em movimento'},
    { word: 'Mamada', hint: 'Alíviado'},
    { word: 'GTA', hint: 'Conduzir'},

  ],
};

export type Accent = { base: string; deep: string; warm: string; soft: string };

export const ACCENT: Accent = {
  base: '#8E5BFF',
  deep: '#4B1D9C',
  warm: '#FF78C4',
  soft: '#EFE7FF',
};

export const BG_GRADIENT = 'linear-gradient(180deg, #1a0f2e 0%, #130a24 55%, #08040f 100%)';

export const SURFACE = 'rgba(255,255,255,0.05)';
export const SURFACE_BORDER = '1px solid rgba(255,255,255,0.08)';
export const TEXT_PRIMARY = '#F5F2FF';
export const TEXT_MUTED = 'rgba(245,242,255,0.55)';
export const TEXT_FAINT = 'rgba(245,242,255,0.35)';

export const AVATAR_GRADIENTS: [string, string][] = [
  ['#FF6B9D', '#FFA8CC'], ['#5E60CE', '#64DFDF'], ['#F9C74F', '#F8961E'],
  ['#43AA8B', '#90BE6D'], ['#F94144', '#F3722C'], ['#277DA1', '#577590'],
  ['#9B5DE5', '#F15BB5'], ['#00BBF9', '#00F5D4'], ['#FEE440', '#FFB84C'],
  ['#EF476F', '#FFD166'],
];
