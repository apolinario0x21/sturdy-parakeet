import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function Hero() {
  return (
    <header className="grid min-h-screen min-h-[100svh] min-h-[100dvh] w-full grid-cols-1">
      <TerminalWindow
        title="~/home"
        className="hero-panel grid h-full w-full grid-cols-1 border-term-border"
      >
        <div className="flex h-full w-full flex-col justify-between gap-8 py-4 sm:gap-10 sm:py-6 md:gap-12 md:py-8">
          <Prompt command="./start-portfolio.sh" />

          <div className="grid flex-1 content-center gap-6 sm:gap-7 md:gap-8">
            <div className="flex min-w-0 flex-col gap-4 text-center sm:gap-5 sm:text-left">
              <h1 className="break-words text-2xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl">
                Marcelo Apolinário
              </h1>
              <p className="text-sm text-slate-300 sm:text-xl md:text-2xl">
                DevOps, Networking & Platform Engineer
              </p>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
              Construo, automatizo infraestruturas e pipelines seguras com Kubernetes, Terraform, AWS/GCP e Go. Possuo base
              sólida em Redes e Linux, com foco em IaC, automação e entrega confiável.
            </p>

            <nav
              className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3"
              aria-label="Ações principais"
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-1.5 rounded-full border border-term-cyan/60 bg-term-cyan/10 px-3 py-1.5 text-xs font-semibold text-term-cyan transition hover:-translate-y-0.5 hover:border-term-cyan hover:bg-term-cyan/20 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
              >
                Ver projetos
              </a>
              <a
                href="#artigos"
                className="group inline-flex items-center gap-1.5 rounded-full border border-term-border/70 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-term-cyan hover:text-term-cyan sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
              >
                Ler artigos
              </a>
            </nav>
          </div>
        </div>
      </TerminalWindow>
    </header>
  );
}
