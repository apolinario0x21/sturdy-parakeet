import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <TerminalWindow title="~/404">
        <Prompt path="~/404" command="cat erro.log" />

        <div className="terminal-output space-y-3">
          <p className="text-sm uppercase tracking-[0.12em] text-term-mute">404 - Página não encontrada</p>
          <h1 className="text-xl font-semibold text-term-green sm:text-2xl">Não localizamos a URL solicitada.</h1>
          <p className="text-sm text-term-mute sm:text-base">
            Verifique o endereço ou volte para a página principal para navegar pelos projetos e artigos.
          </p>
          <Link className="inline-block text-sm font-semibold text-term-cyan underline-offset-4 hover:underline" href="/">
            Voltar para home
          </Link>
        </div>
      </TerminalWindow>
    </main>
  );
}
