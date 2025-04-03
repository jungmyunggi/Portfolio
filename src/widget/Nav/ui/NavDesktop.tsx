import { Link } from 'react-router-dom';
import SVGIcon from '@/share/ui/SVGIcon';
import DarkModeToggle from '@/features/DarkModeToggle/ui/DarkModeToggle';
import { useDarkStore } from '@/features/DarkModeToggle/model/DarkStore';
export default function NavDesktop() {
    const isDark = useDarkStore((state) => state.isDark);
    return (
        <nav className="navigation-desktop">
            <span>
                <Link to={'/'} className="logo-link" />
                <SVGIcon
                    src="/assets/logo.svg"
                    height="150px"
                    width="150px"
                    shape={'square'}
                    fill={isDark === 'Dark' ? '#ffffff' : '#000000'}
                />
            </span>
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
                <DarkModeToggle />
            </ul>
        </nav>
    );
}
