import SVGIcon from '@/share/ui/SVGIcon';

export default function FooterMobile() {
    return (
        <footer className="footer-mobile">
            <div className="icons">
                <a href="https://github.com/jungmyunggi" target="_blank">
                    <SVGIcon
                        src="/assets/skills/GitHub.svg"
                        height="30px"
                        width="25px"
                        shape={10}
                        fill="#ffffff"
                    />
                </a>
                <a href="https://tunaspace.tistory.com/" target="_blank">
                    <SVGIcon
                        src="/assets/skills/tistory.svg"
                        height="30px"
                        width="25px"
                        shape={10}
                        fill="#ffffff"
                    />
                </a>
                <a href="mailto:jung.myung.gi9@gmail.com">
                    <SVGIcon
                        src="/assets/skills/gmail.svg"
                        height="30px"
                        width="25px"
                        shape={10}
                        fill="#ffffff"
                    />
                </a>
            </div>
            <p>
                © Copyright 2025. Made by <span className="name">Jung MyungGi</span>
            </p>
        </footer>
    );
}
