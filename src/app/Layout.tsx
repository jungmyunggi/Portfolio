import { Outlet } from 'react-router-dom';
import Nav from '@/widget/Nav/ui/Nav';
import Footer from '@/widget/Footer/ui/Footer';
export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
