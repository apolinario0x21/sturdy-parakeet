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
      <TerminalWindow title="~/home" className="hero-panel flex min-h-[88svh] w-full flex-col border-term-border sm:min-h-[100svh]">
        <div className="grid h-full w-full flex-1 grid-rows-[auto_auto_1fr_auto] gap-6 sm:gap-8">
          <Prompt command="./start-portfolio.sh" />

          <div className="space-y-4 text-center sm:text-left">
            <p className="inline-flex rounded-full border border-term-border/70 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-term-cyan">
              Portfolio 2026
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl md:text-6xl">Marcelo Apolinário</h1>
            <p className="text-lg text-slate-300 sm:text-2xl md:text-3xl">
              Back-End Developer, CTF Player & Linux Enthusiast
            </p>
          </div>

          <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <p className="terminal-output flex h-full items-start text-base text-slate-200 sm:text-lg md:text-xl">
              Desenvolvo soluções escaláveis com foco em performance, automação e práticas de segurança para ambientes
              modernos.
            </p>

            <ul className="grid h-full gap-2">
              {highlights.map((highlight) => (
                <li key={highlight.label} className="flex flex-col justify-center rounded-xl border border-term-border/70 bg-slate-950/45 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-term-mute">{highlight.label}</p>
                  <p className="mt-1 font-semibold text-term-cyan">{highlight.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <nav className="flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Seções da página">
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="group inline-flex items-center gap-2 rounded-full border border-term-border/70 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300 transition hover:-translate-y-0.5 hover:border-term-cyan hover:text-term-cyan sm:px-4 sm:py-2 sm:text-sm"
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
