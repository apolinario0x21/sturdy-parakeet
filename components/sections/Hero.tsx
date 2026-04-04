import { TerminalWindow } from '@/components/TerminalWindow';
import { Prompt } from '@/components/Prompt';

export function Hero() {
  return (
    <TerminalWindow title="~/hero">
      <Prompt command="cat profile.txt" />
      <h1 className="text-[36px] font-bold leading-tight text-term-green">Marcelo</h1>
      <div className="grid gap-4 text-sm sm:grid-cols-2">
        <p>role: DevOps & Networking Engineer</p>
        <p>kernel: Linux 6.x (Wolfi/Debian)</p>
        <p>uptime: sempre online</p>
        <p>
          status: <span className="text-term-green">● disponível</span>
        </p>
      </div>
    </TerminalWindow>
  );
}
