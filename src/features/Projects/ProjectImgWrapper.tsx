import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Clock } from 'lucide-react';
import { ProjectWrapperProps } from '@/share/type/ProjectType';
export default function ProjectImgWrapper(wrapperProps: ProjectWrapperProps) {
  return (
    <div className="project-img-wrapper">
      <img
        src={`/assets/projects/${wrapperProps.name.toLowerCase()}.png`}
        alt={wrapperProps.name}
        className="project-img"
      />
      <div className="project-img-overlay">
        <div className="project-img-overlay-header">
          <span className="project-title">{wrapperProps.name}</span>
          <span>-</span>
          <span className="project-location">{wrapperProps.location}</span>
        </div>
        <span className="project-date">
          <Clock />
          {wrapperProps.date}
        </span>
        <div className="project-buttons">
          <a className="project-button" href={wrapperProps.serviceLink} target="_blank">
            <ExternalLink /> 상세보기
          </a>
          <a className="project-button" href={wrapperProps.githubLink} target="_blank">
            <Github /> 깃허브
          </a>
        </div>
      </div>
    </div>
  );
}
