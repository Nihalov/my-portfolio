const indexItems = [
  { number: '01', label: 'INTRODUCTION', href: '#home' },
  { number: '02', label: 'SELECTED WORK', href: '#work' },
  { number: '03', label: 'ENGINEERING', href: '#engineering' },
  { number: '04', label: 'ABOUT', href: '#about' },
  { number: '05', label: 'CONTACT', href: '#contact' },
];

const focusAreas = [
  'Backend engineering',
  'Full-stack applications',
  'API development',
  'Intelligent systems',
];

const technologies = [
  'Java',
  'Python',
  'PostgreSQL',
  'JavaScript',
  'Spring Boot',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="container min-h-[calc(100svh-76px)] py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[150px_minmax(0,1fr)_190px] lg:gap-10">
        {/* Left: Editorial index */}
        <aside className="hidden lg:block">
          <p className="text-[10px] tracking-[0.2em] text-[#A5C68A]">
            INDEX / 001
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {indexItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group flex items-start gap-3"
              >
                <span className="text-[10px] text-[#777E7B]">
                  {item.number}
                </span>

                <span className="text-[10px] tracking-wider text-[#777E7B] transition-colors group-hover:text-[#A5C68A]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </aside>

        {/* Center: Main introduction */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#A5C68A]" />

            <p className="text-[11px] tracking-[0.2em] text-[#A6AAA8]">
              SOFTWARE DEVELOPER / INDIA
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-[84px]">
            I build software
            <br />
            that solves
            <br />
            <span className="italic text-[#A5C68A]">real problems.</span>
          </h1>

          <p className="mt-9 max-w-xl text-base leading-8 text-[#A6AAA8]">
            I'm Nihal, an MCA graduate and software developer interested in
            building practical applications, thoughtful backend systems and
            intelligent software experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-[#A5C68A] px-6 py-4 text-xs font-semibold tracking-wider text-[#111315] transition-colors hover:bg-[#B8D39F]"
            >
              EXPLORE MY WORK
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#777E7B] pb-2 text-xs tracking-wider text-[#F1EFE8] transition-colors hover:border-[#A5C68A] hover:text-[#A5C68A]"
            >
              VIEW RESUME ↗
            </a>
          </div>

          {/* Bottom information */}
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-[#393C3C] pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[10px] tracking-wider text-[#777E7B]">
                EDUCATION
              </p>
              <p className="mt-2 text-sm text-[#F1EFE8]">MCA Graduate</p>
            </div>

            <div>
              <p className="text-[10px] tracking-wider text-[#777E7B]">
                PRIMARY INTEREST
              </p>
              <p className="mt-2 text-sm text-[#F1EFE8]">
                Software Engineering
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] tracking-wider text-[#777E7B]">
                CURRENT FOCUS
              </p>
              <p className="mt-2 text-sm text-[#F1EFE8]">
                {' '}
                Backend Development
              </p>
            </div>
          </div>
        </div>

        {/* Right: Engineering snapshot */}
        <aside className="hidden border-l border-[#393C3C] pl-6 lg:block">
          <p className="text-[10px] tracking-[0.2em] text-[#777E7B]">
            01 / FOCUS
          </p>

          <div className="mt-8 space-y-4">
            {focusAreas.map((area) => (
              <p key={area} className="text-xs leading-5 text-[#A6AAA8]">
                {area}
              </p>
            ))}
          </div>

          <div className="my-10 border-t border-[#393C3C]" />

          <p className="text-[10px] tracking-[0.2em] text-[#777E7B]">
            02 / TOOLKIT
          </p>

          <div className="mt-8 space-y-4">
            {technologies.map((tech) => (
              <p key={tech} className="text-sm text-[#F1EFE8]">
                {tech}
              </p>
            ))}
          </div>

          <div className="my-10 border-t border-[#393C3C]" />

          <p className="text-[10px] leading-6 text-[#777E7B]">
            Interested in building useful software and understanding the systems
            behind it.
          </p>
        </aside>
      </div>
      {/* Scroll indicator */}
      <div className="mt-16 flex items-center justify-between border-t border-[#393C3C] pt-5">
        {/* <p className="text-[10px] tracking-[0.15em] text-[#777E7B]">
          PORTFOLIO / 2026
        </p> */}

        {/* <a
          href="#work"
          className="text-[10px] tracking-[0.15em] text-[#A6AAA8] transition-colors hover:text-[#A5C68A]"
        >
          SCROLL TO EXPLORE ↓
        </a> */}
      </div>
    </section>
  );
}
