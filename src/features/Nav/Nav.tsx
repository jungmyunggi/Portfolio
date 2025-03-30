import { useMediaStore } from '@/app/store';
import NavDesktop from '@/features/Nav/NavDesktop';
import NavMobile from '@/features/Nav/NavMobile';
export default function Nav() {
  const isDesktop = useMediaStore((state) => state.isDesktop);
  return isDesktop ? <NavDesktop /> : <NavMobile />;
}
