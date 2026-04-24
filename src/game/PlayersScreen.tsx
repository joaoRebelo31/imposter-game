import { useEffect, useState } from 'react';
import { AVATAR_GRADIENTS, type Accent } from './data';
import type { SetupConfig } from './SetupScreen';

type Props = {
  config: SetupConfig;
  names: string[];
  setNames: (names: string[]) => void;
  onBack: () => void;
  onStart: () => void;
  accent: Accent;
};

export default function PlayersScreen({ config, names, setNames, onBack, onStart, accent }: Props) {
  const [focusedIdx, setFocusedIdx] = useState(0);

  useEffect(() => {
    if (names.length !== config.players) {
      const next = Array.from({ length: config.players }, (_, i) => names[i] || '');
      setNames(next);
    }
  }, [config.players]);

  const updateName = (i: number, v: string) => {
    const next = [...names];
    next[i] = v;
    setNames(next);
  };

  const filledCount = names.filter(n => n.trim().length > 0).length;

  const initial = (name: string, idx: number) => {
    const t = name.trim();
    if (t) return t.charAt(0).toUpperCase();
    return String(idx + 1);
  };

  return (
    <div style={{
      minHeight: '100dvh',
      background: `linear-gradient(180deg, ${accent.soft} 0%, #F7F5FF 45%, #F2F2F7 100%)`,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ padding: 'calc(env(safe-area-inset-top) + 16px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 14, border: 'none', background: '#fff',
          cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16"><path d="M8 1L2 8l6 7" stroke="#111" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ flex: 1 }} />
        <div style={{
          fontSize: 12, fontWeight: 700, color: accent.deep,
          background: 'rgba(255,255,255,0.7)', padding: '6px 12px', borderRadius: 100,
          letterSpacing: 0.4, textTransform: 'uppercase',
        }}>
          {filledCount}/{config.players}
        </div>
      </div>

      <div style={{ padding: '24px 24px 12px' }}>
        <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1.2, color: '#111', lineHeight: 1.05 }}>
          Quem vai jogar ?
        </div>
        <div style={{ fontSize: 15, color: '#666', marginTop: 8 }}>
          Escreve o nome de cada jogador.
        </div>
      </div>

      <div style={{ padding: '14px 16px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {Array.from({ length: config.players }).map((_, i) => {
          const [c1, c2] = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
          const hasName = (names[i] || '').trim().length > 0;
          const focused = focusedIdx === i;
          return (
            <div key={i} style={{
              background: '#fff', borderRadius: 20, padding: '10px 12px 10px 10px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: focused ? `0 0 0 2px ${accent.base}, 0 4px 14px ${accent.base}30` : '0 1px 0 rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.15s',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 14,
                background: `linear-gradient(135deg, ${c1}, ${c2})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: 17,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
              }}>{initial(names[i] || '', i)}</div>
              <input
                type="text"
                value={names[i] || ''}
                onChange={e => updateName(i, e.target.value)}
                onFocus={() => setFocusedIdx(i)}
                placeholder={`Jogador ${i + 1}`}
                maxLength={20}
                style={{
                  flex: 1, border: 'none', outline: 'none', background: 'transparent',
                  fontSize: 17, fontWeight: 600, color: '#111', letterSpacing: -0.3,
                  minWidth: 0,
                }}
              />
              {hasName && (
                <button
                  onClick={() => updateName(i, '')}
                  style={{
                    width: 24, height: 24, borderRadius: 12, border: 'none',
                    background: '#EAEAEF', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" stroke="#888" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        padding: '12px 16px calc(env(safe-area-inset-bottom) + 20px)',
        background: 'linear-gradient(180deg, rgba(247,245,255,0) 0%, rgba(247,245,255,1) 30%)',
      }}>
        <button
          onClick={() => {
            const filled = Array.from({ length: config.players }, (_, i) =>
              (names[i] && names[i].trim()) ? names[i].trim() : `Jogador ${i + 1}`
            );
            setNames(filled);
            onStart();
          }}
          style={{
            width: '100%', height: 62, borderRadius: 20, border: 'none',
            background: `linear-gradient(135deg, ${accent.deep} 0%, ${accent.base} 55%, ${accent.warm} 100%)`,
            color: '#fff',
            fontSize: 19, fontWeight: 700, letterSpacing: -0.3,
            cursor: 'pointer',
            boxShadow: `0 10px 28px ${accent.base}55, inset 0 1px 0 rgba(255,255,255,0.25)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            transition: 'all 0.15s',
          }}
        >
          Começar
          <svg width="20" height="20" viewBox="0 0 20 20"><path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
