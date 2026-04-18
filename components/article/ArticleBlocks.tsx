import type { ReactNode } from 'react';

export type Step = {
  number: string;
  title: string;
  description?: string;
  command?: string;
  note?: string;
};

export function CodeBlock({ title = 'bash', code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-term-border/70 bg-slate-950/70">
      <div className="flex items-center justify-between border-b border-term-border/70 bg-term-panel/60 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.16em] text-term-mute">{title}</span>
      </div>
      <pre className="overflow-x-auto whitespace-pre px-4 py-4 text-xs leading-relaxed text-term-text sm:text-sm">{code}</pre>
    </div>
  );
}

export function Callout({ tone, children }: { tone: 'info' | 'warn' | 'ok'; children: ReactNode }) {
  const styles = {
    info: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-100',
    warn: 'border-amber-500/30 bg-amber-500/10 text-amber-100',
    ok: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100'
  };

  return <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles[tone]}`}>{children}</div>;
}

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="space-y-5">
      {steps.map((step) => (
        <div key={step.number} className="rounded-xl border border-term-border/70 bg-term-panel/30 p-4 sm:p-5">
          <div className="mb-2 flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-xs font-bold text-term-amber">
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
