import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function Projects() {
  return (
    <TerminalWindow title="~/projetos">
      <Prompt path="~/projetos" command="ls -la --group-directories-first" />
      <article className="terminal-output space-y-3">
        <h3 className="font-semibold text-term-green">academic-records</h3>
        <p className="text-sm text-term-mute">
          API RESTful em Golang para gestão acadêmica com arquitetura limpa e foco em escalabilidade.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {['Golang', 'REST', 'API', 'Backend'].map((tag) => (
            <span key={tag} className="rounded border border-term-border px-2 py-1 text-term-cyan">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </TerminalWindow>
  );
}
