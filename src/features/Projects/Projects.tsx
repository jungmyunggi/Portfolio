import '@/features/Projects/Projects.scss';
import ProjectItem from '@/features/Projects/ProjectItem';
import { PROJECT_ITEMS } from '@/share/constant/constant';
export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">프로젝트</h2>
      <div className="projects-content">
        {PROJECT_ITEMS.map((item, _) => {
          return <ProjectItem {...item} />;
        })}
      </div>
    </section>
  );
}
