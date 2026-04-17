import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

type ContactLink = {
  label: string;
  href: string;
  display: string;
};

const links: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/apolinario',
    display: 'github.com/apolinario'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcelo-apolinario/',
    display: 'linkedin.com/in/marcelo-apolinario'
  },
  {
    label: 'Email',
    href: 'mailto:marcelo.apolinario.dev@gmail.com',
    display: 'marcelo.apolinario.dev@gmail.com'
  },
  {
    label: 'Blog / Artigos',
    href: '#artigos',
    display: 'Ver seção de artigos'
  }
];

export function Links() {
  return (
    <TerminalWindow title="~/contato">
      <Prompt command="cat contato.conf" />

      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <article key={item.label} className="terminal-output space-y-1.5">
            <p className="text-sm text-term-mute">{item.label}</p>
            <Link
              className="break-all text-sm font-semibold text-term-cyan underline-offset-4 transition hover:text-term-green hover:underline"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            >
              {item.display}
            </Link>
          </article>
        ))}
      </div>

      <p className="break-words rounded-md border border-green-500/40 bg-green-500/15 px-3 py-2 text-sm text-green-100 sm:text-base">
        Aberto para oportunidades em DevOps / Platform Engineering, automação e arquitetura cloud.
      </p>
    </TerminalWindow>
  );
}
