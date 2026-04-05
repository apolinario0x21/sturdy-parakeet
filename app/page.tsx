import { Articles } from '@/components/sections/Articles';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Links } from '@/components/sections/Links';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 px-4 py-6">
      <Hero />
      <section id="about" className="scroll-mt-8">
        <About />
      </section>
      <section id="stack" className="scroll-mt-8">
        <Stack />
      </section>
      <section id="artigos" className="scroll-mt-8">
        <Articles />
      </section>
      <section id="projetos" className="scroll-mt-8">
        <Projects />
      </section>
      <section id="links" className="scroll-mt-8">
        <Links />
      </section>
    </main>
  );
}
