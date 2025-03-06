import { ReactSVG } from 'react-svg';
interface SkillItemProps {
  skill: string;
  description: string;
  color?: string;
  stack: string;
}

export default function SkillItem({
  skill,
  description,
  color = '#000000',
  stack,
}: SkillItemProps) {
  if (skill === 'zustand') {
    return (
      <div className="skill-item">
        <img src="/assets/skills/zustand.jpg" alt="zustand" className="skill-icon" />
        <div className="skill-info">
          <span className="skill-stack">{stack}</span>
          <li className="skill-description">{description}</li>
        </div>
      </div>
    );
  }
  return (
    <div className="skill-item">
      <ReactSVG
        src={`/assets/skills/${skill}.svg`}
        className="skill-icon"
        beforeInjection={(svg) => {
          svg.setAttribute('fill', color);
        }}
      />
      <div className="skill-info">
        <span className="skill-stack">{stack}</span>
        <li className="skill-description">{description}</li>
      </div>
    </div>
  );
}
