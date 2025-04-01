import Introdution from '@/features/Introdution/ui/Introdution';
import Horizon from '@/share/ui/Horizon';
import Skills from '@/features/Skills/ui/Skills';

export default function IntroPage() {
    return (
        <>
            <Introdution />
            <Horizon interval={20} title="SKILLS" />
            <Skills />
        </>
    );
}
