import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SliderType } from '@/share/type/NavType';
import SVGIcon from '@/share/ui/SVGIcon';
import { useDarkStore } from '@/features/DarkModeToggle/model/DarkStore';
import DarkModeToggle from '@/features/DarkModeToggle/ui/DarkModeToggle';
export default function NavMobile() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const isDark = useDarkStore((state) => state.isDark);
  const openHandler = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav>
      <div className="navigation-mobile">
        <SVGIcon
          src="/assets/logo.svg"
          height="15vh"
          width="20vw"
          shape={'square'}
          fill={isDark === 'Dark' ? '#ffffff' : '#000000'}
        />

        <div className="menubox">
          <DarkModeToggle />

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
