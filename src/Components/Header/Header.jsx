import './Header.scss'

export function Header() {
    return(
        <header className="header">
            <div className="header-content">
                <nav>
                    <ul>
                        <li>
                            <a href="/Main">ГЛАВНАЯ</a>
                            <a href="/Instruction">ИНСТРУКЦИЯ</a>
                            <a href="/Rules">ПРАВИЛА</a>
                            <a href="/AboutUs">О НАС</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        //Header scroll

    // <header>
    //     <div className="header-content">
    //         <div className="logo">
    //
    //         </div>
    //         <nav>
    //             <ul>
    //                 <li>
    //                     <a href="#">ГЛАВНАЯ</a>
    //                     <a href="#">ИНСТРУКЦИЯ</a>
    //                     <a href="#">ПРАВИЛА</a>
    //                     <a href="#">О НАС</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>
    // </header>
    )
}