import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const stacks: Record<string, string[]> = {
  SO: ['Ubuntu', 'Kali Linux', 'Parrot OS', 'Zorin OS', 'Windows' ],
  Containers: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm'],
  IaC: ['Terraform', 'Terraform Cloud', 'Packer', 'GitHub Actions'],
  Cloud: ['AWS', 'GCP', 'CloudFront', 'Route 53', 'Lambda'],
  Linguagens: ['Golang', 'Java', 'TypeScript', 'JavaScript', 'Python', 'Bash'],
};

export function Stack() {
  return (
    <TerminalWindow title="~/stack">
      <Prompt command="jq '.' stack.json" />
      <div className="space-y-3 font-mono text-sm">
        <p>{'{'}</p>
        {Object.entries(stacks).map(([groupName, items], groupIndex, groups) => (
          <div key={groupName} className="flex flex-wrap items-center gap-2 pl-4">
            <span className="text-amber-300">"{groupName}":</span>
            <span>[</span>
            <div className="flex flex-wrap items-center gap-2">
              {items.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-1">
                  <span className="rounded-md border border-term-border px-3 py-1 text-sm text-term-cyan">{item}</span>
                  {index < items.length - 1 ? <span className="text-term-mute">,</span> : null}
                </span>
              ))}
            </div>
            <span>]</span>
            {groupIndex < groups.length - 1 ? <span className="text-term-mute">,</span> : null}
          </div>
        ))}
        <p>{'}'}</p>
      </div>
    </TerminalWindow>
  );
}
