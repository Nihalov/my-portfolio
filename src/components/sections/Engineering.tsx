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
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Booststrap'],
  },
  {
    category: 'Databases & Tools',
    skills: ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'RabbitMQ', 'Redis'],
  },
  {
    category: 'Concepts',
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

          <div className="md:pl-10">
            <p className="mb-6 text-sm uppercase tracking-widest text-[var(--color-muted)]">
              Technologies I work with
            </p>

            <div className="space-y-7">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="border-t border-[var(--color-border)] pt-4"
                >
                  <h3 className="mb-4 text-sm font-medium">{group.category}</h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs leading-6 text-[var(--color-muted)]">
              My toolkit continues to evolve through hands-on projects and
              continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
