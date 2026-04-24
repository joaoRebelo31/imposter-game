import { useState } from 'react';
import SetupScreen, { type SetupConfig } from './game/SetupScreen';
import PlayersScreen from './game/PlayersScreen';
import RevealScreen, { type Assignment } from './game/RevealScreen';
import { ACCENT, CATEGORY_DATA } from './game/data';

type Screen = 'setup' | 'players' | 'reveal';

export default function App() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [config, setConfig] = useState<SetupConfig>({ players: 5, imposters: 1, categories: ['geral'] });
  const [names, setNames] = useState<string[]>(['', '', '', '', '']);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [shuffledNames, setShuffledNames] = useState<string[]>([]);

  const buildAssignments = () => {
    const selected = config.categories.length ? config.categories : (['geral'] as const);
    const pool = selected.flatMap(id => CATEGORY_DATA[id] ?? []);
    const pair = pool[Math.floor(Math.random() * pool.length)];

    const order = [...names];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    const indices = Array.from({ length: config.players }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const imposterSet = new Set(indices.slice(0, Math.max(1, config.imposters)));
    const assigns: Assignment[] = Array.from({ length: config.players }, (_, i) => ({
      isImposter: imposterSet.has(i),
      word: pair.word,
      hint: pair.hint,
    }));

    setShuffledNames(order);
    setAssignments(assigns);
  };

  const goReveal = () => {
    buildAssignments();
    setScreen('reveal');
  };

  return (
    <div style={{
      minHeight: '100dvh', width: '100%',
      background: '#08040f', position: 'relative', overflow: 'hidden',
    }}>
        {screen === 'setup' && (
          <SetupScreen config={config} setConfig={(u) => setConfig(u)} onStart={() => setScreen('players')} accent={ACCENT} />
        )}
        {screen === 'players' && (
          <PlayersScreen
            config={config}
            names={names}
            setNames={setNames}
            onBack={() => setScreen('setup')}
            onStart={goReveal}
            accent={ACCENT}
          />
        )}
        {screen === 'reveal' && (
          <RevealScreen
            names={shuffledNames.length ? shuffledNames : names}
            assignments={assignments}
            onBack={() => setScreen('players')}
            onFinish={() => setScreen('setup')}
            accent={ACCENT}
          />
        )}
    </div>
  );
}
