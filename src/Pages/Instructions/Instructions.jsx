import './Instructions.scss'
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export function Instructions() {
    return(
        <div className="wrapper">
            <div className="instructions">
                <Header/>
                <div className="instructions_content">
                    <p className="instructions_title">ИНСТРУКЦИЯ</p>
                    <div className="instructions_connect">
                        <p>
                            Как подключиться ?
                        </p>
                        <p>
                            На Главной странице в поле “ПОДКЛЮЧИТЬСЯ К ИГРЕ” ввода напишите код комнаты, и нажмите на кнопку подключится.
                        </p>
                    </div>
                    <div className="instructions_create">
                        <p>
                            Как создать комнату ?
                        </p>
                        <p>
                            На Главной странице нажмите кнопку Играть, и в появившемся окне напишите Название комнаты и настройки для игры.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}