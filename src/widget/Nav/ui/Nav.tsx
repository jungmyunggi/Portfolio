import { useMediaStore } from '@/app/store';
import '@/widget/Nav/style/Nav.scss';

import NavDesktop from '@/widget/Nav/ui/NavDesktop';
import NavMobile from '@/widget/Nav/ui/NavMobile';

export default function Nav() {
  const isDesktop = useMediaStore((state) => state.isDesktop);
  return isDesktop ? <NavDesktop /> : <NavMobile />;
}
