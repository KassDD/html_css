import notFound from './images/404-cake.png'
import './not-found.sass'

function NotFound() {
  return (<section className="not-found__page">
    <img className="not-found__creepy-image" src={notFound} alt='notFound' />
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">
        Кто-то съел все тортики,<br/>попробуйте <a className="not-found__link" href='/'>поискать здесь</a>
      </p>
  </section>)
}

export default NotFound
