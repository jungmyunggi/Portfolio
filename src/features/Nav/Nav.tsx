import '@/features/Nav/Nav.scss';
import { scrollElement } from '@/share/hooks/scrollEvent';
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-shortcut">
          <div className="nav-about" onClick={() => scrollElement('about')}>
            About.
          </div>
          <div className="nav-skill" onClick={() => scrollElement('skill')}>
            Skill.
          </div>
          <div className="nav-project" onClick={() => scrollElement('project')}>
            Project.
          </div>
          <div className="nav-education" onClick={() => scrollElement('education')}>
            Education.
          </div>
          <div className="nav-Award" onClick={() => scrollElement('award')}>
            Award.
          </div>
          <div className="nav-certificate" onClick={() => scrollElement('certificate')}>
            Certificate.
          </div>
        </div>

        <div className="nav-contact">
          <a href="https://tunaspace.tistory.com/" target="_blank">
            Tistory
          </a>
          <a href="https://github.com/jungmyunggi" target="_blank">
            Github
          </a>
          <a href="mailto:jung.myung.gi9@gmail.com">jung.myung.gi9@gmail.com</a>
          <a>Last Update: 2025/02</a>
        </div>
      </div>
    </nav>
  );
}
