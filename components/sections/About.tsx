import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export function About() {
  return (
    <TerminalWindow title="~/about">
      <Prompt command="whoami --verbose" />
      <div className="terminal-output border-l-2 border-l-term-cyan">
        <p>
          <span className="font-semibold text-term-green">Marcelo Apolinário</span> — profissional com{' '}
          <span className="font-semibold text-term-cyan">fortes raízes em Infraestrutura de TI e Redes</span>, com foco em
          pipelines cloud-native e automação.
        </p>
        <p className="mt-4">
          Bacharel em Sistemas de Informação e pós-graduando em Desenvolvimento Web. Entusiasta de Linux,
          segurança da informação e plataformas escaláveis.
        </p>
        <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-[160px_1fr]">
          <dt className="text-term-mute">Localização:</dt>
          <dd>Brasil 🇧🇷</dd>
          <dt className="text-term-mute">Especialidades:</dt>
          <dd>DevOps · Cloud · Networking · IaC · Security</dd>
          <dt className="text-term-mute">OS favorito:</dt>
          <dd>Linux (Wolfi, Debian)</dd>
        </dl>
      </div>
    </TerminalWindow>
  );
}
