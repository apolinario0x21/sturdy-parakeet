'use client';

import { useEffect, useRef, useState } from 'react';

import { TerminalWindow } from '@/components/TerminalWindow';

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

const TYPING_SPEED = 35;
const CMD_PAUSE = 450;
const OUTPUT_PAUSE = 110;

const sequence: SequenceStep[] = [
  { type: 'prompt', text: "cat stack.md | sed -n '1,120p'" },
  { type: 'output', lines: ['SO: Ubuntu · Kali Linux · Parrot OS · Zorin OS · Windows'] },
  { type: 'prompt', text: 'stack list --group containers' },
  { type: 'output', lines: ['Containers: Docker · Docker Compose · Kubernetes · Helm'] },
  { type: 'prompt', text: 'stack list --group iac' },
  { type: 'output', lines: ['IaC: Terraform · Terraform Cloud · Packer · GitHub Actions'] },
  { type: 'prompt', text: 'stack list --group cloud' },
  { type: 'output', lines: ['Cloud: AWS · GCP · CloudFront · Route 53 · Lambda'] },
  { type: 'prompt', text: 'stack list --group linguagens' },
  { type: 'output', lines: ['Linguagens: Golang · Java · TypeScript · JavaScript · Python · Bash'] }
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
          if (last && last.type === 'output' && 'step' in last && last.step === step) {
            return [...prev.slice(0, -1), { ...last, lines: [...last.lines, item.lines[charIndex]] }];
          }

          return [...prev, { type: 'output', lines: [item.lines[charIndex]], step }];
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
  }, [done, phase]);

  return { rendered, currentPromptText, done };
}

function PromptLine({ text, cursor = false }: { text: string; cursor?: boolean }) {
  return (
    <div className="flex flex-wrap items-baseline">
      <span className="mr-1 font-semibold text-term-green">marcelo@apolinario</span>
      <span className="text-term-mute">:</span>
      <span className="mx-1 text-term-cyan">~</span>
      <span className="mr-2 text-slate-200">$</span>
      <span className="break-words text-slate-100">{text}</span>
      {cursor && <span className="terminal-cursor ml-1 inline-block h-[1em] w-2 rounded-[1px] bg-term-cyan align-baseline" aria-hidden />}
    </div>
  );
}

export function Stack() {
  const { rendered, currentPromptText, done } = useTerminalAnimation();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [currentPromptText, rendered]);

  return (
    <TerminalWindow title="~/stack" className="overflow-hidden">
      <div className="max-h-[50vh] space-y-2 overflow-y-auto text-sm leading-7 sm:text-base">
        {rendered.map((block, index) => {
          if (block.type === 'prompt') {
            return (
              <div key={index} className="mb-1">
                <PromptLine text={block.text} />
              </div>
            );
          }

          return (
            <div key={index} className="mb-2 space-y-1 pl-2 text-slate-300">
              {block.lines.map((line, lineIndex) => (
                <p key={lineIndex}>
                  <span className="mr-2 text-term-mute">›</span>
                  <span>{line}</span>
                </p>
              ))}
            </div>
          );
        })}

        {!done && <PromptLine text={currentPromptText} cursor />}
        {done && <PromptLine text="" cursor />}
        <div ref={bottomRef} />
      </div>
    </TerminalWindow>
  );
}
