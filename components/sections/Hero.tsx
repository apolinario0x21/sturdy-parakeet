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
        <div className="grid h-full w-full grid-cols-1 gap-6 sm:gap-8 md:gap-10">
          <Prompt command="./start-portfolio.sh" />

          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-term-mute sm:justify-end sm:text-sm"
            aria-label="Seções da página"
          >
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="inline-flex items-center gap-1 transition hover:text-term-cyan"
              >
                <span aria-hidden>{section.icon}</span>
                <span>{section.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex min-w-0 flex-col gap-4 text-center sm:gap-5 sm:text-left">
            <h1 className="break-words text-2xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl">
              Marcelo Apolinário
            </h1>
            <p className="text-sm text-slate-300 sm:text-xl md:text-2xl">
              DevOps, Networking & Platform Engineer
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
            Construo, automatizo infraestruturas e pipelines seguras com Kubernetes, Terraform, AWS/GCP e Go.
            Possuo base sólida em Redes e Linux, com foco em IaC, automação e entrega confiável.
          </p>
        </div>
      </TerminalWindow>
    </header>
  );
}
