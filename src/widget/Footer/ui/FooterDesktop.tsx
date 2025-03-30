import SVGIcon from '@/share/ui/SVGIcon';

export default function FooterDesktop() {
  return (
    <footer className="footer-desktop">
      <div className="container">
        <SVGIcon
          src="/assets/logo.svg"
          height="150px"
          width="30vw"
          shape={'square'}
          fill="#ffffff"
        />
        <div className="second">
          <span>SOCIAL</span>
          <div className="icons">
            <a href="https://github.com/jungmyunggi" target="_blank">
              <SVGIcon
                src="/assets/skills/github.svg"
                height="30px"
                width="2vw"
                shape={10}
                fill="#ffffff"
              />
            </a>
            <a href="https://tunaspace.tistory.com/" target="_blank">
              <SVGIcon
                src="/assets/skills/tistory.svg"
                height="30px"
                width="2vw"
                shape={10}
                fill="#ffffff"
              />
            </a>
            <a href="mailto:jung.myung.gi9@gmail.com">
              <SVGIcon
                src="/assets/skills/gmail.svg"
                height="30px"
                width="2vw"
                shape={10}
                fill="#ffffff"
              />
            </a>
          </div>
        </div>
      </div>
      <p>
        © Copyright 2025. Made by <span className="name">Jung MyungGi</span>
      </p>
    </footer>
  );
}
