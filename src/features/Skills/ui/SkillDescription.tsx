import { SkillDescriptionType } from '@/features/Skills/model/SkillType';
import { useEffect } from 'react';
import SVGIcon from '@/share/ui/SVGIcon';
export default function SkillDescription({ stack }: SkillDescriptionType) {
    const stars = stack && '★'.repeat(stack.proficiency) + '☆'.repeat(5 - stack.proficiency);
    useEffect(() => {
        if (stack) {
            requestAnimationFrame(() => {
                const describe = document.querySelector('.describe-container');
                describe?.classList.add('show');
            });
        }
    }, [stack]);
    return (
        <>
            {stack && (
                <div className="describe-container">
                    <div className="current-stack">
                        {stack.stack === 'Zustand' ? (
                            <img
                                src="/assets/skills/zustand.jpg"
                                alt="zustand"
                                className="zustand-img"
                            />
                        ) : (
                            <SVGIcon
                                src={`/assets/skills/${stack.stack}.svg`}
                                fill={stack.color}
                                height="200px"
                                width="200px"
                                shape={'square'}
                            />
                        )}
                    </div>
                    <div className="current-describe">
                        <span className="stack">{stack.stack}</span>
                        <span className="star">{stars}</span>
                        <ul className="describes">
                            <li className="describe">{stack.description}</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
