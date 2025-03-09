import '@/features/About/About.scss';
export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">자기소개</h2>
      <div className="about-content">
        <div className="about-content-subtitle">
          안녕하세요, 신입 프론트엔드 개발자 <b>정명기</b>입니다. <b>기초가 탄탄한 개발자</b>가 되기
          위해 꾸준히 학습하고 다양한 프로젝트 경험을 쌓고 있습니다.
          <b>사용자 경험</b>을 최우선 가치로 삼으며, 성능 최적화와 접근성이 뛰어난 웹 애플리케이션
          개발에 집중하고 있습니다. 팀원들 사이에서는 <b>분위기 메이커</b>라는 말을 들을 정도로
          소통과 협업을 즐기며, 함께 성장하는 문화를 만들어가는 데 열정을 갖고 있습니다.
        </div>
        <div className="about-content-description">
          <span>💡 기초가 탄탄한 개발자</span>
          <p>
            React의 핵심 원리를 깊이 이해하기 위해 직접 가상 DOM을 구현하고, diff 알고리즘을
            개발해보며 상태 변화가 UI 성능에 미치는 영향을 학습한 경험이 있습니다. 단순히 기능을
            구현하는 것에서 그치지 않고, <b>"왜 이렇게 동작하는가?"</b> 에 대한 고민을 하며 학습한
            내용을 실제 프로젝트에 적용해보는 것을 중요하게 생각합니다.
          </p>
        </div>
        <div className="about-content-description">
          <span>🎯 미래 목표</span>
          <p>
            사용자 경험을 고려한 효율적인 렌더링, 성능 최적화, 그리고 유지보수하기 좋은 코드 작성에
            집중하며 성장해 나가고 있습니다. 앞으로도 깊이 있는 학습과 실전 경험을 통해
            <b>더 나은 사용자 경험을 제공하는 프론트엔드 개발자</b>가 되기 위해 노력하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
