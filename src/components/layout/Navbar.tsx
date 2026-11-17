'use client';

import { useState } from 'react';
import Link from 'next/link';
// import ThemeToggle from './ThemeToggle';

const contactUrl =
  'https://mail.google.com/mail/?view=cm&fs=1&to=nihalov89%40gmail.com';

const links = [
  { label: 'WORK', href: '/#work' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'ENGINEERING', href: '/#engineering' },
  { label: 'CONTACT', href: '/#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
      <nav
        className="container flex min-h-[76px] items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/#home"
          className="font-display text-2xl tracking-tight"
          aria-label="Nihal O V. - Home"
        >
          Nihal<span className="text-[var(--accent)]">.</span>OV
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.16em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}

          {/* <ThemeToggle /> */}
        </div>

        {/* Desktop contact action */}
        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-[var(--accent)] px-5 py-2 text-xs tracking-wider text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--background)] md:inline-flex"
        >
          LET&apos;S TALK ↗
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-sm tracking-widest text-[var(--foreground)] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? 'CLOSE −' : 'MENU +'}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-6 md:hidden"
        >
          <div className="container flex flex-col gap-6">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 text-sm tracking-widest text-[var(--foreground)] hover:text-[var(--accent)]"
              >
                <span className="text-xs text-[var(--text-secondary)]">
                  0{index + 1}
                </span>
                {link.label}
              </Link>
            ))}

            {/* <ThemeToggle /> */}

            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-[var(--accent)]"
              onClick={() => setMenuOpen(false)}
            >
              LET&apos;S TALK ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
