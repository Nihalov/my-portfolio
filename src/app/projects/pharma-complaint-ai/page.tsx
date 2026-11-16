import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const technologies = [
  'React',
  'Redux Toolkit',
  'RTK Query',
  'FastAPI',
  'Python',
  'PostgreSQL',
  'LangGraph',
  'Gemini API',
];

export default function PharmaComplaintAIPage() {
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

          {/* Project introduction */}
          <section className="mt-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Project 02 / AI-powered application
            </p>

            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
              Pharma ComplaintAI
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              An AI-assisted complaint management system designed to transform
              unstructured pharmaceutical complaints into structured records
              with risk assessment and traceable updates.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Nihalov/Pharma-ComplaintAI"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--color-border)] px-5 py-3 text-sm transition-colors hover:border-[var(--color-accent)]"
              >
                View source code ↗
              </a>

              <span className="px-2 py-3 text-sm text-[var(--color-muted)]">
                Full-stack project
              </span>
            </div>
          </section>

          {/* Project information */}
          <section className="mt-20 grid gap-10 border-y border-[var(--color-border)] py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Type
              </p>
              <p className="mt-3 text-sm">Full-stack application</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Backend
              </p>
              <p className="mt-3 text-sm">FastAPI · LangGraph</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                Database
              </p>
              <p className="mt-3 text-sm">PostgreSQL</p>
            </div>
          </section>

          {/* Problem */}
          <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              01 / The problem
            </p>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Turning unstructured complaints into actionable data.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
                Pharmaceutical complaint information can arrive through
                natural-language descriptions and PDF documents. Manually
                extracting relevant details, assessing risk, and maintaining
                corrections can make the process difficult to manage
                consistently.
              </p>

              <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                The goal was to build a system that helps convert these inputs
                into structured complaint records while keeping human edits and
                AI-generated changes traceable.
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
                An AI-assisted complaint processing workflow.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
                The application accepts complaint information through text or
                PDF input, extracts relevant fields, evaluates risk, and stores
                the result as a structured record.
              </p>

              <p className="mt-4 text-sm leading-8 text-[var(--color-muted)]">
                Users can also correct or extend existing complaints through a
                conversational update flow, or edit fields manually.
              </p>
            </div>
          </section>

          {/* Workflow */}
          <section className="mt-24">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              03 / How it works
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              A structured processing pipeline.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Extract',
                  description:
                    'Process complaint text or PDF input and extract structured fields.',
                },
                {
                  number: '02',
                  title: 'Assess',
                  description:
                    'Evaluate complaint severity, priority, and recommended next action.',
                },
                {
                  number: '03',
                  title: 'Update',
                  description:
                    'Apply corrections while preserving field-level provenance and reassessing risk when needed.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="border border-[var(--color-border)] p-6"
                >
                  <p className="text-sm text-[var(--color-accent)]">
                    {step.number}
                  </p>
                  <h3 className="mt-6 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering decisions */}
          <section className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              04 / Engineering decisions
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl">
                  Conditional risk reassessment
                </h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  A correction does not always require a fresh risk assessment.
                  The update workflow checks whether modified fields are
                  risk-relevant. Changes to relevant fields trigger
                  reassessment, while unrelated corrections can skip that step.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">Field-level provenance</h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  Complaint records maintain provenance information to
                  distinguish AI-extracted values, AI-updated values, and manual
                  edits. This makes changes easier to trace.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">Structured AI workflows</h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  LangGraph organizes extraction, updates, and risk assessment
                  into separate workflow nodes, making the processing logic
                  easier to manage.
                </p>
              </div>
            </div>
          </section>

          {/* Tech stack */}
          <section className="mt-24 border-t border-[var(--color-border)] pt-12">
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
              05 / Technology
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Tools behind the project.
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
              Interested in the implementation?
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Explore the source code.
            </h2>

            <a
              href="https://github.com/Nihalov/Pharma-ComplaintAI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block border-b border-[var(--color-accent)] pb-2 text-sm hover:text-[var(--color-accent)]"
            >
              GitHub repository ↗
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
