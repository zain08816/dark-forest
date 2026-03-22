import type { Choice } from '../story/types';

type Props = {
  choices: Choice[];
  onChoose: (nextId: string, effects: Choice['effects']) => void;
};

export function ChoiceList({ choices, onChoose }: Props) {
  if (choices.length === 0) return null;

  return (
    <div className="choice-list" role="group" aria-label="Choices">
      {choices.map((c) => (
        <button
          key={c.label}
          type="button"
          className="choice-btn"
          onClick={() => onChoose(c.nextId, c.effects)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
