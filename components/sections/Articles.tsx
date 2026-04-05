import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function Articles() {
  return (
    <TerminalWindow title="~/artigos">
      <Prompt path="~/artigos" command="ls -lh --sort=time" />
      <div className="terminal-output overflow-x-auto text-sm">
        <pre className="whitespace-pre text-term-text">
          <span className="text-term-cyan">-rw-rw-r--</span> 1 marcelo apolinario 6,0K abr 4 19:47{' '}
          <span className="text-term-green"></span> second-article.txt
        </pre>
        <pre className="whitespace-pre text-term-text">
          <span className="text-term-cyan">-rw-rw-r--</span> 1 marcelo apolinario 2,0K abr 4 19:47{' '}
          <span className="text-term-green"></span> first-article.txt
        </pre>
      </div>

      <Prompt path="~/artigos" command="grep -i 'linux' ./first-article.txt" />
      <div className="terminal-output text-sm">
        <p>Guia prático para instalar e rodar Linux em VM local, Docker e EC2 na AWS.</p>
      </div>
    </TerminalWindow>
  );
}
