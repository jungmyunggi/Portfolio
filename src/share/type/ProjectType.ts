export interface ProjectItemProps {
  name: string;
  location: string;
  date: string;
  serviceLink: string;
  githubLink: string;
  overview: string;
  role: string;
  roleContent: string[];
  techStack: string[];
  features: feature_achievement_type[];
  achievement: feature_achievement_type[];
}
export interface ProjectWrapperProps {
  name: string;
  location: string;
  date: string;
  serviceLink: string;
  githubLink: string;
}
export interface ProjectInfoProps {
  overview: string;
  role: string;
  roleContent: string[];
  techStack: string[];
  features: feature_achievement_type[];
  achievement: feature_achievement_type[];
}
interface feature_achievement_type {
  title: string;
  content: string;
}
