import {Header} from "../../components/Header/Header";
import pointer from "../../Images/pointer.png"
import playIMG from "../../Images/play.png"

import './Main.scss'
import {Footer} from "../../components/Footer/Footer";


export function Main()  {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main-screen">
                <div className="main-screen_content">
                    <h1>BUNKER</h1>
                    <p>RISE</p>
                    <button className="down-button">
                        <img src={pointer} alt="pointer"/>
                    </button>
                </div>
            </main>
            <div className="background">
                <section className="connect">
                    <div className="connect-content">
                        <div className="connect-content_create-room">
                            <p>Создать свою комнату</p>
                            <button>ИГРАТЬ</button>
                        </div>
                        <span>ИЛИ</span>
                        <div className="connect-content_connectGame">
                            <p>Подключиться к игре</p>
                            <input type="text" placeholder="Введите код комнаты"/>
                            <button>
                                <img src={playIMG} alt="play"/>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="about-game">
                    <div className="about-game_content">
                        <p className="about-game_header">Об игре</p>
                        <p>
                            Мы придумали для Вас новые правила и условия игры, которые могут как облегчить,
                            так и усложнить игровой процесс.
                        </p>
                        <p>
                            Советуем ознакомиться с новвоведениями, чтобы получить лучший опыт от BUNKER RISE.
                        </p>
                        <a href="/rules" className="more-details">ПОДРОБНЕЕ</a>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    );
}