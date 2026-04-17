'use client';

import { useEffect, useRef, useState } from 'react';

const PROMPT_COMMAND = 'whoami';
const TYPING_SPEED = 45;

function PromptLine({ text, cursor = false }: { text: string; cursor?: boolean }) {
  return (
    <div className="grid min-w-0 grid-cols-[auto_auto_auto_auto_minmax(0,1fr)] items-baseline gap-x-1">
      <span className="font-semibold text-term-green">marcelo@apolinario</span>
      <span className="text-term-mute">:</span>
      <span className="text-term-cyan">~</span>
      <span className="text-slate-200">$</span>
      <span className="min-w-0 break-words text-slate-100">
        {text}
        {cursor && <span className="terminal-cursor ml-1 inline-block h-[1em] w-2 rounded-[1px] bg-term-cyan align-baseline" aria-hidden />}
      </span>
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
  const [typedCommand, setTypedCommand] = useState('');
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (done) {
      return;
    }

    if (typedCommand.length < PROMPT_COMMAND.length) {
      timeoutRef.current = setTimeout(() => {
        setTypedCommand(PROMPT_COMMAND.slice(0, typedCommand.length + 1));
      }, TYPING_SPEED);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }

    setDone(true);
    return undefined;
  }, [typedCommand, done]);

  return (
    <header className="grid min-h-[calc(100svh-1.5rem)] w-full grid-cols-1 lg:min-h-[calc(100svh-3rem)]">
      <section className="hero-panel terminal-card flex h-full w-full flex-col overflow-hidden border-term-border">
        <div className="flex items-center justify-between border-b border-term-border/80 bg-slate-900/50 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <p className="text-xs tracking-[0.2em] text-term-mute">~/home</p>
          <div className="w-12" aria-hidden />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto px-3 pb-4 pt-3 text-sm leading-6 sm:px-6 sm:pb-6 sm:pt-4 sm:text-base sm:leading-7 lg:pb-8">
          <div className="flex flex-1 items-center">
            <div className="mx-auto w-full max-w-[72ch] text-center">
              <div className="flex justify-center">
                <PromptLine text={typedCommand} cursor={!done} />
              </div>

              {done && (
                <>
                  <h1 className="mt-6 text-3xl font-bold text-term-green sm:text-5xl">Marcelo Apolinário</h1>
                  <p className="mt-4 inline-flex rounded-lg border border-term-cyan/35 bg-term-cyan/10 px-3 py-2 text-base font-medium text-term-cyan sm:text-xl">
                    DevOps &amp; Networking Engineer
                  </p>
                  <p className="mt-5 text-base text-slate-300 sm:text-lg">Provisiono ambientes resilientes e escaláveis.</p>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 flex w-full flex-wrap justify-end gap-3 border-t border-term-border/60 pt-5">
            <CtaButton label="Ver projetos" href="#projetos" primary />
            <CtaButton label="Ler artigos" href="#artigos" />
          </div>
        </div>
      </section>
    </header>
  );
}
