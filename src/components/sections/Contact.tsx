'use client';

import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:nihalov89@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              05 / Get in touch
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Have a project or opportunity in mind?
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[var(--color-muted)]">
              I&apos;m open to software development opportunities, interesting
              projects, and conversations about building useful software.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="https://github.com/Nihalov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-sm transition-colors hover:text-[var(--color-accent)]"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nihal-o-v/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-sm transition-colors hover:text-[var(--color-accent)]"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://leetcode.com/u/nihal_ov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-sm transition-colors hover:text-[var(--color-accent)]"
              >
                LeetCode <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-sm transition-colors hover:text-[var(--color-accent)]"
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border-t border-[var(--color-border)] pt-8 md:border-t-0 md:pt-0"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Your name
              </label>

              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email address
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Message
              </label>

              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me a little about your enquiry..."
                className="w-full resize-y border-b border-[var(--color-border)] bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
              />
            </div>

            <button
              type="submit"
              className="border border-[var(--color-border)] px-6 py-3 text-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Prepare message ↗
            </button>

            <p className="text-xs leading-6 text-[var(--color-muted)]">
              This opens your default email application with the message details
              filled in.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
