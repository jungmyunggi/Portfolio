import MailForm from '@/features/MailForm/ui/MailForm';
import Horizon from '@/share/ui/Horizon';
export default function HomeDesktop() {
  return (
    <section className="home">
      <div className="container">
        <div className="image">
          <img src="/assets/image.jpg" alt="내 사진" />
        </div>
        <div className="text">
          <div className="header">
            <h1>안녕하세요!</h1>
            <div className="header-top">
              <h2>긍정적인 시선으로 세상을 바라보는 개발자,</h2>
              <h3>정명기 입니다.</h3>
            </div>
          </div>
          <div className="middle">
            <p>여행과 캠핑을 좋아하며,</p>
            <p>생각을 정리하고 스트레스를 풀곤 합니다.</p>
          </div>
          <div className="footer">
            <p>저에게 관심이 있으시거나,</p>
            <p>궁금한 점이 있다면 언제든 연락주세요.</p>
          </div>
        </div>
      </div>
      <Horizon title="CONTACT" interval={30} />
      <MailForm />
    </section>
  );
}
