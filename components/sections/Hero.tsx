'use client';

import { useEffect, useRef, useState } from 'react';

type PromptStep = {
  type: 'prompt';
  text: string;
};

type OutputStep = {
  type: 'output' | 'cta';
  lines: string[];
};

type SequenceStep = PromptStep | OutputStep;

type RenderedPrompt = {
  type: 'prompt';
  text: string;
};

type RenderedOutput = {
  type: 'output' | 'cta';
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
const CMD_PAUSE = 600;
const OUTPUT_PAUSE = 120;

const sequence: SequenceStep[] = [
  { type: 'prompt', text: 'whoami' },
  { type: 'output', lines: ['Marcelo Apolinário'] },
  { type: 'prompt', text: 'cat role.txt' },
  { type: 'output', lines: ['DevOps, Platform & Networking Engineer'] },
  { type: 'prompt', text: './describe --brief' },
  {
    type: 'output',
    lines: [
      'Provisiono ambientes resilientes e escaláveis.',
      'Construo e automatizo infraestruturas e pipelines seguras com Kubernetes, Terraform, AWS/GCP e Go.',
      'Base sólida em Redes e Linux — foco em IaC, automação e entrega confiável.'
    ]
  },
  { type: 'prompt', text: 'ls ./actions/' },
  { type: 'cta', lines: ['Ver projetos', 'Ler artigos'] }
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

        <div className="h-[58svh] overflow-x-hidden overflow-y-auto px-3 pb-4 pt-2 text-sm leading-6 sm:h-[60vh] sm:px-6 sm:pb-6 sm:pt-3 sm:text-base sm:leading-7 lg:h-auto lg:min-h-0 lg:flex-1 lg:pb-8 lg:pt-4">
          <div className="mx-auto flex w-full max-w-[72ch] flex-col">
            {rendered.map((block, index) => {
              if (block.type === 'prompt') {
                return (
                  <div key={index} className="mb-1 min-w-0">
                    <PromptLine text={block.text} />
                  </div>
                );
              }

              if (block.type === 'output') {
                const outputClassByStep =
                  block.step === 1
                    ? 'mb-5 space-y-1 rounded-lg border border-term-green/35 bg-term-green/10 px-3 py-2'
                    : block.step === 3
                      ? 'mb-5 space-y-1 rounded-lg border border-term-cyan/30 bg-term-cyan/5 px-3 py-2'
                      : 'mb-6 space-y-2';
                const lineClassByStep =
                  block.step === 1
                    ? 'pl-2 text-lg font-semibold text-term-green sm:text-2xl'
                    : block.step === 3
                      ? 'pl-2 text-sm font-medium tracking-[0.02em] text-term-cyan sm:text-lg'
                      : 'pl-2 text-slate-300';

                return (
                  <div key={index} className={outputClassByStep}>
                    {block.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className={lineClassByStep}>
                        <span className="mr-2 text-term-mute">›</span>
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }

              return (
                <div key={index} className="mb-2 mt-2">
                  <p className="mb-4 text-xs uppercase tracking-[0.16em] text-term-mute">› 2 items found</p>
                  <div className="flex flex-wrap gap-3">
                    <CtaButton label={block.lines[0]} href="#projetos" primary />
                    <CtaButton label={block.lines[1]} href="#artigos" />
                  </div>
                </div>
              );
            })}

            {!done && (
              <div className="mt-1 min-w-0">
                <PromptLine text={currentPromptText} cursor />
              </div>
            )}

            {done && (
              <div className="mt-3 min-w-0">
                <PromptLine text="" cursor />
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>
      </section>
    </header>
  );
}
