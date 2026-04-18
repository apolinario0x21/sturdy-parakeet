import Link from 'next/link';

import { Prompt } from '@/components/Prompt';
import { TerminalWindow } from '@/components/TerminalWindow';

export default function NotFoundPage() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-3xl place-items-center px-4 py-10">
      <TerminalWindow title="~/erro-404">
        <Prompt path="~/erro-404" command="cat mensagem.txt" />

        <div className="terminal-output space-y-3">
          <h1 className="text-lg font-semibold text-term-green sm:text-xl">404 — Página não encontrada</h1>
          <p className="text-sm text-term-mute sm:text-base">
            A rota solicitada não existe neste ambiente. Confira o endereço ou volte para a página inicial.
          </p>
          <Link className="text-sm font-semibold text-term-cyan underline-offset-4 hover:underline" href="/">
            Voltar para a home
          </Link>
        </div>
      </TerminalWindow>
    </main>
  );
}
