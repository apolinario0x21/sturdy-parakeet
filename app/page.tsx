import { Articles } from '@/components/sections/Articles';
import { Hero } from '@/components/sections/Hero';
import { Links } from '@/components/sections/Links';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-8">
      <Hero />
      <Stack />
      <Articles />
      <Projects />
      <Links />
    </main>
  );
}
