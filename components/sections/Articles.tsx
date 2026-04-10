import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function Articles() {
  return (
    <TerminalWindow title="~/artigos">
      <Prompt path="~/artigos" command="ls -lh --sort=time" />
      <div className="terminal-output overflow-x-auto text-sm">
        <pre className="whitespace-pre text-term-text">
          <span className="text-term-cyan">-rw-rw-r--</span> 1 marcelo apolinario 8,4K abr 10 16:42{' '}
          <Link className="text-term-green underline-offset-4 hover:underline" href="/artigos/ambiente-instalacao-java-linux">
            ambiente-instalacao-java-linux.txt
          </Link>
        </pre>
        <pre className="whitespace-pre text-term-text">
          <span className="text-term-cyan">-rw-rw-r--</span> 1 marcelo apolinario 6,0K abr 4 19:47 second-article.txt
        </pre>
        <pre className="whitespace-pre text-term-text">
          <span className="text-term-cyan">-rw-rw-r--</span> 1 marcelo apolinario 2,0K abr 4 19:47 first-article.txt
        </pre>
      </div>

      <Prompt path="~/artigos" command="grep -i 'java' ./ambiente-instalacao-java-linux.txt" />
      <div className="terminal-output text-sm">
        <p>
          Guia completo para configurar Java 21, Maven, IntelliJ e PostgreSQL no Linux.{' '}
          <Link className="text-term-cyan underline-offset-4 hover:underline" href="/artigos/ambiente-instalacao-java-linux">
            Abrir artigo completo
          </Link>
          .
        </p>
      </div>
    </TerminalWindow>
  );
}
