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
    <header className="min-h-[calc(100svh-1.5rem)]">
      <TerminalWindow title="~/home" className="hero-panel h-full border-term-border">
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-between gap-8 p-2 sm:p-4">
          <Prompt command="./start-portfolio.sh" />

          <div className="space-y-4 text-center sm:text-left">
            <p className="inline-flex rounded-full border border-term-border/70 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-term-cyan">
              Portfolio 2026
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-6xl">Marcelo Apolinário</h1>
            <p className="text-lg text-slate-300 sm:text-3xl">Back-End Developer, CTF Player & Linux Enthusiast</p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <p className="terminal-output text-base text-slate-200 sm:text-xl">
              Desenvolvo soluções escaláveis com foco em performance, automação e práticas de segurança para ambientes
              modernos.
            </p>

            <ul className="grid gap-2">
              {highlights.map((highlight) => (
                <li key={highlight.label} className="rounded-xl border border-term-border/70 bg-slate-950/45 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-term-mute">{highlight.label}</p>
                  <p className="mt-1 font-semibold text-term-cyan">{highlight.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <nav className="flex flex-wrap items-center gap-3" aria-label="Seções da página">
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="group inline-flex items-center gap-2 rounded-full border border-term-border/70 bg-slate-950/50 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-term-cyan hover:text-term-cyan"
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
