import Header from '@/features/Header/Header';
import Nav from '@/features/Nav/Nav';
import About from '@/features/About/About';
export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="section">
        <Header />
        <About />
      </div>
    </>
  );
}
