import { Articles } from '@/components/sections/Articles';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Links } from '@/components/sections/Links';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';

const sectionItems = [
  { id: 'about', label: 'About', subtitle: 'Quem sou e foco atual', component: <About /> },
  { id: 'stack', label: 'Stack', subtitle: 'Tecnologias e ferramentas', component: <Stack /> },
  { id: 'artigos', label: 'Artigos', subtitle: 'Notas e conteúdos técnicos', component: <Articles /> },
  { id: 'projetos', label: 'Projetos', subtitle: 'Experiências práticas', component: <Projects /> },
  { id: 'links', label: 'Links', subtitle: 'Contato e redes', component: <Links /> }
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-6xl gap-5 overflow-x-hidden px-3 py-4 sm:gap-7 sm:px-5 sm:py-7 lg:px-8">
      <Hero />

      <section className="rounded-2xl border border-term-border/70 bg-slate-950/35 p-3 sm:p-6">
        <nav aria-label="Navegação rápida" className="flex flex-wrap justify-center gap-2 sm:justify-end">
          {sectionItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg border border-term-border/70 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-200 transition hover:border-term-cyan hover:text-term-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </section>

      <div className="grid gap-5 sm:gap-7">
        {sectionItems.map((item) => (
          <section key={item.id} id={item.id} className="scroll-mt-6 space-y-3 sm:scroll-mt-8">
            <header className="section-header">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-term-cyan">{item.label}</h2>
              <p className="w-full text-xs text-term-mute sm:w-auto">{item.subtitle}</p>
            </header>
            {item.component}
          </section>
        ))}
      </div>
    </main>
  );
}
