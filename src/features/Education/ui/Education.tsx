import '@/features/Education/style/Education.scss';
import { useMediaStore } from '@/app/store';
import EducationDesktop from '@/features/Education/ui/EducationDesktop';
import EducationMobile from '@/features/Education/ui/EducationsMobile';

export default function Education() {
    const isDesktop = useMediaStore((state) => state.isDesktop);
    return isDesktop ? <EducationDesktop /> : <EducationMobile />;
}
