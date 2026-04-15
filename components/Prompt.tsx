import type { CSSProperties } from 'react';

type PromptProps = {
  path?: string;
  command: string;
};

export function Prompt({ path = '~', command }: PromptProps) {
  const typingStyle = {
    ['--typing-characters' as string]: command.length
  } as CSSProperties;

  return (
    <p className="flex items-baseline whitespace-nowrap text-xs leading-relaxed sm:text-base lg:text-lg">
      <span className="font-semibold text-term-green">marcelo</span>
      <span className="font-semibold text-term-cyan">@apolinario</span>
      <span>:</span>
      <span className="font-semibold text-amber-300">{path}</span>
      <span>$ </span>
      <span className="terminal-typing text-term-mute" style={typingStyle}>
        {command}
      </span>
      <span
        className="terminal-cursor ml-1 inline-block h-[1em] w-2 rounded-[1px] bg-term-text align-baseline"
        aria-hidden
      />
    </p>
  );
}
