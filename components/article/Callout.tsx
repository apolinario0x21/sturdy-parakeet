import type { ReactNode } from 'react';

export function Callout({ tone, children }: { tone: 'info' | 'warn' | 'ok'; children: ReactNode }) {
  const styles = {
    info: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-100',
    warn: 'border-amber-500/30 bg-amber-500/10 text-amber-100',
    ok: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100'
  };

  return <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles[tone]}`}>{children}</div>;
}
