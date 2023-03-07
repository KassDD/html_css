import './layout.sass'
import logo from './images/logo.png'
function Header(props) {
  console.log(props)
  return (
    <header className='main_header'>
      <a href='/'>
        <img src={logo} alt='Logo' className='main_header__logo' />
      </a>
      <div class='main_header__bar-contact'>
        <nav class='main_header__navbar'>
          <a class='main_header__navlink main_header__navlink--active'>
            примеры
          </a>
          <a class='main_header__navlink'>конструктор</a>
          <a class='main_header__navlink'>цены</a>
          <a class='main_header__navlink'>доставка</a>
          <a class='main_header__navlink'>о нас</a>
        </nav>
        <div class='main_header__contact'>8-800-555-35-35</div>
      </div>
    </header>
  )
}

export default Header
