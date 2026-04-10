import Link from 'next/link';

const stack = [
  { icon: '☕', name: 'Java (JDK)', version: 'OpenJDK 21 LTS' },
  { icon: '📦', name: 'Maven', version: 'via apt' },
  { icon: '🧠', name: 'IntelliJ IDEA', version: 'Community / Ultimate' },
  { icon: '🐘', name: 'PostgreSQL', version: '17 (PGDG)' },
  { icon: '🖥️', name: 'pgAdmin 4', version: 'desktop + web' },
  { icon: '🔶', name: 'Postman', version: 'via Snap' },
  { icon: '🐙', name: 'Git', version: 'via apt' }
];

const sections = [
  { id: 'java', label: 'Java 21 (OpenJDK)' },
  { id: 'maven', label: 'Apache Maven' },
  { id: 'intellij', label: 'IntelliJ IDEA' },
  { id: 'postgresql', label: 'PostgreSQL 17' },
  { id: 'pgadmin', label: 'pgAdmin 4' },
  { id: 'postman', label: 'Postman' },
  { id: 'git', label: 'Git' },
  { id: 'resumo', label: 'Resumo dos Comandos' }
];

export default function AmbienteInstalacaoJavaLinuxPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-term-text sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-2xl border border-term-border/80 bg-slate-950/70 shadow-[0_0_45px_rgba(66,255,159,0.06)]">
        <header className="border-b border-term-border/80 bg-term-panel/70 px-6 py-10 text-center sm:px-10">
          <p className="mx-auto mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-amber-300">
            ☕ DevOps · Linux · Java · PostgreSQL
          </p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Ambiente de Desenvolvimento <span className="text-amber-300">Java</span> no Linux
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-term-mute sm:text-base">
            Guia completo de instalação e configuração do ambiente no Ubuntu 24.04 — do Java ao banco de
            dados.
          </p>
          <p className="mt-5 text-xs text-term-mute sm:text-sm">Ubuntu 24.04 LTS · Java 21 · Maven · PostgreSQL 17 · Abril 2026</p>
        </header>

        <div className="space-y-8 px-4 py-6 sm:px-8 sm:py-10">
          <section>
            <h2 className="section-header text-sm font-semibold uppercase tracking-[0.18em] text-term-cyan">Stack do Ambiente</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((item) => (
                <div key={item.name} className="rounded-xl border border-term-border/70 bg-term-panel/50 px-4 py-3">
                  <p className="text-lg">{item.icon}</p>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-term-mute">{item.version}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="terminal-output">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-term-mute">Índice</p>
            <ol className="grid gap-1 text-sm sm:grid-cols-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a className="text-term-text transition hover:text-term-cyan" href={`#${section.id}`}>
                    {String(index + 1).padStart(2, '0')} · {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <section id="java" className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">Java 21 — OpenJDK</h2>
            <p className="text-term-mute">
              O Java 21 é a versão LTS mais recente da plataforma Java SE e atende bem desenvolvimento pessoal,
              acadêmico e profissional.
            </p>
            <div className="terminal-output">
              <p className="text-sm text-cyan-200">JDK vs JRE: para desenvolvimento instale sempre o JDK completo.</p>
            </div>
            <div className="terminal-output space-y-2 text-sm">
              <p className="font-semibold text-term-cyan">Instalação</p>
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo apt update{`\n`}sudo apt install openjdk-21-jdk</pre>
            </div>
            <div className="terminal-output space-y-2 text-sm">
              <p className="font-semibold text-term-cyan">Validação</p>
              <pre className="overflow-x-auto whitespace-pre text-term-text">java --version{`\n`}javac --version</pre>
            </div>
          </section>

          <section id="maven" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">Apache Maven</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo apt install maven{`\n`}mvn -version</pre>
            </div>
          </section>

          <section id="intellij" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">IntelliJ IDEA</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo snap install intellij-idea-community --classic{`\n`}sudo snap install intellij-idea-ultimate --classic</pre>
            </div>
          </section>

          <section id="postgresql" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">PostgreSQL 17</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo apt install postgresql-17{`\n`}psql --version</pre>
            </div>
          </section>

          <section id="pgadmin" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">pgAdmin 4</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo apt install pgadmin4{`\n`}sudo /usr/pgadmin4/bin/setup-web.sh</pre>
            </div>
          </section>

          <section id="postman" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">Postman</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo snap install postman{`\n`}snap list | grep postman</pre>
            </div>
          </section>

          <section id="git" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">Git</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">sudo apt install git{`\n`}git config --global user.name "Seu Nome"{`\n`}git config --global user.email "seu@email.com"</pre>
            </div>
          </section>

          <section id="resumo" className="space-y-3">
            <h2 className="text-xl font-semibold text-amber-300">Resumo dos Comandos</h2>
            <div className="terminal-output text-sm">
              <pre className="overflow-x-auto whitespace-pre text-term-text">Java: sudo apt install openjdk-21-jdk{`\n`}Maven: sudo apt install maven{`\n`}IntelliJ: sudo snap install intellij-idea-community --classic{`\n`}PostgreSQL: sudo apt install postgresql-17{`\n`}pgAdmin: sudo apt install pgadmin4{`\n`}Postman: sudo snap install postman{`\n`}Git: sudo apt install git</pre>
            </div>
          </section>

          <footer className="rounded-xl border border-term-border/70 bg-term-panel/40 px-4 py-4 text-xs text-term-mute">
            <p>Escrito por Apolinário · DevOps & Networking Engineer · Abril 2026</p>
            <p className="mt-2">
              <Link href="/#artigos" className="text-term-cyan hover:underline">
                ← Voltar para a seção de artigos
              </Link>
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}
