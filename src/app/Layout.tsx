import { Outlet } from 'react-router-dom';
import ScrollPrograssBar from '@/share/ui/ScrollProgressBar';
import Nav from '@/widget/Nav/ui/Nav';
import Footer from '@/widget/Footer/ui/Footer';
export default function Layout() {
    return (
        <div>
            <ScrollPrograssBar />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}
