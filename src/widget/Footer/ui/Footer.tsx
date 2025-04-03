import { useMediaStore } from '@/app/store';
import '@/widget/Footer/style/Footer.scss';
import FooterDesktop from '@/widget/Footer/ui/FooterDesktop';
import FooterMobile from '@/widget/Footer/ui/FooterMobile';

export default function Footer() {
  const isDesktop = useMediaStore((state) => state.isDesktop);
  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
}
