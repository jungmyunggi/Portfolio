import { Outlet } from 'react-router-dom';
import Nav from '@/features/Nav/Nav';
import Footer from '@/features/Footer/Footer';
export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
