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
  { id: 'links', label: 'Links', subtitle: 'Contatos e presença online', component: <Links /> }
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 gap-4 px-2.5 py-3 sm:gap-6 sm:px-4 sm:py-6 lg:px-8">
      <Hero />

      <div className="grid grid-cols-1 gap-5 sm:gap-7">
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
