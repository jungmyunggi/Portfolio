export const PROJECT_ITEMS = [
  {
    name: 'Denamu',
    location: '@네이버 부스트캠프',
    date: '2024.11 ~ 2025.02',
    serviceLink: 'https://denamu.site',
    githubLink: 'https://github.com/boostcampwm-2024/web05-Denamu',
    overview: `Denamu는 개발자들을 위한 블로그 허브 플랫폼으로, 다양한 기술 블로그의 컨텐츠를 한 곳에서
            모아볼 수 있게 해주는 서비스입니다. 네이버 부스트캠프 9기 수료생들의 협업 프로젝트로, 개발자들의
            기술 성장과 정보 공유를 더욱 효과적으로 만들기 위해 개발되었습니다. 사용자는 당일 조회수가 가장 높은 글을
            확인할 수 있으며, 원하는 게시글을 검색을 통해 찾아볼 수 있습니다.`,
    role: '프론트엔드 개발',
    roleContent: [
      'Socket.io와 Zustand를 이용한 채팅 구현',
      'Polling을 활용한 차트기능 구현',
      'SEO최적화 및 접근성 강화',
      '정적 코드분석을 통한 미사용 코드 삭제',
      '예외처리를 통한 사용자 경험 향상',
      '반응형 웹 제작',
      '팀원 코드 리뷰 및 기술 지원',
    ],
    techStack: [
      'Typescript',
      'React',
      'React Router',
      'Tanstack Query',
      'Vite',
      'Zustand',
      'TailwindCss',
      'Shadcn/ui',
      'axios',
      'Socket.io',
    ],
    features: [
      {
        title: '블로그 피드 시스템',
        content:
          '다양한 기술 블로그의 최신 글을 자동으로 수집하여 한 곳에서 모아볼 수 있는 피드 시스템 구현. 무한 스크롤로 사용자 경험 최적화. 하루동안의 조회수가 가장 높은 글을 확인할 수 있는 기능 구현.',
      },
      {
        title: '검색 기능',
        content:
          '사용자가 원하는 게시글을 검색할 수 있는 검색 기능 구현. 검색 결과는 게시글 제목, 내용, 작성자 등을 기준으로 필터링.',
      },
      {
        title: 'RSS등록',
        content:
          '사용자 본인의 블로그 RSS를 서비스에 등록하여, 자신의 블로그 글이 서비스에 노출되도록 하는 기능 구현.',
      },
      {
        title: '익명 채팅 기능',
        content:
          '사용자들이 익명으로 대화할 수 있는 채팅 기능 구현. 실시간으로 채팅 내용을 확인할 수 있으며, 상위 20개의 대화 저장.',
      },
      {
        title: '차트 기능',
        content:
          '각 게시글의 전체 조회수, 일일 조회수 제공. 서비스에 등록된 기술블로그의 플렛폼 수 제공.',
      },
      {
        title: '글 자동 요약 기능',
        content: 'AI를 활용하여 게시글 요약 제공. 해당 게시글의 주요 기술스택 태그 제공.',
      },
    ],
    achievement: [
      {
        title: '배포 이후 실제 사용자 확보',
        content: '서비스 배포 이후 사용자들의 자발적 참여로 초기 사용자 확보.',
      },
      {
        title: '프로젝트 리팩토링을 통한 성능 개선 및 사용자 경험 향상',
        content:
          '코드 구조 최적화와 불필요한 로직 정리를 통해 서비스의 안정성을 높이고, 페이지 로딩 속도를 개선하여 원활한 사용자 경험을 제공함.',
      },
    ],
  },
];

export const EDUCATION_ITEMS = [
  {
    name: '네이버 부스트캠프',
    date: '2024.06 ~ 2025.02',
    summary: '네이버 부스트캠프 웹 풀스택 9기 수료',
  },
  { name: '영남대학교', date: '2019.03 ~ 2025.02', summary: '컴퓨터공학과 졸업' },
];

export const CERTIFICATE_ITEMS = [
  { name: '정보처리기사', date: '2024.06', organization: '한국산업인력공단' },
  { name: 'TOEIC Speaking(IH)', date: '2024.01', organization: '한국TOEIC위원회' },
];
