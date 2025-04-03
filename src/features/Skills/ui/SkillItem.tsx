import SVGIcon from '@/share/ui/SVGIcon';
import { SkillItemType } from '@/features/Skills/model/SkillType';
export default function SkillItem({ stack, handleEnter, handleLeave }: SkillItemType) {
    if (stack.stack === 'Zustand') {
        return (
            <span onMouseEnter={() => handleEnter?.(stack)} onMouseLeave={handleLeave}>
                <img src="/assets/skills/zustand.jpg" alt="zustand" className="zustand-item" />
            </span>
        );
    }
    return (
        <span onMouseEnter={() => handleEnter?.(stack)} onMouseLeave={handleLeave}>
            <SVGIcon
                height={`70px`}
                width={`70px`}
                fill={stack.color}
                shape={'square'}
                src={`/assets/skills/${stack.stack}.svg`}
            />
        </span>
    );
}
