type Props = {
  onStart: (resume: boolean) => void;
  hasSave: boolean;
};

export function Landing({ onStart, hasSave }: Props) {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1>Dark Forest</h1>
        <p className="landing-lead">
          An interactive walkthrough of the Dark Forest hypothesis—a model used in
          discussions of the Fermi paradox. This is a sketch for thinking, not a
          claim about what is out there.
        </p>
      </header>
      <section className="landing-body">
        <p>
          The universe looks quiet. One explanation is simply that others are rare.
          Another is that many civilizations exist, but broadcasting your location is
          dangerous under uncertainty, technological explosion, and a{' '}
          <strong>chain of suspicion</strong>.
        </p>
        <p>
          Read the background on{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dark_forest_hypothesis"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia: Dark forest hypothesis
          </a>{' '}
          and the{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)"
            target="_blank"
            rel="noreferrer"
          >
            novel that popularized the metaphor
          </a>{' '}
          in fiction.
        </p>
      </section>
      <div className="landing-actions">
        <button
          type="button"
          className="primary-btn"
          onClick={() => onStart(false)}
        >
          Begin scenario
        </button>
        {hasSave && (
          <button
            type="button"
            className="secondary-btn"
            onClick={() => onStart(true)}
          >
            Continue saved run
          </button>
        )}
      </div>
    </div>
  );
}
