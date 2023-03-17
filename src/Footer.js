import './layout.sass'
import logo from './images/logo.png'
function Footer() {
  return (
    <footer className='main_footer'>
      <div className='main_footer__logo-wrap'>
        <a href='/'>
          <img src={logo} alt='Logo' className='main_footer__logo' />
        </a>
        <span className='main_footer__logo-desc'>нарядные бисквиты</span>
      </div>
      <div className='main_footer__contact-wrap'>
        <div className='main_footer__contact-col1'>
          <span className='main_footer__phone'>
            <span className='main_footer__phone--hidden'>☎ </span>
            <a className='main_footer__phone-link' href='tel:8-800-555-35-35'>
              8-800-555-35-35
            </a>
          </span>
          <span className='main_footer__address'>
            Туево,
            <br />
            Кукуево, 9
          </span>
        </div>
        <div className='main_footer__contact-col2'>
          <a className='main_footer__social-ig'>nakedforyou</a>
          <a className='main_footer__social-tw'>naked4you</a>
          <a className='main_footer__social-yt'>naked4cook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
