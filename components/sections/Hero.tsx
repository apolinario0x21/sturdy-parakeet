import { TerminalWindow } from '@/components/TerminalWindow';
import { Prompt } from '@/components/Prompt';

export function Hero() {
  return (
    <TerminalWindow title="~/home">
      <h1 className="text-[36px] font-bold leading-tight text-term-green">Marcelo</h1>
      <div className="grid gap-2 text-sm text-term-mute sm:gap-x-6">
        <p>
          role: <span className="text-term-text">DevOps &amp; Networking Engineer</span>
        </p>
        <p>
          kernel: <span className="text-term-text">Linux</span>
        </p>
        <p>
          uptime: <span className="text-term-text">sempre online</span>
        </p>
        <p>
          status: <span className="text-term-green">● disponível</span>
        </p>
      </div>
      <div className="h-px w-full bg-term-border/70" />
      <Prompt command="whoami" />
      <div className="terminal-output border-l-2 border-l-term-cyan">
        <p>
          <span className="font-semibold text-term-green">Marcelo Apolinário</span> — profissional com{' '}
          <span className="font-semibold text-term-cyan">fortes raízes em Infraestrutura de TI e Redes</span>, com foco em
          pipelines cloud-native e automação.
        </p>
        <p className="mt-3">
          Pós-graduando em Desenvolvimento Web e bacharel em Sistemas de Informação. Entusiasta do ecossistema Linux,
          Segurança da Informação e plataformas escaláveis.
        </p>
        <dl className="mt-4 grid gap-1.5 text-sm sm:grid-cols-[160px_1fr]">
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
