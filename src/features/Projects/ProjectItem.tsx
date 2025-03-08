import ProjectImgWrapper from '@/features/Projects/ProjectImgWrapper';
import ProjectItemInfo from '@/features/Projects/ProjectItemInfo';
import { ProjectItemProps } from '@/share/type/ProjectType';

export default function ProjectItem(itemProps: ProjectItemProps) {
  return (
    <div className="project-item">
      <ProjectImgWrapper {...itemProps} />
      <ProjectItemInfo {...itemProps} />
    </div>
  );
}
