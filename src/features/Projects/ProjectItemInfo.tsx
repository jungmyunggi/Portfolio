import { Flame, User, Blocks, Wrench, Bell, CircleCheckBig } from 'lucide-react';

import { ProjectInfoProps } from '@/share/type/ProjectType';
export default function ProjectItemInfo(InfoProps: ProjectInfoProps) {
  return (
    <div className="project-item-info">
      <div className="project-item-overview container">
        <p className="project-item-overview-title title">
          <Flame color="#3b82f6" size={24} /> 프로젝트 개요
        </p>
        <p className="project-item-overview-content">{InfoProps.overview}</p>
      </div>
      <div className="project-item-role container">
        <p className="project-item-role-title title">
          <User color="#3b82f6" size={24} /> 내 역할 및 담당업무
        </p>
        <div className="project-item-role-content">
          <p>{InfoProps.role}</p>
          <ul>
            {InfoProps.roleContent.map((content, _) => {
              return <li>{content}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="project-item-tech container">
        <p className="project-item-tech-title title">
          <Blocks color="#3b82f6" size={24} /> 기술 스택
        </p>
        <div className="project-item-tech-content">
          <ul>
            {InfoProps.techStack.map((tech, _) => {
              return <li>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="project-item-function container">
        <p className="project-item-function-title title">
          <Wrench color="#3b82f6" size={24} /> 프로젝트 주요 기능
        </p>
        <div className="project-item-function-content">
          <ul>
            {InfoProps.features.map((feature, _) => {
              return (
                <li>
                  <span>
                    <CircleCheckBig color="#10b981" />
                  </span>
                  <div>
                    <b>{feature.title}</b>: {feature.content}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="project-item-result container">
        <p className="project-item-result-title title">
          <Bell color="#3b82f6" size={24} /> 성과 및 결과
        </p>
        <div className="project-item-result-content">
          <ul>
            {InfoProps.achievement.map((achievement, _) => {
              return (
                <li>
                  <p>{achievement.title}</p>
                  <p>{achievement.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
