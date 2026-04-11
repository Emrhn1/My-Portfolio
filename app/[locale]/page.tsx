// app/[locale]/page.tsx
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import SkillMatrix from '@/app/components/SkillMatrix';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillMatrix />
      <Projects />
      <Contact />
    </>
  );
}
