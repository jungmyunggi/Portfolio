import "@/features/Nav/Nav.scss";
export default function Nav(){
    return <nav className="nav">
        <div className="nav-content">
            <div className="nav-shortcut">
                <div className="nav-intro">Intro.</div>
                <div className="nav-skill">Skill.</div>
                <div className="nav-project">Project.</div>
                <div className="nav-education">Education.</div>
                <div className="nav-certificate">Certificate.</div>
            </div>
            
            <div className="nav-contact">
                <div>Tistory</div>
                <div>Github</div>
                <div>jung.myung.gi9@gmail.com</div>
                <div>Last Update: 2025/02</div>

            </div>
        </div>
    </nav>
}