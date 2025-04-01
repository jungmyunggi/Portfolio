import { SkillSectionType, SkillType } from '@/features/Skills/model/SkillType';
import SkillItem from '@/features/Skills/ui/SkillItem';
import SkillDescription from '@/features/Skills/ui/SkillDescription';
import { useState } from 'react';
export default function SkillSection({ title, skills }: SkillSectionType) {
    const [hoveredSkill, setHoveredSkill] = useState<SkillType | null>(null);

    const handleEnter = (skill: SkillType) => {
        setHoveredSkill(skill);
    };

    const handleLeave = () => {
        setHoveredSkill(null);
    };

    return (
        <div className="skill-container">
            <div className="stacks">
                <span>{title}</span>
                <div>
                    {skills.map((skill, index) => (
                        <SkillItem
                            stack={skill}
                            key={index}
                            handleEnter={handleEnter}
                            handleLeave={handleLeave}
                        />
                    ))}
                </div>
            </div>
            <SkillDescription stack={hoveredSkill} />
        </div>
    );
}
