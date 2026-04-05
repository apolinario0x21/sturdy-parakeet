import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const links = [
  ['GitHub', 'github.com/example'],
  ['LinkedIn', 'linkedin.com/in/example'],
  ['Blog / Artigos', 'example.com/artigos'],
  ['Email', 'marcelo@example.dev']
];

export function Links() {
  return (
    <TerminalWindow title="~/links">
      <Prompt command="cat links.conf" />
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map(([label, value]) => (
          <div key={label} className="terminal-output">
            <p className="text-sm text-term-mute">{label}</p>
            <p className="font-semibold text-term-cyan">{value}</p>
          </div>
        ))}
      </div>
      <p className="rounded-md bg-term-green px-3 py-2 font-semibold text-slate-900">
        marcelo@apolinario · DevOps & Networking · Linux Enthusiast · 2026
      </p>
    </TerminalWindow>
  );
}
