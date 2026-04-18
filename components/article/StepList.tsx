import { CodeBlock } from '@/components/article/CodeBlock';

export type Step = {
  number: string;
  title: string;
  description?: string;
  command?: string;
  note?: string;
};

type StepListProps = {
  steps: Step[];
};

export function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-5">
      {steps.map((step) => (
        <div key={step.number} className="rounded-xl border border-term-border/70 bg-term-panel/30 p-4 sm:p-5">
          <div className="mb-2 flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-term-amber/40 bg-term-amber/10 text-xs font-bold text-term-amber">
              {step.number}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-term-text sm:text-base">{step.title}</h3>
              {step.description ? <p className="mt-1 text-sm text-term-mute">{step.description}</p> : null}
            </div>
          </div>

          {step.command ? <CodeBlock code={step.command} /> : null}
          {step.note ? <p className="mt-2 text-xs text-term-mute sm:text-sm">{step.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
