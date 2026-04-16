import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const sectionLinks = [
  { href: '#about', label: 'About', icon: '👤' },
  { href: '#stack', label: 'Stack', icon: '⚙️' },
  { href: '#artigos', label: 'Artigos', icon: '📝' },
  { href: '#projetos', label: 'Projetos', icon: '💼' },
  { href: '#links', label: 'Links', icon: '🔗' }
];

export function Hero() {
  return (
    <header className="grid w-full grid-cols-1">
      <TerminalWindow
        title="~/home"
        className="hero-panel grid w-full grid-cols-1 border-term-border"
      >
        <div className="grid h-full w-full grid-cols-1 gap-4 sm:gap-6">
          <Prompt command="./start-portfolio.sh" />

          <div className="flex min-w-0 flex-col gap-3 text-center sm:gap-4 sm:text-left">
            <h1 className="break-words text-2xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl">
              Marcelo Apolinário
            </h1>
            <p className="text-sm text-slate-300 sm:text-xl md:text-2xl">
              DevOps, Networking & Platform Engineer
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4">
            <p className="terminal-output flex h-full items-start text-sm text-slate-200 sm:text-base md:text-lg">
              Construo, automatizo infraestruturas e pipelines seguras com Kubernetes, Terraform, AWS/GCP e Go.
              Possuo base sólida em Redes e Linux, com foco em IaC, automação e entrega confiável.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3"
            aria-label="Seções da página"
          >
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
