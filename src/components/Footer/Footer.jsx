import footerLogo from '../../Images/logo-footer.png'
import './Footer.scss'

export function Footer() {
    return(
      <footer>
          <div className="footer-content">
              <div className="footer-content_logo">
                  <img src={footerLogo} alt="logo-footer"/>
                  <p>BUNKER</p>
              </div>
              <div className="footer-content_info">
                  <p>
                      "BUNKER RISE" – ЭТО ОНЛАЙН дискуссионная игра о выживании после апокалипсиса.
                  </p>
                  <p>
                      Наша цель сделать игру более удобной и понятной для людей
                  </p>
                  <p>
                      ©  2024 BUNKER RISE by VOID
                  </p>
              </div>
              <div className="footer-content_nav">
                  <a href="/contacts">КОНТАКТЫ</a>
                  <a href="/instructions">ИНСТРУКЦИЯ</a>
                  <a href="/rules">ПРАВИЛА</a>
                  <a href="/aboutus">О НАС</a>
              </div>
          </div>
      </footer>
    );
}