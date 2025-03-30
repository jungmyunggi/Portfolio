import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import '@/features/Nav/Nav.scss';

export default function NavDesktop() {
  return (
    <nav className="navigation-desktop">
      <ReactSVG
        src="/assets/logo.svg"
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width:150px; height:150px');
        }}
      />
      <ul className="items">
        <li className="item">
          <Link to={'/'}>홈</Link>
        </li>
        <li className="item">
          <Link to={'/introdution'}>자기소개</Link>
        </li>
        <li className="item">
          <Link to={'/project'}>프로젝트</Link>
        </li>
        <li className="item">
          <Link to={'/award&certification'}>자격증 및 수상</Link>
        </li>
        <li className="item">
          <Link to={'/education'}>교육</Link>
        </li>
      </ul>
    </nav>
  );
}
