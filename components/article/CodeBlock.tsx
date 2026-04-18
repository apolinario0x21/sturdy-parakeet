type CodeBlockProps = {
  title?: string;
  code: string;
};

export function CodeBlock({ title = 'bash', code }: CodeBlockProps) {
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
