import Header from '@/features/Header/Header';
import Nav from '@/features/Nav/Nav';
import About from '@/features/About/About';
import Skills from '@/features/Skills/Skills';
import Projects from '@/features/Projects/Projects';
export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="section">
        <Header />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
