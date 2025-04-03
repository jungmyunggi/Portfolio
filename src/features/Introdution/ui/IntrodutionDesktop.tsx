import SVGIcon from '@/share/ui/SVGIcon';
import { useDarkStore } from '@/features/DarkModeToggle/model/DarkStore';
export default function IntrodutionDesktop() {
    const isDark = useDarkStore((state) => state.isDark);
    return (
        <section className="introdution-desktop">
            <div className="img-container">
                <img src="/assets/img2.jpg" alt="내 사진2" />
            </div>
            <div className="name-container">
                <SVGIcon
                    src="/assets/myname.svg"
                    fill={isDark ? '#000000' : '#000000'}
                    height="30vh"
                    width="100vw"
                    shape={'square'}
                />
            </div>
            <div className="text-container">
                <span>안녕하세요</span>
                <span>문제의 본질을 파악하고 최적의 해결책을 찾아내는 개발자, 정명기입니다.</span>
                <span>
                    <br />
                    프로젝트를 진행하면서 발생하는 다양한 문제의 원인을 분석하고, 그에 맞는 해결책을
                    적용하는 데 집중해 왔습니다.
                </span>
                <span>
                    API 호출 최적화, 불필요한 리렌더링 제거, 상태 관리 개선 등을 통해 서비스의
                    성능과 완성도를 높이는 것을 중요하게 생각합니다.
                </span>
                <br />
                <span>
                    React 기반 프로젝트에서 상태 관리 라이브러리를 활용해 데이터 흐름을 정리하고
                    사용자 경험을 개선하는 데 주력하고 있습니다.
                </span>
                <br />
                <span>
                    앞으로도 작지만 중요한 개선을 통해, 더 나은 서비스를 만드는 데 기여하고자
                    합니다.
                </span>
                <span>
                    사용자와 팀 모두에게 긍정적인 영향을 줄 수 있는 개발자가 되기 위해 계속해서
                    고민하고 성장하겠습니다.
                </span>
            </div>
        </section>
    );
}
