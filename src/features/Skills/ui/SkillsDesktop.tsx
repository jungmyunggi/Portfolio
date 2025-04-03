import SkillSection from '@/features/Skills/ui/SkillSection';
import { FRONT_END, BACK_END, TOOLS, MOBILE } from '@/share/constant/skills';

export default function SkillsDesktop() {
    return (
        <section className="skills">
            <SkillSection skills={FRONT_END} title="FrontEnd" />
            <SkillSection skills={BACK_END} title="BackEnd" />
            <SkillSection skills={TOOLS} title="Tools" />
            <SkillSection skills={MOBILE} title="MOBILE" />
        </section>
    );
}
