import type { ReactNode } from 'react';

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <section aria-label={title} className={`terminal-card grid min-w-0 grid-cols-1 overflow-hidden ${className ?? ''}`}>
      <header className="flex items-center justify-between gap-3 border-b border-term-border/80 bg-slate-900/50 px-3 py-2.5 text-xs text-term-mute sm:px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <p className="truncate font-mono tracking-wide text-term-mute">{title}</p>
      </header>
      <div className="flex min-w-0 flex-col gap-3 overflow-x-hidden p-2.5 sm:gap-5 sm:p-5">{children}</div>
    </section>
  );
}
