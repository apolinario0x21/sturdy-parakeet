import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function Articles() {
  return (
    <TerminalWindow title="marcelo@apolinario:~/artigos -- ls">
      <Prompt path="~/artigos" command="ls -lh --sort=time --color=always" />
      <div className="terminal-output text-sm">
        <p className="text-term-mute">total 1</p>
        <p>
          mar 19 2025 <span className="text-term-green">01</span> instalar_linux_via_vm_docker_ou_ec2.md
        </p>
      </div>
      <Prompt path="~/artigos" command="grep -i 'synopsis' ./01_instalar_linux" />
      <div className="terminal-output text-sm">
        <p>Guia prático para instalar e rodar Linux em VM local, Docker e EC2 na AWS.</p>
      </div>
    </TerminalWindow>
  );
}
