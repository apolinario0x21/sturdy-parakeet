import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const metadata = [
  { key: 'Localização', value: 'Brasil 🇧🇷' },
  { key: 'Graduação', value: 'Sistemas de Informação' },
  { key: 'Pós-graduação', value: 'Desenvolvimento Web' },
  { key: 'Especialidades', value: 'DevOps · Cloud · Networking · IaC' },
  { key: 'OS', value: 'Kali, Fedora, Ubuntu, Zorin OS, Parrot OS e Windows' }
] as const;

export function About() {
  return (
    <TerminalWindow title="~/about" className="h-full">
      <Prompt command="whoami" />
      <div className="terminal-output grid gap-4 border-l-2 border-l-term-cyan">
        <div className="space-y-4">
          <p>
            <span className="font-semibold text-term-green">Marcelo Apolinário</span>, profissional com base sólida em{' '}
            <span className="font-semibold text-term-cyan">Infraestrutura de TI e Redes</span>, especializado em ambientes
            cloud-native, automação e plataformas escaláveis.
          </p>
          <p>
            Atuo com foco em confiabilidade, segurança e entrega contínua, do provisionamento de redes físicas até pipelines
            GitOps em produção.
          </p>
        </div>

        <ul className="space-y-1.5 font-mono text-sm">
          {metadata.map(({ key, value }) => (
            <li key={key} className="grid grid-cols-[18ch_1fr] gap-3">
              <span className="text-term-mute">{key}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </TerminalWindow>
  );
}
