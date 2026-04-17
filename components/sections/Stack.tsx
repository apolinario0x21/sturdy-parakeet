import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

type StackGroup = {
  category: string;
  items: string[];
};

const stackGroups: StackGroup[] = [
  {
    category: 'Cloud & Plataforma',
    items: ['AWS', 'GCP', 'Kubernetes', 'Helm', 'CloudFront', 'Route 53']
  },
  {
    category: 'Infraestrutura como Código',
    items: ['Terraform', 'Terraform Cloud', 'Packer', 'GitHub Actions']
  },
  {
    category: 'Containers & Sistemas',
    items: ['Docker', 'Docker Compose', 'Linux (Ubuntu/Kali/Parrot)', 'Windows']
  },
  {
    category: 'Linguagens & Automação',
    items: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python', 'Bash']
  }
];

export function Stack() {
  return (
    <TerminalWindow title="~/stack">
      <Prompt command="cat stack.yml" />

      <div className="grid gap-3 sm:gap-4">
        {stackGroups.map((group) => (
          <article key={group.category} className="terminal-output space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-amber-300">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-term-border px-2.5 py-1 text-xs text-term-cyan sm:text-sm">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </TerminalWindow>
  );
}
