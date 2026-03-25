import { useId, useState } from 'react';
import type { Choice } from '../story/types';
import { buildChoicePreview, previewHasAny } from '../story/choicePreview';
import { RichParagraph } from './RichParagraph';

type Props = {
  choices: Choice[];
  onChoose: (
    nextId: string,
    effects: Choice['effects'],
    choiceIndex: number
  ) => void;
};

export function ChoiceList({ choices, onChoose }: Props) {
  const [showHints, setShowHints] = useState(false);
  const toggleSuffix = useId();

  if (choices.length === 0) return null;

  const anyPreview = choices.some((c) => previewHasAny(buildChoicePreview(c)));

  return (
    <div className="choice-list-wrap">
      {anyPreview && (
        <div className="choice-hints-toolbar">
          <button
            type="button"
            className="linkish choice-hints-toggle"
            aria-pressed={showHints}
            aria-controls={`choice-previews-${toggleSuffix}`}
            onClick={() => setShowHints((v) => !v)}
          >
            {showHints ? 'Hide outcome previews' : 'Show outcome previews'}
          </button>
        </div>
      )}
      <div
        className="choice-list"
        role="group"
        aria-label="Choices"
        id={anyPreview ? `choice-previews-${toggleSuffix}` : undefined}
      >
        {choices.map((c, i) => {
          const preview = buildChoicePreview(c);
          const hasPreview = previewHasAny(preview);
          const previewId = `choice-preview-${toggleSuffix}-${i}`;

          return (
            <div key={`${c.nextId}-${i}`} className="choice-block">
              <button
                type="button"
                className="choice-btn"
                onClick={() => onChoose(c.nextId, c.effects, i)}
                aria-describedby={showHints && hasPreview ? previewId : undefined}
              >
                {c.label}
              </button>
              {showHints && hasPreview && (
                <div className="choice-preview" id={previewId}>
                  {preview.hint &&
                    preview.hint.split('\n\n').map((para, j) => (
                      <p key={j} className="choice-preview-line choice-preview-hint">
                        <RichParagraph text={para} />
                      </p>
                    ))}
                  {preview.effectsLine && (
                    <p className="choice-preview-line choice-preview-effects">{preview.effectsLine}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
