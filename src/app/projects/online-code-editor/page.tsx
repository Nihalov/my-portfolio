import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const technologies = [
  'Java 21',
  'Spring Boot',
  'Spring Security',
  'PostgreSQL',
  'RabbitMQ',
  'Redis',
  'Docker',
  'WebSockets',
];

const workflow = [
  {
    number: '01',
    title: 'Write code',
    description:
      'Users write and manage solutions through the online coding interface.',
  },
  {
    number: '02',
    title: 'Submit solution',
    description:
      'The backend receives the submission and prepares it for execution.',
  },
  {
    number: '03',
    title: 'Process asynchronously',
    description:
      'Background processing handles execution requests without blocking the main application flow.',
  },
  {
    number: '04',
    title: 'Evaluate results',
    description:
      'The submitted solution is evaluated against test cases and the result is returned to the user.',
  },
];

export default function OnlineCodeEditorPage() {
  return (
    <>
      <Navbar />

      <main className="section-padding">
        <div className="container">
          <Link
            href="/#work"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            ← Back to selected work
          </Link>

          {/* Hero */}
          <section className="mt-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Project 01 / Developer tools
            </p>

            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
              Interactive Coding Practice Platform
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              A full-stack coding practice platform that brings together
              programming challenges, code execution, automated evaluation, and
              a persistent virtual workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Nihalov/Interactive-Coding-Practice-Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--color-border)] px-5 py-3 text-sm transition-colors hover:border-[var(--color-accent)]"
              >
                View source code ↗
              </a>

              <span className="px-2 py-3 text-sm text-[var(--color-muted)]">
                Independently developed
              </span>
            </div>
          </section>

          {/* Project details */}
          <section className="mt-20 grid gap-8 border-y border-[var(--color-border)] py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Project type
              </p>
              <p className="mt-3 text-sm">Full-stack application</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Primary focus
              </p>
              <p className="mt-3 text-sm">Backend & code execution</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Status
              </p>
              <p className="mt-3 text-sm">In development</p>
            </div>
          </section>

          {/* Problem */}
          <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              01 / The problem
            </p>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Making coding practice more than just writing code.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
                Practising programming involves more than writing a solution.
                Developers need an environment to execute code, validate
                solutions against test cases, understand their mistakes, and
                keep track of their work.
              </p>

              <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                I developed this platform to bring these activities together in
                one coding practice environment.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              02 / The solution
            </p>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                An integrated coding environment.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
                The platform combines coding challenges, an online code editor,
                code execution, and automated evaluation.
              </p>

              <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                A key feature is the virtual workspace, which provides users
                with a persistent environment to organise their work, perform
                algorithm dry-runs, and maintain notes.
              </p>
            </div>
          </section>

          {/* Execution workflow */}
          <section className="mt-24">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              03 / Execution workflow
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              From code submission to evaluation.
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => (
                <article
                  key={step.number}
                  className="border border-[var(--color-border)] p-6"
                >
                  <p className="text-sm text-[var(--color-accent)]">
                    {step.number}
                  </p>

                  <h3 className="mt-6 font-serif text-xl">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Virtual workspace */}
          <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              04 / Featured capability
            </p>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                A persistent virtual workspace.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
                The virtual workspace extends the coding experience beyond the
                editor. It gives users a dedicated space to work through
                algorithms, organise their thoughts, and save useful working
                information.
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l border-[var(--color-accent)] pl-5">
                  <h3 className="font-medium">Workspace persistence</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Designed to retain workspace information across sessions
                    rather than treating each visit as a temporary editing
                    session.
                  </p>
                </div>

                <div className="border-l border-[var(--color-accent)] pl-5">
                  <h3 className="font-medium">Structured workspace data</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Versioned JSON schemas help maintain a consistent structure
                    as workspace data evolves.
                  </p>
                </div>

                <div className="border-l border-[var(--color-accent)] pl-5">
                  <h3 className="font-medium">Reliable processing</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Asynchronous messaging and failure-handling patterns support
                    background operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Engineering decisions */}
          <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              05 / Engineering decisions
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl">Asynchronous processing</h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  Background job processing separates time-consuming operations
                  from the application&apos;s request-response flow. RabbitMQ is used
                  for message-based communication between processing components.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">Failure handling</h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  Retry and dead-letter handling provide a structured approach
                  to failed background jobs, helping prevent repeated failures
                  from disrupting normal processing.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">Containerised execution</h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  Docker provides an isolated environment for executing
                  submitted code, helping separate user code execution from the
                  main application.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">
                  Data and caching strategy
                </h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  PostgreSQL provides persistent relational storage, while Redis
                  can support caching and fast access to frequently needed data
                  where appropriate.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="mt-24 border-t border-[var(--color-border)] pt-12">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              06 / Technology
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Tools behind the platform.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section className="mt-24 border-t border-[var(--color-border)] py-12">
            <p className="text-sm text-[var(--color-muted)]">
              Explore the implementation
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Built from the ground up.
            </h2>

            <a
              href="https://github.com/Nihalov/Interactive-Coding-Practice-Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block border-b border-[var(--color-accent)] pb-2 text-sm hover:text-[var(--color-accent)]"
            >
              View GitHub repository ↗
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
