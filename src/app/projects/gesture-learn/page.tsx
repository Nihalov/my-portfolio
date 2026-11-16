import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'WebRTC',
  'Socket.IO',
  'MediaPipe',
];

export default function GestureLearnPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="container py-16 md:py-24">
          <Link
            href="/#work"
            className="text-xs tracking-[0.16em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            ← BACK TO WORK
          </Link>

          <header className="mt-16 border-b border-[var(--border)] pb-14">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              PROJECT 03 / REAL-TIME COLLABORATION
            </p>

            <h1 className="max-w-4xl text-5xl tracking-tight md:text-7xl">
              GestureLearn
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
              An interactive learning platform that brings together real-time
              communication and touch-free drawing to make online teaching more
              expressive.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </header>

          <div className="grid gap-14 py-16 md:grid-cols-[1fr_2fr] md:gap-20">
            <h2 className="text-3xl">The problem</h2>

            <div className="space-y-5 text-[var(--text-secondary)]">
              <p>
                Online teaching platforms support video calls and screen sharing,
                but explaining visual concepts often requires switching to a
                separate whiteboard or drawing application.
              </p>

              <p>
                GestureLearn explores a more natural approach: allowing
                instructors to draw using hand movements captured by a webcam.
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)]" />

          <div className="grid gap-14 py-16 md:grid-cols-[1fr_2fr] md:gap-20">
            <h2 className="text-3xl">The solution</h2>

            <div className="space-y-5 text-[var(--text-secondary)]">
              <p>
                GestureLearn combines a meeting interface with gesture-based
                drawing capabilities.
              </p>

              <p>
                The platform is designed to let instructors communicate with
                participants while creating visual annotations through hand
                gestures.
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)]" />

          <section className="py-16">
            <p className="mb-10 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              SYSTEM ARCHITECTURE
            </p>

            <h2 className="mb-12 text-4xl">How the system works</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'Client interface',
                  description:
                    'React and TypeScript power the meeting room, participant controls, chat, and drawing interface.',
                },
                {
                  number: '02',
                  title: 'Real-time communication',
                  description:
                    'WebRTC enables peer-to-peer audio and video, while Socket.IO handles signaling and meeting events.',
                },
                {
                  number: '03',
                  title: 'Gesture recognition',
                  description:
                    'MediaPipe detects hand landmarks that can be interpreted as drawing gestures and mapped to canvas coordinates.',
                },
                {
                  number: '04',
                  title: 'Backend and authentication',
                  description:
                    'Node.js, Express, MongoDB, and JWT support user authentication and meeting management.',
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="border border-[var(--border)] bg-[var(--surface)] p-7"
                >
                  <span className="text-xs text-[var(--accent)]">
                    {item.number}
                  </span>

                  <h3 className="mt-6 text-2xl">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="border-t border-[var(--border)]" />

          <section className="grid gap-14 py-16 md:grid-cols-[1fr_2fr] md:gap-20">
            <h2 className="text-3xl">Engineering challenges</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl">WebRTC signaling</h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  Establishing peer connections requires coordinating offers,
                  answers, and ICE candidates between participants. Socket.IO
                  provides the signaling channel for this exchange.
                </p>
              </div>

              <div>
                <h3 className="text-xl">Meeting state synchronization</h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  Participant joins, departures, and media state changes need to
                  be reflected across connected clients to maintain a consistent
                  meeting experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl">Gesture-to-canvas mapping</h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  Translating detected hand landmarks into usable drawing
                  coordinates requires careful handling of camera orientation,
                  scaling, and canvas dimensions.
                </p>
              </div>
            </div>
          </section>

          <footer className="border-t border-[var(--border)] pt-10">
            <Link
              href="/#work"
              className="text-sm text-[var(--accent)] transition-opacity hover:opacity-70"
            >
              ← Back to all projects
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
