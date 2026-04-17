import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

type ArticleItem = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  available: boolean;
};

const articles: ArticleItem[] = [
  {
    slug: '/artigos/ambiente-instalacao-java-linux',
    title: 'Ambiente de Instalação Java no Linux',
    category: 'Java / Ambiente de Desenvolvimento',
    publishedAt: '10 abr 2026',
    readingTime: '12 min',
    excerpt: 'Guia completo para configurar Java 21, Maven, IntelliJ e PostgreSQL no Linux.',
    available: true
  },
  {
    slug: '#',
    title: 'Observabilidade para workloads em Kubernetes',
    category: 'SRE / Observabilidade',
    publishedAt: 'Em revisão',
    readingTime: '8 min',
    excerpt: 'Como estruturar logs, métricas e alertas para ambientes com foco em confiabilidade.',
    available: false
  },
  {
    slug: '#',
    title: 'Padrões de rede para landing zones multi-cloud',
    category: 'Cloud / Networking',
    publishedAt: 'Em revisão',
    readingTime: '10 min',
    excerpt: 'Boas práticas de segmentação, DNS e segurança para bases reusáveis em Terraform.',
    available: false
  }
];

export function Articles() {
  return (
    <TerminalWindow title="~/artigos">
      <Prompt path="~/artigos" command="ls -1 --sort=time" />

      <div className="grid gap-3 sm:gap-4">
        {articles.map((article) => (
          <article key={article.title} className="terminal-output space-y-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.12em] text-term-mute">
              <span>{article.category}</span>
              <span className="text-term-border">•</span>
              <span>{article.publishedAt}</span>
              <span className="text-term-border">•</span>
              <span>{article.readingTime} leitura</span>
            </div>

            <h3 className="text-base font-semibold text-term-green sm:text-lg">{article.title}</h3>
            <p className="text-sm text-term-mute">{article.excerpt}</p>

            <div>
              {article.available ? (
                <Link className="text-sm font-semibold text-term-cyan underline-offset-4 hover:underline" href={article.slug}>
                  Abrir artigo
                </Link>
              ) : (
                <p className="text-sm text-term-mute">Disponível em breve</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </TerminalWindow>
  );
}
