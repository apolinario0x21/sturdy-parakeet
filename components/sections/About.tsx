import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

const metadata = [
  { key: 'Localização', value: 'Brasil' },
  { key: 'Formação', value: 'Sistemas de Informação' },
  { key: 'Pós-graduação', value: 'Desenvolvimento Web' },
  { key: 'Áreas de atuação', value: 'DevOps · Cloud · Platform · Networking · IaC' }
] as const;

export function About() {
  return (
    <TerminalWindow title="~/about" className="h-full">
      <Prompt command="whoami" />
      <div className="terminal-output grid gap-4 border-l-2 border-l-term-cyan">
        <div className="space-y-4">
          <p>
            Marcelo Apolinário atua na interseção entre infraestrutura, automação e confiabilidade, com base sólida em Redes
            e Linux e foco em ambientes cloud-native.
          </p>
          <p>
            Sua experiência combina operação de serviços críticos, infraestrutura como código e pipelines de entrega, buscando
            reduzir esforço manual, aumentar previsibilidade e sustentar plataformas escaláveis.
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
