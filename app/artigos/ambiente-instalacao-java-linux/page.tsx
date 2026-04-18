import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout } from '@/components/article/Callout';
import { CodeBlock } from '@/components/article/CodeBlock';
import { StepList, type Step } from '@/components/article/StepList';

type TocItem = {
  id: string;
  title: string;
};

type StackItem = {
  label: string;
  title: string;
  subtitle: string;
};

const stackItems: StackItem[] = [
  { label: 'JDK', title: 'Java (JDK)', subtitle: 'OpenJDK 21 LTS' },
  { label: 'MVN', title: 'Maven', subtitle: 'via apt' },
  { label: 'IDE', title: 'IntelliJ IDEA', subtitle: 'Community / Ultimate' },
  { label: 'PG', title: 'PostgreSQL', subtitle: '17 (PGDG)' },
  { label: 'UI', title: 'pgAdmin 4', subtitle: 'desktop + web' },
  { label: 'API', title: 'Postman', subtitle: 'via Snap' },
  { label: 'VCS', title: 'Git', subtitle: 'via apt' }
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

export const metadata: Metadata = {
  title: 'Ambiente de Instalação Java no Linux | Marcelo Apolinário',
  description:
    'Guia para configurar Java 21, Maven, IntelliJ, PostgreSQL 17, pgAdmin, Postman e Git no Ubuntu 24.04.'
};

export default function AmbienteInstalacaoJavaLinuxPage() {
  const publishedAt = '2026-04-10';
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Ambiente de Desenvolvimento Java no Linux',
    description:
      'Guia detalhado de instalação e configuração no Ubuntu 24.04, cobrindo da base Java até ferramentas de produtividade para desenvolvimento backend.',
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: 'Marcelo Apolinário'
    },
    inLanguage: 'pt-BR'
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-term-text sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="overflow-hidden rounded-2xl border border-term-border/80 bg-slate-950/70 shadow-[0_0_40px_rgba(66,255,159,0.07)]">
        <header className="border-b border-term-border/80 bg-term-panel/65 px-4 py-10 text-center sm:px-8">
          <p className="mx-auto mb-4 inline-block rounded-full border border-term-amber/30 bg-term-amber/10 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-term-amber">
            Java · Linux · DevOps · PostgreSQL
          </p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Ambiente de Desenvolvimento <span className="text-term-amber">Java</span> no Linux
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
                  <p className="inline-flex rounded border border-term-border px-2 py-0.5 text-xs text-term-amber">{item.label}</p>
                  <p className="mt-2 font-semibold">{item.title}</p>
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
            <h2 className="text-xl font-semibold text-term-amber">Java 21 — OpenJDK</h2>
            <p className="text-sm text-term-mute sm:text-base">
              O Java 21 é a versão LTS recomendada para estabilidade em projetos de médio e longo prazo. Para
              desenvolvimento, utilize sempre o pacote JDK completo (com compilador e ferramentas de build).
            </p>
            <Callout tone="info">
              <strong>JDK x JRE:</strong> o JDK inclui compilador, depurador e ferramentas de desenvolvimento. O JRE é
              focado em execução. Para programar, escolha JDK.
            </Callout>
            <StepList steps={javaSteps} />
          </section>

          <section id="maven" className="space-y-4">
            <h2 className="text-xl font-semibold text-term-amber">Apache Maven</h2>
            <p className="text-sm text-term-mute sm:text-base">
              O Maven gerencia dependências e ciclo de build do projeto Java. No Ubuntu, a forma mais simples é via apt.
            </p>
            <CodeBlock code={'sudo apt update\nsudo apt install maven\n\nmvn -version'} />
            <Callout tone="info">Com o JAVA_HOME configurado, o Maven detecta automaticamente o Java correto.</Callout>
          </section>

          <section id="intellij" className="space-y-4">
            <h2 className="text-xl font-semibold text-term-amber">IntelliJ IDEA</h2>
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
            <h2 className="text-xl font-semibold text-term-amber">PostgreSQL 17</h2>
            <p className="text-sm text-term-mute sm:text-base">
              Instalação via PGDG garante versão mais atualizada e manutenção direta da equipe PostgreSQL.
            </p>
            <StepList steps={postgresSteps} />
            <Callout tone="ok">PostgreSQL instalado e pronto para uso local com autenticação configurada.</Callout>
          </section>

          <section id="pgadmin" className="space-y-4">
            <h2 className="text-xl font-semibold text-term-amber">pgAdmin 4</h2>
            <CodeBlock
              code={
                'curl -fsS https://www.pgadmin.org/static/packages_pgadmin_org.pub | \\\n  sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg\n\nsudo sh -c \'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] \\\n  https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/noble pgadmin4 main" \\\n  > /etc/apt/sources.list.d/pgadmin4.list\'\n\nsudo apt update\nsudo apt install pgadmin4\nsudo /usr/pgadmin4/bin/setup-web.sh'
              }
            />
          </section>

          <section id="postman" className="space-y-4">
            <h2 className="text-xl font-semibold text-term-amber">Postman</h2>
            <CodeBlock code={'sudo snap install postman\nsnap list | grep postman'} />
          </section>

          <section id="git" className="space-y-4">
            <h2 className="text-xl font-semibold text-term-amber">Git</h2>
            <CodeBlock
              code={
                'sudo apt update\nsudo apt install git\n\ngit --version\ngit config --global user.name "Seu Nome"\ngit config --global user.email "seu@email.com"\ngit config --list'
              }
            />
          </section>

          <section id="resumo" className="space-y-4">
            <h2 className="text-xl font-semibold text-term-amber">Resumo dos comandos</h2>
            <CodeBlock
              code={
                'Java: sudo apt install openjdk-21-jdk\nMaven: sudo apt install maven\nIntelliJ: sudo snap install intellij-idea-community --classic\nPostgreSQL: sudo apt install postgresql-17\npgAdmin: sudo apt install pgadmin4\nPostman: sudo snap install postman\nGit: sudo apt install git'
              }
            />
          </section>

          <footer className="rounded-xl border border-term-border/70 bg-term-panel/40 px-4 py-4 text-xs text-term-mute">
            <p>Escrito por Apolinário · DevOps & Networking Engineer · Abril 2026 · Atualizado em 10/04/2026</p>
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
