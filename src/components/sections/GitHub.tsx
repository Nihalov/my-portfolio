type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

async function getRepositories(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      'https://api.github.com/users/Nihalov/repos?sort=updated&per_page=100',
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Unable to fetch GitHub repositories');
    }

    const repositories: GitHubRepo[] = await response.json();

    return repositories.filter((repo) => !repo.fork).slice(0, 4);
  } catch (error) {
    console.error('GitHub API error:', error);
    return [];
  }
}

export default async function GitHub() {
  const repositories = await getRepositories();

  return (
    <section id="github" className="section-padding">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              04 / Open source
            </p>

            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              From my GitHub.
            </h2>
          </div>

          <a
            href="https://github.com/Nihalov"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-[var(--color-accent)] pb-2 text-sm transition-colors hover:text-[var(--color-accent)]"
          >
            Visit GitHub profile ↗
          </a>
        </div>

        {repositories.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {repositories.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-48 flex-col justify-between border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl transition-colors group-hover:text-[var(--color-accent)]">
                      {repo.name}
                    </h3>

                    <span className="text-sm text-[var(--color-muted)]">↗</span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-[var(--color-muted)]">
                  {repo.language && <span>{repo.language}</span>}

                  <span>Stars {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="border border-[var(--color-border)] p-6 text-sm leading-7 text-[var(--color-muted)]">
            GitHub repositories are temporarily unavailable. You can still
            explore my work on{' '}
            <a
              href="https://github.com/Nihalov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              my GitHub profile
            </a>
            .
          </p>
        )}

        <p className="mt-5 text-xs text-[var(--color-muted)]">
          Public repositories · Refreshed approximately once per hour
        </p>
      </div>
    </section>
  );
}
