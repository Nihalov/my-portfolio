import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              01 / Selected work
            </p>

            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Projects & experiments.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
            A selection of software projects where I explore problems, build
            solutions, and learn through engineering.
          </p>
        </div>

        <div className="border-t border-[var(--color-border)]">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-6 border-b border-[var(--color-border)] py-9 md:grid-cols-[70px_1fr_1fr] md:gap-10"
            >
              <span className="text-sm text-[var(--color-muted)]">
                {project.number}
              </span>

              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-accent)]">
                  {project.category}
                </p>

                <h3 className="font-serif text-2xl md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-[var(--accent)] bg-[var(--surface)] px-5 py-3 text-xs font-semibold tracking-wide text-[var(--accent)] transition-colors hover:border-[var(--accent-hover)] hover:bg-[var(--accent)] hover:text-[var(--background)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Explore project <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className="md:pl-8">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-xs text-[var(--color-muted)]">
                    {project.status}
                  </span>
                </div>

                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  {project.contribution}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
