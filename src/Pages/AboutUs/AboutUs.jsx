import './AboutUs.scss'


import discord from '../../Images/discord.png'
import telegram from '../../Images/telegram.png'
import voidLinks from '../../Images/void.png'

import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
export function AboutUs() {
    return(
        <div className="about-us">
            <Header/>
            <div className="about-us_content">
                <h2>
                    О НАС
                </h2>
                <p>
                    Мы начинающая компания, которая переносит настольные игры в онлайн! Мы хотим упростить процесс игры и дать возможность поиграть всем.
                </p>
                <div className="about-us_contacts">
                    <h2>
                        КОНТАКТЫ
                    </h2>
                    <div className="about-us_contacts-links">
                        <a href="https://t.me/voidcompany" target="_blank">
                            <img src={telegram} alt="telegram-links" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={voidLinks} alt="void-links"/>
                        </a>
                        <a href="#" target="_blank">
                            <img src={discord} alt="discord-links"/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}