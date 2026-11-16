export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-xl">Nihal O V.</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            Software Developer
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-[var(--color-muted)]">
          <a
            href="https://github.com/Nihalov"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/nihal-o-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            LinkedIn ↗
          </a>

          <a
            href="#top"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            Back to top ↑
          </a>
        </div>

        <p className="text-xs text-[var(--color-muted)]">© 2026 Nihal O V. </p>
      </div>
    </footer>
  );
}
