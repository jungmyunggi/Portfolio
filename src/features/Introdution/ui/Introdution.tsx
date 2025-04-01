import '@/features/Introdution/style/Introdution.scss';
import { useMediaStore } from '@/app/store';
import IntrodutionDesktop from '@/features/Introdution/ui/IntrodutionDesktop';
import IntrodutionMobile from '@/features/Introdution/ui/IntrodutionMobile';
export default function Introdution() {
  const isDesktop = useMediaStore((state) => state.isDesktop);
  return isDesktop ? <IntrodutionDesktop /> : <IntrodutionMobile />;
}
