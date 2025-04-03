import '@/features/Skills/style/Skills.scss';
import { useMediaStore } from '@/app/store';
import SkillsDesktop from '@/features/Skills/ui/SkillsDesktop';
import SkillsMobile from '@/features/Skills/ui/SkillsMobile';
export default function Skills() {
    const isDesktop = useMediaStore((state) => state.isDesktop);
    return isDesktop ? <SkillsDesktop /> : <SkillsMobile />;
}
