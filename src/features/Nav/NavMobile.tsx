import '@/features/Nav/Nav.scss';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import { SliderType } from '@/share/type/NavType';
export default function NavMobile() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const openHandler = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav>
      <div className="navigation-mobile">
        <ReactSVG
          src="/assets/logo.svg"
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'width:20vw; height:15vh');
          }}
        />
        <div className="menubox">
          {isOpen ? (
            <X size={35} className="menu-button" onClick={openHandler} />
          ) : (
            <Menu size={35} className="menu-button" onClick={openHandler} />
          )}
        </div>
      </div>
      <NavSlider handler={openHandler} isOpen={isOpen} />
    </nav>
  );
}

function NavSlider({ handler, isOpen }: SliderType) {
  return (
    <ul className={`slider${isOpen ? ' active' : ''}`}>
      <li className="item">
        <Link to={'/'} onClick={handler}>
          홈
        </Link>
      </li>
      <li className="item">
        <Link to={'/introdution'} onClick={handler}>
          자기소개
        </Link>
      </li>
      <li className="item">
        <Link to={'/project'} onClick={handler}>
          프로젝트
        </Link>
      </li>
      <li className="item">
        <Link to={'/award&certification'} onClick={handler}>
          자격증 및 수상
        </Link>
      </li>
      <li className="item">
        <Link to={'/education'} onClick={handler}>
          교육
        </Link>
      </li>
    </ul>
  );
}
