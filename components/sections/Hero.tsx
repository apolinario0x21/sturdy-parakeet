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

function useTerminalAnimation() {
  const [rendered, setRendered] = useState<RenderedStep[]>([]);
  const [currentPromptText, setCurrentPromptText] = useState('');
  const [phase, setPhase] = useState<AnimationPhase>({ step: 0, charIndex: 0 });
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (done) {
      return;
    }

    const { step, charIndex } = phase;
    if (step >= sequence.length) {
      setDone(true);
      return;
    }

    const item = sequence[step];

    if (item.type === 'prompt') {
      if (charIndex < item.text.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentPromptText(item.text.slice(0, charIndex + 1));
          setPhase({ step, charIndex: charIndex + 1 });
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setRendered((prev) => [...prev, { type: 'prompt', text: item.text }]);
          setCurrentPromptText('');
          setPhase({ step: step + 1, charIndex: 0 });
        }, CMD_PAUSE);
      }
    } else if (charIndex < item.lines.length) {
      timeoutRef.current = setTimeout(() => {
        setRendered((prev) => {
          const last = prev[prev.length - 1];
          if (last && last.type === item.type && 'step' in last && last.step === step) {
            return [...prev.slice(0, -1), { ...last, lines: [...last.lines, item.lines[charIndex]] }];
          }

          return [...prev, { type: item.type, lines: [item.lines[charIndex]], step }];
        });
        setPhase({ step, charIndex: charIndex + 1 });
      }, OUTPUT_PAUSE);
    } else {
      timeoutRef.current = setTimeout(() => {
        setPhase({ step: step + 1, charIndex: 0 });
      }, CMD_PAUSE);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [phase, done]);

  return { rendered, currentPromptText, done };
}

function PromptLine({ text, cursor = false }: { text: string; cursor?: boolean }) {
  return (
    <div className="flex min-w-0 items-baseline">
      <span className="mr-1 shrink-0 font-semibold text-term-green sm:hidden">marcelo</span>
      <span className="mr-1 shrink-0 font-semibold text-term-green max-sm:hidden">marcelo@apolinario</span>
      <span className="shrink-0 text-term-mute">:</span>
      <span className="mx-1 shrink-0 text-term-cyan">~</span>
      <span className="mr-2 shrink-0 text-slate-200">$</span>
      <span className="min-w-0 break-words text-slate-100">{text}</span>
      {cursor && <span className="terminal-cursor ml-1 inline-block h-[1em] w-2 rounded-[1px] bg-term-cyan align-baseline" aria-hidden />}
    </div>
  );
}

function CtaButton({ label, href, primary }: { label: string; href: string; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
        primary
          ? 'border-green-600 bg-green-600/95 text-white hover:-translate-y-0.5 hover:bg-blue-600 hover:border-blue-600'
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  const staticSequence: RenderedStep[] = [
    { type: 'prompt', text: 'whoami' },
    { type: 'output', lines: ['Marcelo Apolinário'], step: 0 },
    { type: 'prompt', text: 'cat role.txt' },
    { type: 'output', lines: ['DevOps, Platform & Networking Engineer'], step: 1 },
    { type: 'prompt', text: './describe --brief' },
    {
      type: 'output',
      lines: [
        'Provisiono ambientes resilientes e escaláveis.',
        'Automatizo infraestrutura e pipelines seguras.',
        'Base em Redes e Linux com foco em IaC.'
      ],
      step: 2
    },
    { type: 'prompt', text: 'ls ./actions/' },
    { type: 'cta', lines: ['Ver projetos', 'Ler artigos'], step: 3 }
  ];

  const blocks = isMobile ? staticSequence : rendered;

  return (
    <header className="grid w-full grid-cols-1">
      <section className="hero-panel terminal-card mx-auto w-full max-w-3xl overflow-hidden border-term-border">
        <div className="flex items-center justify-between border-b border-term-border/80 bg-slate-900/50 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <p className="text-xs tracking-[0.2em] text-term-mute">~/home</p>
          <div className="w-12" aria-hidden />
        </div>

        <div className="min-w-0 overflow-hidden px-4 py-6 text-sm leading-7 sm:px-6 sm:text-base">
          {blocks.map((block, index) => {
            if (block.type === 'prompt') {
              return (
                <div key={index} className="mb-1">
                  <PromptLine text={block.text} />
                </div>
              );
            }

            if (block.type === 'output') {
              return (
                <div key={index} className="mb-3 space-y-1">
                  {block.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="pl-2 text-slate-300">
                      <span className="mr-2 text-term-mute">›</span>
                      {line}
                    </p>
                  ))}
                </div>
              );
            }

            return (
              <div key={index} className="mb-2">
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-term-mute">› 2 items found</p>
                <div className="flex flex-wrap gap-3">
                  <CtaButton label={block.lines[0]} href="#projetos" primary />
                  <CtaButton label={block.lines[1]} href="#artigos" />
                </div>
              </div>
            );
          })}

          {!isMobile && !done && (
            <div className="mt-1">
              <PromptLine text={currentPromptText} cursor />
            </div>
          )}
        </div>
      </section>
    </header>
  );
}
