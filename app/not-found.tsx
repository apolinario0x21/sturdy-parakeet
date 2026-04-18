import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-4 py-8">
      <section className="w-full rounded-lg border border-term-border bg-term-panel p-6 text-center shadow-lg shadow-black/30 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-term-mute">Erro 404</p>
        <h1 className="mt-2 text-2xl font-semibold text-term-green sm:text-3xl">Página não encontrada</h1>
        <p className="mt-3 text-sm text-term-mute sm:text-base">
          O caminho acessado não existe ou ainda não foi publicado.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded border border-term-border px-4 py-2 text-sm font-semibold text-term-cyan transition hover:border-term-cyan hover:text-term-green"
        >
          Voltar para a home
        </Link>
      </section>
    </main>
  );
}
