import { BG_GRADIENT, type Accent, type CategoryId } from './data';

export type SetupConfig = {
  players: number;
  imposters: number;
  categories: CategoryId[];
};

type Props = {
  config: SetupConfig;
  setConfig: (updater: (c: SetupConfig) => SetupConfig) => void;
  onStart: () => void;
  accent: Accent;
};

type StepperProps = {
  value: number;
  set: (v: number) => void;
  min: number;
  max: number;
  label: string;
  sub?: string;
};

function Stepper({ value, set, min, max, label, sub }: StepperProps) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)', borderRadius: 24, padding: '18px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      border: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div>
        <div style={{ fontSize: 17, fontWeight: 600, color: '#F5F2FF', letterSpacing: -0.3 }}>{label}</div>
        {sub && <div style={{ fontSize: 13, color: 'rgba(245,242,255,0.5)', marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button
          onClick={() => value > min && set(value - 1)}
          disabled={value <= min}
          style={{
            width: 34, height: 34, borderRadius: 17, border: 'none',
            background: value <= min ? 'rgba(255,255,255,0.06)' : '#8E5BFF', color: value <= min ? 'rgba(255,255,255,0.25)' : '#ffffff',
            fontSize: 22, fontWeight: 600, cursor: value <= min ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: 3,
          }}
        >−</button>
        <div style={{ minWidth: 26, textAlign: 'center', fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: '#F5F2FF' }}>
          {value}
        </div>
        <button
          onClick={() => value < max && set(value + 1)}
          disabled={value >= max}
          style={{
            width: 34, height: 34, borderRadius: 17, border: 'none',
            background: value >= max ? 'rgba(255,255,255,0.06)' : '#8E5BFF', color: value >= max ? 'rgba(255,255,255,0.25)' : '#ffffff',
            fontSize: 22, fontWeight: 500, cursor: value >= max ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: 2,
          }}
        >+</button>
      </div>
    </div>
  );
}

const categories: { id: CategoryId; label: string; emoji: string; sub: string }[] = [
  { id: 'geral', label: 'Geral', emoji: '🌍', sub: 'Palavras do dia-a-dia' },
  { id: 'futebol', label: 'Futebol', emoji: '⚽', sub: 'Jogadores, clubes, estádios' },
  { id: 'personalizada', label: 'Personalizada', emoji: '🪄', sub: 'As tuas palavras' },
];

export default function SetupScreen({ config, setConfig, onStart, accent }: Props) {
  const { players, imposters, categories: selected } = config;
  const safeImposters = Math.min(imposters, Math.max(1, players - 2));
  const canStart = selected.length > 0;

  const toggleCategory = (id: CategoryId) => {
    setConfig(c => {
      const has = c.categories.includes(id);
      const next = has ? c.categories.filter(x => x !== id) : [...c.categories, id];
      return { ...c, categories: next };
    });
  };

  return (
    <div style={{
      minHeight: '100dvh', position: 'relative',
      background: BG_GRADIENT,
    }}>
      <div style={{ padding: 'calc(env(safe-area-inset-top) + 24px) 24px 20px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          fontSize: 44, fontWeight: 900, lineHeight: 1, marginTop: 8,
          letterSpacing: -1.6,
          background: `linear-gradient(135deg, ${accent.deep} 0%, ${accent.base} 60%, ${accent.warm} 100%)`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          IMPOSTOR
        </div>
      </div>

      <div style={{ padding: '8px 16px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        
        <div style={{ marginTop: 8, marginBottom: 4, padding: '0 4px', fontSize: 13, fontWeight: 700, color: 'rgba(245,242,255,1)', textTransform: 'uppercase', letterSpacing: 0.6 }}>
          Número de jogadores
        </div>

        <Stepper
          value={players}
          set={(v) => setConfig(c => ({ ...c, players: v, imposters: Math.min(c.imposters, v - 2) }))}
          min={3} max={10} label="Jogadores" sub="Mínimo 3, máximo 10"
        />
        <Stepper
          value={safeImposters}
          set={(v) => setConfig(c => ({ ...c, imposters: v }))}
          min={1} max={Math.max(1, players - 2)} label="Impostores"
          sub="Mínimo 1"
        />

        <div style={{ marginTop: 8, marginBottom: 4, padding: '0 4px', fontSize: 13, fontWeight: 700, color: 'rgba(245,242,255,1)', textTransform: 'uppercase', letterSpacing: 0.6 }}>
          Categorias de palavras
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {categories.map(cat => {
            const isSelected = selected.includes(cat.id);
            return (
              <button key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                style={{
                  border: isSelected ? `1px solid ${accent.base}` : '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'left', cursor: 'pointer',
                  background: isSelected ? `${accent.base}22` : 'rgba(255,255,255,0.05)',
                  color: '#F5F2FF',
                  borderRadius: 24, padding: '16px 18px',
                  display: 'flex', alignItems: 'center', gap: 14,
                  boxShadow: isSelected ? `0 8px 24px ${accent.base}40` : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: isSelected ? accent.base : 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>{cat.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.3 }}>{cat.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(245,242,255,0.5)', marginTop: 1 }}>{cat.sub}</div>
                </div>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  border: isSelected ? 'none' : '1.5px solid rgba(255,255,255,0.25)',
                  background: isSelected ? accent.base : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {isSelected && (
                    <svg width="12" height="10" viewBox="0 0 12 10"><path d="M1 5l3.5 3.5L11 2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '0 16px calc(env(safe-area-inset-bottom) + 24px)' }}>
        <button
          onClick={onStart}
          disabled={!canStart}
          style={{
            width: '100%', height: 62, borderRadius: 20, border: 'none',
            background: canStart
              ? `linear-gradient(135deg, ${accent.deep} 0%, ${accent.base} 55%, ${accent.warm} 100%)`
              : 'rgba(255,255,255,0.08)',
            color: '#fff', fontSize: 19, fontWeight: 700, letterSpacing: -0.3,
            cursor: canStart ? 'pointer' : 'not-allowed',
            boxShadow: canStart ? `0 10px 28px ${accent.base}55, inset 0 1px 0 rgba(255,255,255,0.25)` : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            opacity: canStart ? 1 : 0.85,
          }}
        >
          {canStart ? 'Jogar' : 'Escolhe pelo menos uma categoria'}
        </button>
      </div>
    </div>
  );
}
