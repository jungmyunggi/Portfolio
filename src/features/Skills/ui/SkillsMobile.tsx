import SkillItem from '@/features/Skills/ui/SkillItem';
import { FRONT_END, BACK_END, TOOLS } from '@/share/constant/skills';

export default function SkillsMobile() {
    return (
        <section className="skills mobile">
            <div className="stacks">
                <span>FrontEnd</span>
                <div>
                    {FRONT_END.map((skill, index) => (
                        <SkillItem stack={skill} key={index} />
                    ))}
                </div>
            </div>
            <div className="stacks">
                <span>BackEnd</span>
                <div>
                    {BACK_END.map((skill, index) => (
                        <SkillItem stack={skill} key={index} />
                    ))}
                </div>
            </div>
            <div className="stacks">
                <span>Tools</span>
                <div>
                    {TOOLS.map((skill, index) => (
                        <SkillItem stack={skill} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
