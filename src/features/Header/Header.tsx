import '@/features/Header/Header.scss';
import { ChevronDown } from 'lucide-react';
import { scrollElement } from '@/share/hooks/scrollEvent';
export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">정명기</h1>
        <h2 className="header-subtitle">프론트엔드 개발자</h2>
        <button className="header-button-project" onClick={() => scrollElement('project')}>
          프로젝트 보기
        </button>
        <button className="header-button-down" onClick={() => scrollElement('about')}>
          <ChevronDown size={50} color="white" />
        </button>
      </div>
    </header>
  );
}
