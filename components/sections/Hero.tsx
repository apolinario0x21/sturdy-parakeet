import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const sectionLinks = [
  { href: '#about', label: 'About', icon: '👤' },
  { href: '#stack', label: 'Stack', icon: '⚙️' },
  { href: '#artigos', label: 'Artigos', icon: '📝' },
  { href: '#projetos', label: 'Projetos', icon: '💼' },
  { href: '#links', label: 'Links', icon: '🔗' }
];

const highlights = [
  { label: 'Especialidade', value: 'Back-End & Cloud' },
  { label: 'Foco', value: 'Cibersegurança aplicada' },
  { label: 'Stack principal', value: 'Golang · TypeScript · AWS' }
];

export function Hero() {
  return (
    <header className="w-full">
      <TerminalWindow
        title="~/home"
        className="hero-panel flex w-full flex-col border-term-border"
      >
        <div className="grid h-full w-full flex-1 grid-rows-[auto_auto_1fr_auto] gap-4 sm:gap-6">
          <Prompt command="./start-portfolio.sh" />

          <div className="space-y-3 text-center sm:space-y-4 sm:text-left">
            <p className="inline-flex rounded-full border border-term-border/70 bg-slate-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-term-cyan sm:px-3 sm:text-xs sm:tracking-[0.24em]">
              Portfolio 2026
            </p>
            <h1 className="text-2xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl">Marcelo Apolinário</h1>
            <p className="text-sm text-slate-300 sm:text-xl md:text-2xl">
              Back-End Developer, CTF Player & Linux Enthusiast
            </p>
          </div>

          <div className="grid items-stretch gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <p className="terminal-output flex h-full items-start text-sm text-slate-200 sm:text-base md:text-lg">
              Desenvolvo soluções escaláveis com foco em performance, automação e práticas de segurança para ambientes
              modernos.
            </p>

            <ul className="grid h-full gap-2 sm:gap-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight.label}
                  className="flex min-h-20 flex-col justify-center rounded-xl border border-term-border/70 bg-slate-950/45 p-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-term-mute sm:text-xs sm:tracking-[0.2em]">
                    {highlight.label}
                  </p>
                  <p className="mt-1 break-words text-sm font-semibold text-term-cyan sm:text-base">{highlight.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3" aria-label="Seções da página">
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-term-border/70 bg-slate-950/50 px-2.5 py-1.5 text-[11px] text-slate-300 transition hover:-translate-y-0.5 hover:border-term-cyan hover:text-term-cyan sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                <span aria-hidden>{section.icon}</span>
                <span className="font-semibold tracking-wide">{section.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </TerminalWindow>
    </header>
  );
}
