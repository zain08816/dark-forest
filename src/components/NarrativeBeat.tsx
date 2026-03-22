import { useState } from 'react';
import type { StoryNode } from '../story/types';
import { RichParagraph } from './RichParagraph';

type Props = { node: StoryNode };

export function NarrativeBeat({ node }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article className="narrative-beat">
      <h1 className="beat-title">{node.title}</h1>
      <div className="beat-body">
        {node.body.split('\n\n').map((p, i) => (
          <p key={i}>
            <RichParagraph text={p} />
          </p>
        ))}
      </div>
      {node.whyItMatters && (
        <div className="why-box">
          <button
            type="button"
            className="why-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            Why this matters
          </button>
          {open && <p className="why-text">{node.whyItMatters}</p>}
        </div>
      )}
    </article>
  );
}
