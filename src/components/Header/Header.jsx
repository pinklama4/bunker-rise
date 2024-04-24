import './Header.scss'
import logoHeader from '../../Images/bunklogo.png'
export function Header() {
    return(
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src={logoHeader} alt="logo"/>
                    <h1>BUNKER</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">ГЛАВНАЯ</a>
                        </li>
                        <li>
                            <a href="/instructions">ИНСТРУКЦИЯ</a>
                        </li>
                        <li>
                            <a href="/rules">ПРАВИЛА</a>
                        </li>
                        <li>
                            <a href="/aboutUs">О НАС</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}