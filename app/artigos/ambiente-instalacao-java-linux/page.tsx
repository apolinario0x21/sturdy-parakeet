import type { ReactNode } from 'react';
import Link from 'next/link';

type TocItem = {
  id: string;
  title: string;
};

type StackItem = {
  icon: string;
  title: string;
  subtitle: string;
};

type Step = {
  number: string;
  title: string;
  description?: string;
  command?: string;
  note?: string;
};

const stackItems: StackItem[] = [
  { icon: '☕', title: 'Java (JDK)', subtitle: 'OpenJDK 21 LTS' },
  { icon: '📦', title: 'Maven', subtitle: 'via apt' },
  { icon: '🧠', title: 'IntelliJ IDEA', subtitle: 'Community / Ultimate' },
  { icon: '🐘', title: 'PostgreSQL', subtitle: '17 (PGDG)' },
  { icon: '🖥️', title: 'pgAdmin 4', subtitle: 'desktop + web' },
  { icon: '🔶', title: 'Postman', subtitle: 'via Snap' },
  { icon: '🐙', title: 'Git', subtitle: 'via apt' }
];

const toc: TocItem[] = [
  { id: 'java', title: 'Java 21 (OpenJDK)' },
  { id: 'maven', title: 'Apache Maven' },
  { id: 'intellij', title: 'IntelliJ IDEA' },
  { id: 'postgresql', title: 'PostgreSQL 17' },
  { id: 'pgadmin', title: 'pgAdmin 4' },
  { id: 'postman', title: 'Postman' },
  { id: 'git', title: 'Git' },
  { id: 'resumo', title: 'Resumo dos Comandos' }
];

const javaSteps: Step[] = [
  {
    number: '01',
    title: 'Verificar se Java já está instalado',
    command: 'java -version',
    note: 'Se retornar “command not found”, prossiga com os próximos passos.'
  },
  {
    number: '02',
    title: 'Instalar o JDK 21 completo',
    description:
      'Instale openjdk-21-jdk (versão completa). Evite instalar somente variações headless para ambiente de desenvolvimento desktop.',
    command: 'sudo apt update\nsudo apt install openjdk-21-jdk',
    note: 'Dependências como openjdk-21-jre e versões headless serão instaladas automaticamente pelo apt.'
  },
  {
    number: '03',
    title: 'Validar Java e compilador',
    command:
      'java --version\njavac --version\n\n# Exemplo de saída esperada\nopenjdk 21.x.x\nOpenJDK Runtime Environment (...)\n\njavac 21.x.x'
  },
  {
    number: '04',
    title: 'Identificar diretório do Java para o JAVA_HOME',
    description:
      'Use o update-alternatives para encontrar o caminho real da instalação. Depois remova o sufixo /bin/java para obter o diretório base.',
    command:
      'sudo update-alternatives --config java\n\n# Exemplo\n# /usr/lib/jvm/java-21-openjdk-amd64/bin/java'
  },
  {
    number: '05',
    title: 'Configurar variável JAVA_HOME',
    description:
      'Essa variável é essencial para ferramentas de build, servidores de aplicação e integrações com IDEs.',
    command:
      'sudo nano /etc/environment\n\n# Adicione\nJAVA_HOME="/usr/lib/jvm/java-21-openjdk-amd64"\n\nsource /etc/environment\necho $JAVA_HOME'
  }
];

const postgresSteps: Step[] = [
  {
    number: '01',
    title: 'Adicionar chave e repositório oficial PGDG',
    command:
      'sudo apt install curl ca-certificates\nsudo install -d /usr/share/postgresql-common/pgdg\n\nsudo curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc \\\n  --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc\n\n. /etc/os-release\nsudo sh -c "echo \'deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] \\\n  https://apt.postgresql.org/pub/repos/apt $VERSION_CODENAME-pgdg main\' \\\n  > /etc/apt/sources.list.d/pgdg.list"\n\nsudo apt update'
  },
  { number: '02', title: 'Instalar PostgreSQL 17', command: 'sudo apt install postgresql-17' },
  {
    number: '03',
    title: 'Validar serviço e versão',
    command: 'sudo systemctl status postgresql\npsql --version'
  },
  {
    number: '04',
    title: 'Definir senha do usuário postgres',
    description: 'Passo recomendado para uso local e conexão por ferramentas externas (IDE, pgAdmin).',
    command: "sudo -u postgres psql\nALTER USER postgres PASSWORD 'sua_senha';\n\\q"
  }
];

