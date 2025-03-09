import '@/features/Skills/Skills.scss';
import { useState, useRef } from 'react';
import SkillItem from '@/features/Skills/SkillItem';

export default function Skills() {
  const [curser, setCurser] = useState('Language');
  const skillListRef = useRef<HTMLDivElement>(null);
  const handleCurser = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.currentTarget;
    setCurser(button.textContent!);
    const index = Number(button.dataset.index);
    skillListRef.current!.style.setProperty('--active-top', `${index * 25}%`);
  };
  return (
    <section className="skills" id="skill">
      <h2 className="skills-title">기술 스택</h2>
      <div className="skills-content">
        <div>
          <div className="skills-list" ref={skillListRef}>
            <button onClick={handleCurser} data-index="0">
              Language
            </button>
            <button onClick={handleCurser} data-index="1">
              FrontEnd
            </button>
            <button onClick={handleCurser} data-index="2">
              BackEnd
            </button>
            <button onClick={handleCurser} data-index="3">
              Etc
            </button>
          </div>
        </div>
        {curser === 'Language' && <SkillLanguage />}
        {curser === 'FrontEnd' && <SkillFront />}
        {curser === 'BackEnd' && <SkillBack />}
        {curser === 'Etc' && <SkillEtc />}
      </div>
    </section>
  );
}

function SkillLanguage() {
  return (
    <div className="skills-items">
      <SkillItem
        skill="html5"
        description="기본적인 HTML 태그를 활용하여 웹페이지 구조를 작성할 수 있습니다."
        color="#E34F26"
        stack="HTML5"
      />
      <SkillItem
        skill="css3"
        description="순수 CSS로 반응형 레이아웃과 스타일링을 구현할 수 있습니다."
        color="#1572B6"
        stack="CSS3"
      />
      <SkillItem
        skill="javascript"
        description="ES6+ 문법을 활용하여 동적인 기능과 이벤트 처리를 할 수 있습니다."
        color="#F7DF1E"
        stack="JavaScript"
      />
      <SkillItem
        skill="typescript"
        description="정적 타입을 통해 안정적이고 명확한 코드를 작성할 수 있습니다."
        color="#3178C6"
        stack="TypeScript"
      />
    </div>
  );
}
function SkillFront() {
  return (
    <div className="skills-items">
      <SkillItem
        skill="react"
        description="React를 활용하여 컴포넌트 기반의 웹 애플리케이션을 개발할 수 있습니다."
        color="#61DAFB"
        stack="React"
      />
      <SkillItem
        skill="reactrouter"
        description="React Router를 활용하여 페이지 라우팅을 구현할 수 있습니다."
        color="#CA4245"
        stack="React Router"
      />
      <SkillItem
        skill="reactquery"
        description="서버 상태를 효율적으로 관리하며 데이터 요청과 캐싱을 자동화할 수 있습니다."
        color="#FF4154"
        stack="React Query"
      />
      <SkillItem
        skill="sass"
        description="변수, 중첩 문법 등을 활용해 유지보수가 쉬운 스타일을 작성할 수 있습니다."
        color="#CC6699"
        stack="Sass"
      />
      <SkillItem
        skill="tailwindcss"
        description="유틸리티 클래스를 이용해 빠르게 UI를 구성하고 커스터마이징할 수 있습니다."
        color="#06B6D4"
        stack="
        Tailwind CSS"
      />
      <SkillItem
        skill="shadcnui"
        description="시각적으로 깔끔한 UI컴포넌트를 간편하게 적용할 수 있습니다."
        stack="Shadcn/ui"
      />
      <SkillItem
        skill="zustand"
        description="간단하고 직관적인 API로 글로벌 상태 관리를 편리하게 구현할 수 있습니다."
        stack="Zustand"
      />
      <SkillItem
        skill="testinglibrary"
        description="프로젝트에서 React-Testing-Library 테스트한 경험이 있습니다."
        color="#E33332"
        stack="React Testing Library"
      />
      <SkillItem
        skill="vitest"
        description="단위 테스트와 통합테스트를 진행할 수있습니다."
        color="#6E9F18"
        stack="Vitest"
      />
      <SkillItem
        skill="socketdotio"
        description="클라이언트에서 실시간 채팅을 구현한 경험이 있습니다."
        color="#010101"
        stack="Socket.io"
      />
    </div>
  );
}
function SkillBack() {
  return (
    <div className="skills-items">
      <SkillItem
        skill="express"
        description="mvc 패턴을 이용하여 간단한 서버를 구현할 수 있습니다."
        stack="Express"
      />
      <SkillItem
        skill="mysql"
        description="
      mySQL을 이용하여 간단한 데이터베이스를 구축하고 관리할 수 있습니다."
        color="#4479A1"
        stack="MySQL"
      />
    </div>
  );
}
function SkillEtc() {
  return (
    <div className="skills-items">
      <SkillItem
        skill="git"
        description="프로젝트에서 버전관리를 위해 사용해본 경험이 있습니다."
        color="#F05032"
        stack="Git"
      />
      <SkillItem
        skill="github"
        description="코드리뷰, 이슈관리, PR등을 통해 팀 프로젝트에서 협업을 원활하게 진행할 수 있습니다."
        color="#181717"
        stack="GitHub"
      />
      <SkillItem
        skill="npm"
        description="패키지 관리를 위해 사용해본 경험이 있습니다."
        color="#CB3837"
        stack="NPM"
      />
      <SkillItem
        skill="figma"
        description="팀 프로젝트에서 디자인 통일을 위해 사용해본 경험이 있습니다."
        color="#CB3837"
        stack="Figma"
      />
      <SkillItem
        skill="netlify"
        description="서버리스 기능을 활용하여 프로젝트를 빠르게 배포해본 경험이 있습니다"
        color="#00C7B7"
        stack="Netlify"
      />
      <SkillItem
        skill="vercel"
        description="서버리스 기능을 활용하여 프로젝트를 빠르게 배포해본 경험이 있습니다"
        stack="Vercel"
      />
      <SkillItem
        skill="notion"
        description="팀 프로젝트에서 문서화를 위해 사용해본 경험이 있습니다."
        stack="Notion"
      />
    </div>
  );
}
