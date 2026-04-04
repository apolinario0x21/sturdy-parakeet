import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const links = [
  ['GitHub', 'github.com/test-example'],
  ['LinkedIn', 'linkedin.com/in/marcelo-apolinario'],
  ['Blog / Artigos', 'example.com/artigos'],
  ['Email', 'marcelo@example.com']
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
        NORMAL · marcelo@apolinario · DevOps & Networking · Linux Enthusiast · 2025
      </p>
    </TerminalWindow>
  );
}
