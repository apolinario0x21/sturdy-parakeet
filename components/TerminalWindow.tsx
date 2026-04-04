import type { ReactNode } from 'react';

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
};

export function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <section className="terminal-card overflow-hidden">
      <header className="flex items-center justify-between border-b border-term-border/80 bg-slate-900/50 px-4 py-3 text-xs text-term-mute">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <p className="tracking-widest">{title}</p>
        <span className="opacity-0">dots</span>
      </header>
      <div className="space-y-5 p-5">{children}</div>
    </section>
  );
}
