interface ProjectItemProps {
  name: string;
  description: string;
  status: string;
  dueDate: string;
  skills: string[];
  githubLink?: string;
  siteLink?: string;
  notionLink?: string;
}
export default function ProjectItem({
  name,
  description,
  status,
  dueDate,
  skills,
  githubLink,
  siteLink,
  notionLink,
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <img src="/public/assets/projects/denamu2.png" alt="" />
      <div className="project-info">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        <p className="project-status">{status}</p>
        <p className="project-due-date">{dueDate}</p>
        <ul className="project-skills">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              깃허브
            </a>
          )}
          {siteLink && (
            <a href={siteLink} target="_blank" rel="noreferrer">
              사이트
            </a>
          )}
          {notionLink && (
            <a href={notionLink} target="_blank" rel="noreferrer">
              노션
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
