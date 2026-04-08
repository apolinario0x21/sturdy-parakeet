type PromptProps = {
  path?: string;
  command: string;
};

export function Prompt({ path = '~', command }: PromptProps) {
  return (
    <p className="text-xs leading-relaxed sm:text-base lg:text-lg">
      <span className="font-semibold text-term-green">marcelo</span>
      <span className="font-semibold text-term-cyan">@apolinario</span>
      <span>:</span>
      <span className="font-semibold text-amber-300">{path}</span>
      <span>$ </span>
      <span className="break-all text-term-mute">{command}</span>
      <span
        className="terminal-cursor ml-1 inline-block h-[1em] w-2 translate-y-[0.1em] rounded-[1px] bg-term-text align-baseline"
        aria-hidden
      />
    </p>
  );
}
