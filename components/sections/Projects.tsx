import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const projects = [
  {
    name: 'academic-records',
    description: 'API RESTful em Golang para gestão acadêmica com arquitetura limpa e foco em escalabilidade.',
    tags: ['Golang', 'REST', 'API', 'Backend']
  },
  {
    name: 'cloud-observability-kit',
    description: 'Stack de observabilidade com métricas, logs e alertas para workloads em Kubernetes.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE']
  },
  {
    name: 'iac-network-blueprint',
    description: 'Módulos Terraform para provisionar rede e segurança com padrões reutilizáveis em multi-cloud.',
    tags: ['Terraform', 'AWS', 'GCP', 'Networking']
  }
] as const;

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
