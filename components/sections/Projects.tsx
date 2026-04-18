import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';
import { projects } from '@/data/projects';

const statusStyles = {
  WIP: 'border-amber-500/40 bg-amber-500/10 text-term-amber',
  MVP: 'border-cyan-500/40 bg-cyan-500/10 text-term-cyan',
  Produção: 'border-green-500/40 bg-green-500/10 text-term-green'
} as const;

export function Projects() {
  return (
    <TerminalWindow title="~/projetos">
      <Prompt path="~/projetos" command="ls -la --group-directories-first" />

      <div className="grid gap-3">
        {projects.map((project) => (
          <article key={project.name} className="terminal-output space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-semibold text-term-green">{project.name}</h3>
              <span className={`rounded border px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] ${statusStyles[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm text-term-mute">{project.description}</p>

            <dl className="space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-term-amber">Problema</dt>
                <dd className="text-term-mute">{project.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-term-amber">Resultado</dt>
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
              <Link className="text-sm font-semibold text-term-cyan underline-offset-4 hover:underline" href={project.href} target="_blank" rel="noreferrer">
                Ver repositório
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </TerminalWindow>
  );
}
