import SVGIcon from '@/share/ui/SVGIcon';
import { SkillItemType } from '@/features/Skills/model/SkillType';
export default function SkillItem({ stack, handleEnter, handleLeave }: SkillItemType) {
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
