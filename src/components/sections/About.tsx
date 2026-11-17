export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              03 / A little about me
            </p>

            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Beyond the code.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9">
              I&apos;m Nihal, a software developer interested in building software
              applications and understanding the engineering behind them.
            </p>

            <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
              I enjoy working across the application stack, from designing
              backend APIs and data workflows to building interfaces that make
              complex functionality easier to use.
            </p>

            <p className="mt-5 text-sm leading-8 text-[var(--color-muted)]">
              My project experience has introduced me to application
              architecture, asynchronous processing, database design, real-time
              communication, and AI-powered workflows. I believe the best way to
              learn software engineering is by building, testing, and improving
              real applications.
            </p>

            <div className="mt-12 grid gap-8 border-t border-[var(--color-border)] pt-7 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  Education
                </p>

                <h3 className="mt-3 font-serif text-xl">
                  Master of Computer Applications
                </h3>

                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  TKM College of Engineering
                </p>

                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Graduated April 2026
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  Focus
                </p>

                <h3 className="mt-3 font-serif text-xl">
                  Software Engineering
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Backend development, Java applications, full-stack
                  development, and system design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
