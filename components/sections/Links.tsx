import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const resumeLink: [string, string] | null = null;

const links: [string, string][] = [
  ['GitHub', 'github.com/example'],
  ['LinkedIn', 'linkedin.com/in/example'],
  ['Email', 'marcelo@example.dev'],
  ['Blog / Artigos', 'example.com/artigos'],
  ...(resumeLink ? [resumeLink] : [])
];

export function Links() {
  return (
    <TerminalWindow title="~/contato">
      <Prompt command="cat contato.conf" />
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map(([label, value]) => (
          <div key={label} className="terminal-output">
            <p className="text-sm text-term-mute">{label}</p>
            <p className="break-all font-semibold text-term-cyan">{value}</p>
          </div>
        ))}
      </div>
      <p className="break-words rounded-md bg-term-green px-3 py-2 text-sm font-semibold text-slate-900 sm:text-base">
        marcelo@apolinario · DevOps & Platform Engineer · 2026
      </p>
    </TerminalWindow>
  );
}
