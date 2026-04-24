import { useEffect, useState } from 'react';
import {BG_GRADIENT, type Accent } from './data';

export type Assignment = { isImposter: boolean; word: string; hint: string };

type Props = {
  names: string[];
  assignments: Assignment[];
  onBack: () => void;
  onFinish: () => void;
  accent: Accent;
};

export default function RevealScreen({ names, assignments, onBack, onFinish, accent }: Props) {
  const [idx, setIdx] = useState(0);
  const [holding, setHolding] = useState(false);

  const total = names.length;
  const currentName = names[idx] || `Jogador ${idx + 1}`;
  const assignment = assignments[idx];

  const next = () => {
    setHolding(false);
    if (idx < total - 1) setIdx(idx + 1);
    else onFinish();
  };

  const startHold = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* empty */ }
    setHolding(true);
  };
  const endHold = () => setHolding(false);

  useEffect(() => {
    if (!holding) return;
    const release = () => setHolding(false);
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', release);
    document.addEventListener('visibilitychange', release);
    return () => {
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', release);
      document.removeEventListener('visibilitychange', release);
    };
  }, [holding]);

  const isImposter = !!assignment?.isImposter;
  const displayText = isImposter ? assignment?.hint : assignment?.word;
  const badgeText = isImposter ? 'És o impostor' : 'A tua palavra';
  const badgeSub = isImposter ? 'Apenas uma dica para ti' : 'Memoriza-a bem';

  return (
    <div style={{
      minHeight: '100dvh',
      background: holding
        ? (isImposter
          ? 'linear-gradient(180deg, #1a0a1a 0%, #471120 100%)'
          : `linear-gradient(180deg, #140d23 0%, #8052e3 100%)`)
        : BG_GRADIENT,
      transition: 'background 0.35s ease',
      display: 'flex', flexDirection: 'column',
      color: '#F5F2FF',
    }}>
      <div style={{ padding: 'calc(env(safe-area-inset-top) + 16px) 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 14,
          border: holding ? 'none' : '1px solid rgba(255,255,255,0.08)',
          background: holding ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s',
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16"><path d="M8 1L2 8l6 7" stroke="#F5F2FF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 5 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{
              width: i === idx ? 22 : 6, height: 6, borderRadius: 3,
              background: i < idx
                ? accent.base
                : i === idx
                  ? '#F5F2FF'
                  : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
        <div style={{ width: 40 }} />
      </div>

      <div key={idx} className="player-enter" style={{ padding: '30px 24px 0', textAlign: 'center' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase',
          marginTop: 20, opacity: 0.6,
        }}>A vez de</div>
        <div style={{
          fontSize: 32, fontWeight: 900, letterSpacing: -1, marginTop: 4,
          color: '#F5F2FF',
        }}>{currentName}</div>
      </div>

      <div key={`card-${idx}`} className="player-enter" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px 24px 12px',
      }}>
        <div
          onPointerDown={startHold}
          onPointerUp={endHold}
          onPointerCancel={endHold}
          onPointerLeave={endHold}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            width: '100%', aspectRatio: '1 / 1', maxHeight: 300,
            borderRadius: 36, position: 'relative',
            cursor: 'pointer',
            overflow: 'hidden',
            background: holding
              ? (isImposter ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.15)')
              : 'rgba(255,255,255,0.05)',
            boxShadow: holding
              ? '0 20px 60px rgba(0,0,0,0.4)'
              : `0 16px 44px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
            transition: 'background 0.3s, transform 0.15s',
            transform: holding ? 'scale(0.98)' : 'scale(1)',
            userSelect: 'none', WebkitUserSelect: 'none',
            touchAction: 'none', WebkitTouchCallout: 'none',
            border: holding ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {!holding && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 76, height: 76, borderRadius: 24, margin: '0 auto',
                background: `linear-gradient(135deg, ${accent.deep}, ${accent.base})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 8px 24px ${accent.base}55, inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}>
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="#fff" strokeWidth="2" />
                  <path d="M8 11V8a4 4 0 018 0v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, marginTop: 22, color: '#F5F2FF', letterSpacing: -0.3 }}>
                Pressiona para revelar
              </div>
              <div style={{ fontSize: 14, color: 'rgba(245,242,255,0.5)', marginTop: 6, padding: '0 20px', lineHeight: 1.4 }}>
                Mantém premido. Solta para esconder.
              </div>
            </div>
          )}

          {holding && (
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                background: isImposter ? 'rgba(220, 38, 56, 0.85)' : 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(10px)',
                padding: '5px 11px', borderRadius: 100,
                fontSize: 11, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase',
                color: '#fff',
              }}>
                {badgeText}
              </div>
              <div style={{
                fontSize: displayText && displayText.length > 14 ? 32 : 44,
                fontWeight: 900, letterSpacing: -1.2, marginTop: 18,
                color: '#fff', lineHeight: 1.05, padding: '0 4px',
              }}>
                {displayText}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 14, letterSpacing: -0.2 }}>
                {badgeSub}
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: '12px 16px calc(env(safe-area-inset-bottom) + 20px)' }}>
        <button
          onClick={next}
          style={{
            width: '100%', height: 62, borderRadius: 20, border: 'none',
            background: holding ? 'rgba(255,255,255,0.95)' : `linear-gradient(135deg, ${accent.deep} 0%, ${accent.base} 100%)`,
            color: holding ? '#111' : '#fff',
            fontSize: 19, fontWeight: 700, letterSpacing: -0.3,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            transition: 'all 0.25s',
          }}
        >
          {idx < total - 1 ? 'Próximo jogador' : 'Começar a discussão'}
        </button>
      </div>
    </div>
  );
}
