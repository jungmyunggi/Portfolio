import '@/features/Home/style/Home.scss';
import HomeDesktop from '@/features/Home/ui/HomeDesktop';
import HomeMobile from '@/features/Home/ui/HomeMobile';
import { useMediaStore } from '@/app/store';
export default function Home() {
  const isDesktop = useMediaStore((state) => state.isDesktop);
  return isDesktop ? <HomeDesktop /> : <HomeMobile />;
}
