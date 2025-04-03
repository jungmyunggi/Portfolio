import { ProjectItemType } from '../model/pojectItemType';

type ProjectItemProps = {
    projectItem: ProjectItemType;
};
export default function ProjectItem({ projectItem }: ProjectItemProps) {
    return (
        <div className="project-item-container">
            <img src={`/assets/projects/${projectItem.src}`} alt={`${projectItem.title}사진`} />
            <div className="text-link-wapper">
                <div className="text-container">
                    <div>
                        <span className="title">{projectItem.title}</span>
                        <span className="text">{projectItem.subtitle}</span>
                        <span className="text">{projectItem.period}</span>
                    </div>
                    <div>
                        <span className="text">{projectItem.stack}</span>
                    </div>
                    <div>
                        <span className="text">{projectItem.teamComposition}</span>
                        <span className="text">{projectItem.myRole}</span>
                    </div>
                </div>
                <div className="link-container">
                    {projectItem.serviceLink && (
                        <a href={projectItem.serviceLink} target="_blank">
                            서비스 →
                        </a>
                    )}
                    {projectItem.gitLink && (
                        <a href={projectItem.gitLink} target="_blank">
                            깃허브 →
                        </a>
                    )}
                    {projectItem.notionLink && (
                        <a href={projectItem.notionLink} target="_blank">
                            노션 →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
