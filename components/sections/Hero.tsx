import { TerminalWindow } from '@/components/TerminalWindow';
import { Prompt } from '@/components/Prompt';

export function Hero() {
  return (
    <TerminalWindow title="~/home" className="h-full">
      <Prompt command="cat profile.txt" />
      <h1 className="text-[36px] font-bold leading-tight text-term-green">Marcelo</h1>
      <div className="grid gap-4 text-sm text-term-mute">
        <p>role: DevOps & Networking Engineer</p>
        <p>kernel: Linux</p>
        <p>uptime: sempre online</p>
        <p>
          status: <span className="text-term-green">● disponível</span>
        </p>
      </div>
    </TerminalWindow>
  );
}
