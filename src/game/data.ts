export type Pair = { word: string; hint: string };
export type CategoryId = 'geral' | 'futebol' | 'personalizada';

export const CATEGORY_DATA: Record<CategoryId, Pair[]> = {
  geral: [
    { word: 'Espelho', hint: 'Verdade sem voz' },
    { word: 'Casamento', hint: 'Promessa com plateia' },
    { word: 'Futebol', hint: 'Religião de domingo' },
    { word: 'Supermercado', hint: 'Labirinto com carrinho' },
    { word: 'Aeroporto', hint: 'Despedidas em série' },
    { word: 'Professor', hint: 'Autoridade com giz' },
    { word: 'Telemóvel', hint: 'Extensão do polegar' },
    { word: 'Pai Natal', hint: 'Mentira coletiva' },
    { word: 'Cinema', hint: 'Escuridão partilhada' },
    { word: 'Chuva', hint: 'Desculpa para ficar' },
    { word: 'Segunda-feira', hint: 'Regresso inevitável' },
    { word: 'Barba', hint: 'Paisagem masculina' },
    { word: 'Sushi', hint: 'Arte em bocados' },
    { word: 'Tatuagem', hint: 'Decisão permanente' },
    { word: 'Polícia', hint: 'Autoridade fardada' },
    { word: 'Ressaca', hint: 'Fatura da noite anterior' },
    { word: 'Padaria', hint: 'Cheiro que acorda o bairro' },
    { word: 'Piscina', hint: 'Azul com cloro' },
    { word: 'Sogra', hint: 'Parente por contrato' },
    { word: 'Lisboa', hint: 'Sete colinas com eléctrico' },
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
    { word: 'Pepe', hint: 'Feio' },
    { word: 'Figo', hint: 'Amadureceu' },
    { word: 'Bas Dost', hint: 'Careca' },
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
    { word: 'Papá do açucar', hint: 'Doce'}
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
