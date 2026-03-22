import { motion, useReducedMotion } from 'framer-motion';
import type { TimelineEntry } from '../story/types';

type Props = {
  entries: TimelineEntry[];
  currentId: string;
};

export function Timeline({ entries, currentId }: Props) {
  const reduce = useReducedMotion();
  const curIdx = entries.findIndex((x) => x.id === currentId);

  return (
    <aside className="timeline-rail" aria-label="Scenario timeline">
      <h2 className="timeline-heading">Timeline</h2>
      <ol className="timeline-list">
        {entries.map((e, i) => {
          const isCurrent = e.id === currentId;
          const isPast = curIdx >= 0 && i < curIdx;
          return (
            <motion.li
              key={`${e.id}-${i}`}
              className={`timeline-item ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}`}
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <div
                className="timeline-row"
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span className="timeline-dot" />
                <span className="timeline-body">
                  <span className="timeline-title">{e.title}</span>
                  <span className="timeline-summary">{e.summary}</span>
                </span>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </aside>
  );
}
