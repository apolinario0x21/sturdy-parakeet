'use client';

import { useEffect, useRef, useState } from 'react';

type PromptStep = {
  type: 'prompt';
  text: string;
};

type OutputStep = {
  type: 'output';
  lines: string[];
};

type SequenceStep = PromptStep | OutputStep;

type RenderedPrompt = {
  type: 'prompt';
  text: string;
};

type RenderedOutput = {
  type: 'output';
  lines: string[];
  step: number;
};

type RenderedStep = RenderedPrompt | RenderedOutput;

type AnimationPhase = {
  step: number;
  charIndex: number;
};

type TerminalAnimationState = {
  rendered: RenderedStep[];
  currentPromptText: string;
  phase: AnimationPhase;
  done: boolean;
};

const TYPING_SPEED = 45;
const CMD_PAUSE = 500;
const OUTPUT_PAUSE = 180;

const sequence: SequenceStep[] = [
  { type: 'prompt', text: 'whoami' },
  { type: 'output', lines: ['Marcelo Apolinário'] },
  { type: 'output', lines: ['DevOps & Networking Engineer'] },
  { type: 'output', lines: ['Provisiono ambientes resilientes e escaláveis.'] }
];

const initialAnimationState: TerminalAnimationState = {
  rendered: [],
  currentPromptText: '',
  phase: { step: 0, charIndex: 0 },
  done: false
};

function nextAnimationState(state: TerminalAnimationState): TerminalAnimationState {
  if (state.done) {
    return state;
  }

  const { step, charIndex } = state.phase;

  if (step >= sequence.length) {
    return {
      ...state,
      done: true
    };
  }

  const item = sequence[step];

  if (item.type === 'prompt') {
    if (charIndex < item.text.length) {
      return {
        ...state,
        currentPromptText: item.text.slice(0, charIndex + 1),
        phase: { step, charIndex: charIndex + 1 }
      };
    }

    return {
      ...state,
      rendered: [...state.rendered, { type: 'prompt', text: item.text }],
      currentPromptText: '',
      phase: { step: step + 1, charIndex: 0 }
    };
  }

  if (charIndex < item.lines.length) {
    const lastRenderedStep = state.rendered[state.rendered.length - 1];
    const shouldAppendToExistingOutput =
      lastRenderedStep && lastRenderedStep.type === item.type && 'step' in lastRenderedStep && lastRenderedStep.step === step;

    const nextRendered = shouldAppendToExistingOutput
      ? [
          ...state.rendered.slice(0, -1),
          { ...lastRenderedStep, lines: [...lastRenderedStep.lines, item.lines[charIndex]] } satisfies RenderedOutput
        ]
      : [...state.rendered, { type: item.type, lines: [item.lines[charIndex]], step }];

    return {
      ...state,
      rendered: nextRendered,
      phase: { step, charIndex: charIndex + 1 }
    };
  }

  return {
    ...state,
    phase: { step: step + 1, charIndex: 0 }
  };
}

function getAnimationDelay(state: TerminalAnimationState) {
  if (state.done) {
    return null;
  }

  const { step, charIndex } = state.phase;

  if (step >= sequence.length) {
    return 0;
  }

  const item = sequence[step];
  if (item.type === 'prompt') {
    return charIndex < item.text.length ? TYPING_SPEED : CMD_PAUSE;
  }

  return charIndex < item.lines.length ? OUTPUT_PAUSE : CMD_PAUSE;
}

function useTerminalAnimation() {
  const [state, setState] = useState<TerminalAnimationState>(initialAnimationState);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (state.done) {
      return;
    }

    const delay = getAnimationDelay(state);
    if (delay === null) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setState((currentState) => nextAnimationState(currentState));
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [state]);

  return {
    rendered: state.rendered,
    currentPromptText: state.currentPromptText,
    done: state.done
  };
}

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
  const { rendered, currentPromptText, done } = useTerminalAnimation();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
  }, [rendered.length, done]);

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

        <div className="flex h-[58svh] min-h-0 flex-col px-3 pt-3 text-sm leading-6 sm:h-[60vh] sm:px-6 sm:pt-4 sm:text-base sm:leading-7 lg:h-auto lg:flex-1 lg:pt-6">
          <div className="mx-auto w-full max-w-[72ch] overflow-x-hidden overflow-y-auto">
            {rendered.map((block, index) => {
              if (block.type === 'prompt') {
                return (
                  <div key={index} className="mb-4 min-w-0">
                    <PromptLine text={block.text} />
                  </div>
                );
              }

              if (block.step === 1) {
                return (
                  <div key={index} className="mb-5 rounded-lg border border-term-green/35 bg-term-green/10 px-3 py-2">
                    <h1 className="pl-2 text-2xl font-semibold text-term-green sm:text-4xl">{block.lines[0]}</h1>
                  </div>
                );
              }

              if (block.step === 2) {
                return (
                  <div key={index} className="mb-5 rounded-lg border border-term-cyan/30 bg-term-cyan/5 px-3 py-2">
                    <p className="pl-2 text-base font-semibold tracking-[0.02em] text-term-cyan sm:text-xl">{block.lines[0]}</p>
                  </div>
                );
              }

              return (
                <div key={index} className="mb-4">
                  <p className="pl-2 text-slate-300">
                    <span className="mr-2 text-term-mute">›</span>
                    {block.lines[0]}
                  </p>
                </div>
              );
            })}

            {!done && (
              <div className="mt-1 min-w-0">
                <PromptLine text={currentPromptText} cursor />
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="mx-auto mt-auto w-full max-w-[72ch] pb-4 pt-4 sm:pb-6">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-term-mute">› 2 items found</p>
            <div className="flex flex-wrap gap-3">
              <CtaButton label="Ver projetos" href="#projetos" primary />
              <CtaButton label="Ler artigos" href="#artigos" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