function CodeBlock({ title = 'bash', code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-term-border/70 bg-slate-950/70">
      <div className="flex items-center justify-between border-b border-term-border/70 bg-term-panel/60 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.16em] text-term-mute">{title}</span>
      </div>
      <pre className="overflow-x-auto whitespace-pre px-4 py-4 text-xs leading-relaxed text-term-text sm:text-sm">{code}</pre>
    </div>
  );
}

function Callout({ tone, children }: { tone: 'info' | 'warn' | 'ok'; children: ReactNode }) {
  const styles = {
    info: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-100',
    warn: 'border-amber-500/30 bg-amber-500/10 text-amber-100',
    ok: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100'
  };

  return <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles[tone]}`}>{children}</div>;
}

function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="space-y-5">
      {steps.map((step) => (
        <div key={step.number} className="rounded-xl border border-term-border/70 bg-term-panel/30 p-4 sm:p-5">
          <div className="mb-2 flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-xs font-bold text-amber-300">
              {step.number}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-term-text sm:text-base">{step.title}</h3>
              {step.description ? <p className="mt-1 text-sm text-term-mute">{step.description}</p> : null}
            </div>
          </div>

          {step.command ? <CodeBlock code={step.command} /> : null}
          {step.note ? <p className="mt-2 text-xs text-term-mute sm:text-sm">{step.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default function AmbienteInstalacaoJavaLinuxPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-term-text sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-2xl border border-term-border/80 bg-slate-950/70 shadow-[0_0_40px_rgba(66,255,159,0.07)]">
        <header className="border-b border-term-border/80 bg-term-panel/65 px-4 py-10 text-center sm:px-8">
          <p className="mx-auto mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-300">
            ☕ DevOps · Linux · Java · PostgreSQL
          </p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Ambiente de Desenvolvimento <span className="text-amber-300">Java</span> no Linux
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-term-mute sm:text-base">
            Guia detalhado de instalação e configuração no Ubuntu 24.04, cobrindo da base Java até ferramentas
            de produtividade para desenvolvimento backend.
          </p>
          <p className="mt-4 text-xs text-term-mute sm:text-sm">
            Ubuntu 24.04 LTS · Java 21 · Maven · IntelliJ · PostgreSQL 17 · pgAdmin 4 · Postman · Git
          </p>
        </header>

        <div className="space-y-8 px-4 py-6 sm:px-8 sm:py-8">
          <section>
            <div className="section-header">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-term-cyan">Stack do ambiente</h2>
              <span className="text-xs text-term-mute">o que será instalado</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stackItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-term-border/70 bg-term-panel/40 px-4 py-3">
                  <p className="text-xl">{item.icon}</p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="text-xs text-term-mute">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="terminal-output">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-term-mute">Índice</p>
            <ol className="grid gap-1 text-sm sm:grid-cols-2">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition hover:text-term-cyan">
                    {String(index + 1).padStart(2, '0')} · {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <section id="java" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">Java 21 — OpenJDK</h2>
            <p className="text-sm text-term-mute sm:text-base">
              O Java 21 é a versão LTS recomendada para estabilidade em projetos de médio e longo prazo. Para
              desenvolvimento, utilize sempre o pacote JDK completo (com compilador e ferramentas de build).
            </p>
            <Callout tone="info">
              <strong>JDK x JRE:</strong> o JDK inclui compilador, depurador e ferramentas de desenvolvimento. O JRE é
              focado em execução. Para programar, escolha JDK.
            </Callout>
            <StepList steps={javaSteps} />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-term-cyan">Gerenciar múltiplas versões</h3>
              <CodeBlock
                code={
                  'sudo update-alternatives --config java\n# selecione o número da versão desejada\n# depois atualize JAVA_HOME em /etc/environment'
                }
              />
            </div>
          </section>

          <section id="maven" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">Apache Maven</h2>
            <p className="text-sm text-term-mute sm:text-base">
              O Maven gerencia dependências e ciclo de build do projeto Java. No Ubuntu, a forma mais simples é via
              apt.
            </p>
            <CodeBlock code={'sudo apt update\nsudo apt install maven\n\nmvn -version'} />
            <Callout tone="info">Com o JAVA_HOME configurado, o Maven detecta automaticamente o Java correto.</Callout>
            <Callout tone="warn">
              Se precisar de versão mais nova que a do apt, compare com <code>apt-cache policy maven</code> e avalie
              instalação manual.
            </Callout>
          </section>

          <section id="intellij" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">IntelliJ IDEA</h2>
            <p className="text-sm text-term-mute sm:text-base">
              IDE recomendada para Java. Community cobre a maioria dos cenários acadêmicos e pessoais. Ultimate é
              indicada para stacks corporativas com Spring e integrações avançadas.
            </p>
            <CodeBlock
              code={
                '# Community (gratuita)\nsudo snap install intellij-idea-community --classic\n\n# Ultimate (paga/trial)\nsudo snap install intellij-idea-ultimate --classic\n\n# validação\nsnap list | grep intellij'
              }
            />
          </section>

          <section id="postgresql" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">PostgreSQL 17</h2>
            <p className="text-sm text-term-mute sm:text-base">
              Instalação via PGDG garante versão mais atualizada e manutenção direta da equipe PostgreSQL. É uma boa
              prática para ambientes de desenvolvimento mais próximos de produção.
            </p>
            <Callout tone="warn">
              Para projetos estáveis, a versão 17 costuma ser excelente escolha por maturidade e compatibilidade.
            </Callout>
            <StepList steps={postgresSteps} />
            <Callout tone="ok">PostgreSQL instalado e pronto para uso local com autenticação configurada.</Callout>
          </section>

          <section id="pgadmin" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">pgAdmin 4</h2>
            <p className="text-sm text-term-mute sm:text-base">
              Interface gráfica oficial para administrar PostgreSQL. Pode ser usada em modo desktop e web.
            </p>
            <CodeBlock
              code={
                'curl -fsS https://www.pgadmin.org/static/packages_pgadmin_org.pub | \\\n  sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg\n\nsudo sh -c \'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] \\\n  https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/noble pgadmin4 main" \\\n  > /etc/apt/sources.list.d/pgadmin4.list\'\n\nsudo apt update\nsudo apt install pgadmin4\nsudo /usr/pgadmin4/bin/setup-web.sh'
              }
            />
            <Callout tone="info">
              Após setup web, acesse <code>http://localhost/pgadmin4</code>. Para login local, você pode usar um e-mail
              fictício no formato <code>nome@dominio.ext</code>.
            </Callout>
          </section>

          <section id="postman" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">Postman</h2>
            <p className="text-sm text-term-mute sm:text-base">
              Cliente HTTP útil para validar APIs REST durante o desenvolvimento e testes de integração.
            </p>
            <CodeBlock code={'sudo snap install postman\nsnap list | grep postman'} />
          </section>

          <section id="git" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">Git</h2>
            <p className="text-sm text-term-mute sm:text-base">Controle de versão obrigatório para rastrear mudanças e colaborar em equipe.</p>
            <CodeBlock
              code={
                'sudo apt update\nsudo apt install git\n\ngit --version\ngit config --global user.name "Seu Nome"\ngit config --global user.email "seu@email.com"\ngit config --list'
              }
            />
            <Callout tone="ok">Com Git configurado, seus commits já sairão com identidade correta.</Callout>
          </section>

          <section id="resumo" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">Resumo dos comandos</h2>
            <CodeBlock
              code={
                'Java: sudo apt install openjdk-21-jdk\nMaven: sudo apt install maven\nIntelliJ: sudo snap install intellij-idea-community --classic\nPostgreSQL: sudo apt install postgresql-17\npgAdmin: sudo apt install pgadmin4\nPostman: sudo snap install postman\nGit: sudo apt install git'
              }
            />
          </section>

          <footer className="rounded-xl border border-term-border/70 bg-term-panel/40 px-4 py-4 text-xs text-term-mute">
            <p>Escrito por Apolinário · DevOps & Networking Engineer · Abril 2026</p>
            <p className="mt-2">
              <Link href="/#artigos" className="text-term-cyan hover:underline">
                ← Voltar para seção de artigos
              </Link>
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}
