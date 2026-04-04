import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const groups = [
  { name: 'Sistemas Operacionais & Fundamentos', items: ['Linux', 'Bash', 'Systemd', 'Wolfi OS'] },
  { name: 'Containers & Orquestração', items: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm'] },
  { name: 'IaC & Automação', items: ['Terraform', 'Terraform Cloud', 'Packer', 'GitHub Actions'] },
  { name: 'Cloud Providers', items: ['AWS', 'GCP', 'CloudFront', 'Route 53', 'Lambda'] },
  { name: 'Linguagens', items: ['Golang', 'Java', 'TypeScript'] }
];

export function Stack() {
  return (
    <TerminalWindow title="marcelo@apolinario:~ -- stack">
      <Prompt command="cat stack.json | jq '.skills[]'" />
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.name}>
            <p className="mb-2 text-sm text-amber-300"># {group.name}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-term-border px-3 py-1 text-sm text-term-cyan">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}
