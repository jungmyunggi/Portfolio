import '@/features/Awards/style/Awards.scss';
import { useMediaStore } from '@/app/store';
import AwardDesktop from '@/features/Awards/ui/AwardsDesktop';
import AwardMobile from '@/features/Awards/ui/AwardsMobile';
export default function Awards() {
    const isDesktop = useMediaStore((state) => state.isDesktop);
    return isDesktop ? <AwardDesktop /> : <AwardMobile />;
}
