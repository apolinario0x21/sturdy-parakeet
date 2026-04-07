type PromptProps = {
  path?: string;
  command: string;
};

export function Prompt({ path = '~', command }: PromptProps) {
  return (
    <p className="break-words text-sm sm:text-lg">
      <span className="font-semibold text-term-green">marcelo</span>
      <span className="font-semibold text-term-cyan">@apolinario</span>
      <span>:</span>
      <span className="font-semibold text-amber-300">{path}</span>
      <span>$ </span>
      <span className="text-term-mute">{command}</span>
    </p>
  );
}
