export function Hero() {
  const sectionLinks = [
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#stack', label: 'Stack', icon: '⚙️' },
    { href: '#artigos', label: 'Artigos', icon: '📝' },
    { href: '#projetos', label: 'Projetos', icon: '💼' },
    { href: '#links', label: 'Links', icon: '🔗' }
  ];

  return (
    <header className="hero-panel flex min-h-[78vh] flex-col items-center justify-center rounded-2xl border border-term-border/40 px-6 py-16 text-center sm:px-10">
      <h1 className="text-4xl font-bold text-slate-100 sm:text-6xl">Marcelo Apolinário</h1>
      <p className="mt-6 text-xl text-slate-200 sm:text-4xl">Back-End Developer &amp; CTF Player</p>
      <p className="mt-8 max-w-3xl text-base text-slate-400 sm:text-3xl">
        Back-End Developer com paixão por cibersegurança e foco em soluções escaláveis.
      </p>

      <nav className="mt-10 flex flex-wrap items-center justify-center gap-3" aria-label="Seções da página">
        {sectionLinks.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="group inline-flex items-center gap-2 rounded-full border border-term-border/70 bg-slate-950/40 px-4 py-2 text-sm text-slate-300 transition hover:border-term-cyan hover:text-term-cyan"
          >
            <span aria-hidden>{section.icon}</span>
            <span className="font-semibold tracking-wide group-hover:underline">{section.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
