import '@/features/Projects/Projects.scss';
import ProjectItem from '@/features/Projects/ProjectItem';
export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">프로젝트</h2>
      <div className="projects-content">
        <ProjectItem
          name="Denamu"
          description="데남우는 데브캠프 2기 수료생들이 함께 만든 프로젝트입니다. 데브캠프 2기 수료생들의 포트폴리오를 소개하고, 채용 정보를 제공합니다."
          status="진행 중"
          dueDate="2022-12-31 ~ 2023-01-31"
          skills={['React', 'TypeScript']}
          githubLink="www.naver.com"
          notionLink="www.apple.com"
          siteLink="www.google.com"
        />
        <ProjectItem
          name="Denamu"
          description="데남우는 데브캠프 2기 수료생들이 함께 만든 프로젝트입니다. 데브캠프 2기 수료생들의 포트폴리오를 소개하고, 채용 정보를 제공합니다."
          status="진행 중"
          dueDate="2022-12-31 ~ 2023-01-31"
          skills={['React', 'TypeScript']}
          githubLink="www.naver.com"
          notionLink="www.apple.com"
          siteLink="www.google.com"
        />
      </div>
    </section>
  );
}
