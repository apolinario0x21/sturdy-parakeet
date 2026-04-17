import { Articles } from '@/components/sections/Articles';
import { Hero } from '@/components/sections/Hero';
import { Links } from '@/components/sections/Links';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';

const sectionItems = [
  { id: 'projetos', label: 'Projetos', subtitle: 'Experiências práticas', component: <Projects /> },
  { id: 'artigos', label: 'Artigos', subtitle: 'Notas e conteúdos técnicos', component: <Articles /> },
  { id: 'stack', label: 'Stack', subtitle: 'Tecnologias e ferramentas', component: <Stack /> },
  { id: 'contato', label: 'Contato', subtitle: 'Canais para conversar e acompanhar meu trabalho', component: <Links /> }
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 gap-5 px-2.5 py-3 sm:gap-8 sm:px-4 sm:py-6 lg:px-8">
      <Hero />

      <div className="grid grid-cols-1 gap-7 sm:gap-10">
        {sectionItems.map((item) => (
          <section key={item.id} id={item.id} className="grid grid-cols-1 gap-3 scroll-mt-6 sm:scroll-mt-8">
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
