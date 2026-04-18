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
            <h3 className="font-semibold text-term-green">{project.name}</h3>
            <p className="text-sm text-term-mute">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded border border-term-border px-2 py-1 text-term-cyan">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </TerminalWindow>
  );
}
