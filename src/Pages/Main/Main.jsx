import React from 'react';

import './Main.scss'
//Components
import {Header} from "../../Components/Header/Header";


export function Main(){
    return(
        <wrapper>
            <main className="main-mainPages">
                <Header/>
            </main>
            Главная страница
        </wrapper>
    )
}