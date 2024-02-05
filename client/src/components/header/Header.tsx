import Link from 'next/link'
import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className="header">
        <div className="header__top">
            <div className="container">
               <div className="header__top-inner">
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link href="/store" className="menu__link">Магазины</Link>
                        </li>
                        <li className="menu__item">
                            <Link href="/sale" className="menu__link">Акции</Link>
                        </li>
                        <li className="menu__item">
                            <Link href="/pay" className="menu__link">Доставка и оплата</Link>
                        </li>
                    </ul>
                </nav>
                <Link className='logo' href='/'>
                    <img className='logo__img' src="/images/header-logo.svg" alt="header-logo" />
                </Link>
                <div className="header__box">
                    <p className="header__address">
                    Москва,  ул. Науки  25
                    </p>
                    <ul className="user-list">
                        <li className="user-list__item">
                        <a className='user-list__link' rel="stylesheet" href="/favorite">
                            <img src="/images/heart.svg" alt="favorites-icon" />
                            </a>  
                        </li>
                        <li className="user-list__item">
                        <a className='user-list__link' rel="stylesheet" href="/account">
                            <img src="/images/person.svg" alt="account-icon" /></a>  
                        </li>
                        <li className="user-list__item">
                            <a className='user-list__link basket' rel="stylesheet" href="/cart">
                                <img src="/images/cart.svg" alt="cart-icon" />
                                <p className="basket__num">1</p>
                                </a>  
                        </li>
                    </ul>
                </div>
               </div>
            </div>
        </div>

        <div className="header__bottom">
            <div className="container">
               <ul className="menu-categories">
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='/catalog/quadbike'>Квадроциклы</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Катера</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Гидроциклы</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Лодки</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Вездеходы</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Снегоходы</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Двигатели</Link>
                   </li>
                   <li className="menu-categories__item">
                    <Link className='menu__categories__link' href='#'>Запчасти</Link>
                   </li>
                </ul>
               </div>
        </div>
    </div>
  )
}

export default Header