import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function About() {
  return (
    <TerminalWindow title="~/about" className="h-full">
      <Prompt command="whoami" />
      <div className="terminal-output grid gap-4 border-l-2 border-l-term-cyan">
        <div className="space-y-4">
          <p>
            <span className="font-semibold text-term-green">Marcelo Apolinário</span> — profissional com{' '}
            <span className="font-semibold text-term-cyan">fortes raízes em Infraestrutura de TI e Redes</span>, com foco em
            pipelines cloud-native e automação.
          </p>
          <p>
            Pós-graduando em Desenvolvimento Web e bacharel em Sistemas de Informação. Entusiasta do ecossistema Linux,
            Segurança da Informação e plataformas escaláveis.
          </p>
        </div>
        <dl className="grid gap-2 text-sm sm:grid-cols-[160px_1fr]">
          <dt className="text-term-mute">Localização:</dt>
          <dd>Brasil 🇧🇷</dd>
          <dt className="text-term-mute">Graduação:</dt>
          <dd>Sistemas de Informação</dd>
          <dt className="text-term-mute">Pós-graduação:</dt>
          <dd>Desenvolvimento Web</dd>
          <dt className="text-term-mute">Especialidades:</dt>
          <dd>DevOps · Cloud · Networking · IaC</dd>
          <dt className="text-term-mute">OS:</dt>
          <dd>Kali, Fedora, Ubuntu, Zorin OS, Parrot OS e Windows</dd>
        </dl>
      </div>
    </TerminalWindow>
  );
}
