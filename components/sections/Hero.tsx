function PromptLine({ text }: { text: string }) {
  return (
    <div className="grid min-w-0 grid-cols-[auto_auto_auto_auto_minmax(0,1fr)] items-baseline gap-x-1 text-sm sm:text-base">
      <span className="font-semibold text-term-green">marcelo@apolinario</span>
      <span className="text-term-mute">:</span>
      <span className="text-term-cyan">~</span>
      <span className="text-slate-200">$</span>
      <span className="min-w-0 break-words text-slate-100">{text}</span>
    </div>
  );
}

function CtaButton({ label, href, primary }: { label: string; href: string; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
        primary
          ? 'border-green-600 bg-green-600/95 text-white hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600'
          : 'border-term-border bg-transparent text-slate-300 hover:-translate-y-0.5 hover:border-term-cyan hover:text-term-cyan'
      }`}
    >
      {primary && <span className="mr-1.5 opacity-80">./</span>}
      {label}
    </a>
  );
}

export function Hero() {
  return (
    <header className="grid w-full grid-cols-1 lg:min-h-[calc(100svh-3rem)]">
      <section className="hero-panel terminal-card w-full overflow-hidden border-term-border lg:flex lg:h-full lg:flex-col">
        <div className="flex items-center justify-between border-b border-term-border/80 bg-slate-900/50 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <p className="text-xs tracking-[0.2em] text-term-mute">~/home</p>
          <div className="w-12" aria-hidden />
        </div>

        <div className="flex h-[58svh] flex-col px-3 pb-4 pt-4 text-sm leading-6 sm:h-[60vh] sm:px-6 sm:pb-6 sm:text-base sm:leading-7 lg:h-auto lg:min-h-0 lg:flex-1 lg:pb-8">
          <div className="mx-auto flex h-full w-full max-w-[72ch] flex-col gap-5 sm:gap-6">
            <PromptLine text="whoami" />

            <h1 className="rounded-lg border border-term-green/35 bg-term-green/10 px-3 py-2 text-3xl font-semibold leading-tight text-term-green sm:text-5xl">
              Marcelo Apolinário
            </h1>

            <p className="rounded-lg border border-term-cyan/30 bg-term-cyan/5 px-3 py-2 text-base font-medium tracking-[0.02em] text-term-cyan sm:text-2xl">
              DevOps &amp; Networking Engineer
            </p>

            <p className="max-w-[56ch] pl-2 text-slate-300">Provisiono ambientes resilientes e escaláveis.</p>

            <div className="mt-auto border-t border-term-border/50 pt-5">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-term-mute">Ações</p>
              <div className="flex flex-wrap gap-3">
                <CtaButton label="Ver projetos" href="#projetos" primary />
                <CtaButton label="Ler artigos" href="#artigos" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
