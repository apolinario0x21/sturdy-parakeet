import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-3xl place-items-center px-4 py-10">
      <section className="terminal-output w-full max-w-2xl space-y-5 border border-red-500/40 bg-red-500/10 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-red-300">Erro 404</p>
        <h1 className="text-2xl font-semibold text-term-green sm:text-3xl">Página não encontrada</h1>
        <p className="text-sm text-term-mute sm:text-base">
          O caminho acessado não existe ou foi movido. Volte para a página inicial para continuar navegando.
        </p>
        <Link
          href="/"
          className="inline-flex rounded border border-term-border px-3 py-2 text-sm font-semibold text-term-cyan underline-offset-4 transition hover:text-term-green hover:underline"
        >
          Ir para início
        </Link>
      </section>
    </main>
  );
}
