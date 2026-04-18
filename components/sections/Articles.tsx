import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';
import { articles } from '@/data/articles';

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
              {article.available && article.slug ? (
                <Link className="text-sm font-semibold text-term-cyan underline-offset-4 hover:underline" href={article.slug}>
                  Abrir artigo
                </Link>
              ) : (
                <p aria-disabled className="text-sm text-term-mute">
                  Disponível em breve
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </TerminalWindow>
  );
}
