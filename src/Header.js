import './layout.sass'
import logo from './images/logo.png'

function Header(props) {
  return (
    <header className='main_header'>
      <a href='/' className='main_header__logo-wrap'>
        <img src={logo} alt='Logo' className='main_header__logo' />
      </a>

      <div className='main_header__bar-contact'>
        <nav className='main_header__navbar'>
          <a href="/" className='main_header__navlink main_header__navlink--active'>
            примеры
          </a>
          <a href="/" className='main_header__navlink'>конструктор</a>
          <a href="/" className='main_header__navlink'>цены</a>
          <a href="/" className='main_header__navlink'>доставка</a>
          <a href="/" className='main_header__navlink'>о нас</a>
        </nav>
        <div className='main_header__contact'>8-800-555-35-35</div>
      </div>
    </header>
  )
}

export default Header
