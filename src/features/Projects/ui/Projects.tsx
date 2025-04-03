import '@/features/Projects/style/Projects.scss';
import { useMediaStore } from '@/app/store';
import ProjectDesktop from '@/features/Projects/ui/ProjectDesktop';
import ProjectMobile from '@/features/Projects/ui/ProjectMobile';
export default function Projects() {
    const isDesktop = useMediaStore((state) => state.isDesktop);
    return isDesktop ? <ProjectDesktop /> : <ProjectMobile />;
}
