import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <TerminalWindow title="~/projetos">
      <Prompt path="~/projetos" command="ls -la --group-directories-first" />

      <div className="grid gap-3">
        {projects.map((project) => (
          <article key={project.name} className="terminal-output space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-term-green">{project.name}</h3>
              <span className="rounded border border-term-border px-2 py-1 text-xs text-term-amber">{project.status}</span>
            </div>
            <p className="text-sm text-term-mute">{project.description}</p>
            <dl className="grid gap-2 text-sm">
              <div>
                <dt className="font-semibold text-term-cyan">Problema</dt>
                <dd className="text-term-mute">{project.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-term-cyan">Resultado</dt>
                <dd className="text-term-mute">{project.result}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded border border-term-border px-2 py-1 text-term-cyan">
                  {tag}
                </span>
              ))}
            </div>
            {project.href ? (
              <Link href={project.href} className="inline-flex text-sm font-semibold text-term-cyan underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                Abrir repositório
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </TerminalWindow>
  );
}
