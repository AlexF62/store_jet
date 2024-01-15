import Link from 'next/link'
import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer__top">
        <div className="footer__top-inner">
          <div className="footer__top-item footer__top-newsletter">
            <h6 className="footer__top-title"> 
            Подпишитесь на нашу рассылку 
            и узнавайте о акция быстрее
            </h6>
            <form className='footer-form'>
              <input className='footer-form__input' type="text" placeholder='Введите ваш e-mail:'/>
              <button className='footer-form__btn' type='submit'>Отправить</button>
            </form>
          </div>
          <div className="footer__top-item">
            <h6 className="footer__top-title">
            Информация
            </h6>
            <ul className="footer-list">
              <li className="footer-list__item">
                <Link href='#'>О компании</Link>
              </li>
              <li className="footer-list__item">
                <Link href='#'>Контакты</Link>
              </li>
              <li className="footer-list__item">
                <Link href='#'>Акции</Link>
              </li>
              <li className="footer-list__item">
                <Link href='#'>Магазины</Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-item">
            <h6 className="footer__top-title">
            Интернет-магазин
           </h6>
           <ul className="footer-list">
              <li className="footer-list__item">
                <Link href='#'>Доставка и самовывоз</Link>
              </li>
              <li className="footer-list__item">
                <Link href='#'>Оплата</Link>
              </li>
              <li className="footer-list__item">
                <Link href='#'>Возврат-обмен</Link>
              </li>
              <li className="footer-list__item">
                <Link href='#'>Новости</Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-item footer__top-social">
            <ul className="social-list">
              <li className="social-list__item">
                <a href="#">
                  <img src="/images/instagram-icon.svg" alt="instagram" />
                </a>
              </li>
              <li className="social-list__item">
                <a href="#">
                  <img src="/images/vk-icon.svg" alt="vk" />
                </a>
              </li>
              <li className="social-list__item">
                <a href="#">
                  <img src="/images/facebook-icon.svg" alt="facebook" />
                </a>
              </li>
              <li className="social-list__item">
                <a href="#">
                  <img src="/images/youtube-icon.svg" alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <Link className='footer__bottom-link' href='#'>Договор оферты</Link>
        <Link className='footer__bottom-link' href='#'>Политика обработки персональных данных</Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer
