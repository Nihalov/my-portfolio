import type { CSSProperties } from 'react';

const principles = [
  {
    number: '01',
    title: 'Understand the problem',
    description:
      'I start by understanding the requirements and breaking complex problems into smaller, manageable parts before choosing an implementation.',
  },
  {
    number: '02',
    title: 'Think beyond the happy path',
    description:
      'I consider failure scenarios, data consistency, validation, and error handling while building application workflows.',
  },
  {
    number: '03',
    title: 'Build with maintainability in mind',
    description:
      'I focus on clear code structure, reusable components, well-defined APIs, and designs that can evolve as requirements change.',
  },
];

const skillGroups = [
  {
    category: 'Languages',
    color: '#a5c68a',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    color: '#8cb9d6',
    skills: ['Spring Boot', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Frontend',
    color: '#d6b97e',
    skills: ['React', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Databases & Tools',
    color: '#b7a2d8',
    skills: ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'RabbitMQ', 'Redis'],
  },
  {
    category: 'Concepts',
    color: '#83bfb1',
    skills: [
      'OOPS',
      'DBMS',
      'Data Structures',
      'AWS(EC2 Instance, S3)',
      'Microservices',
    ],
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="section-padding">
      <div className="container">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            02 / Engineering mindset
          </p>

          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            How I approach software.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-t border-[var(--color-border)] pt-5"
              >
                <p className="text-xs text-[var(--color-accent)]">
                  {principle.number}
                </p>

                <h3 className="mt-4 font-serif text-2xl">{principle.title}</h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>

          <aside aria-labelledby="toolkit-heading" className="md:pl-6 lg:pl-10">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-5 w-0.5 bg-[var(--accent)]" />
              <h3
                id="toolkit-heading"
                className="font-sans text-sm font-medium uppercase tracking-widest text-[var(--foreground)]"
              >
                Technologies I work with
              </h3>
            </div>

            <div className="grid gap-3">
              {skillGroups.map((group) => (
                <section
                  key={group.category}
                  style={{ '--skill-accent': group.color } as CSSProperties}
                  className="rounded-lg border border-[var(--skill-accent)]/20 bg-[var(--skill-accent)]/5 p-5"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h4 className="flex items-center gap-2.5 font-sans text-sm font-semibold text-[var(--skill-accent)]">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--skill-accent)]"
                      />
                      {group.category}
                    </h4>
                    <span className="shrink-0 text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded border border-[var(--skill-accent)]/15 bg-[var(--background)]/60 px-3 py-2 text-xs leading-5 text-[var(--foreground)]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <p className="mt-8 text-xs leading-6 text-[var(--color-muted)]">
              My toolkit continues to evolve through hands-on projects and
              continuous learning.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
