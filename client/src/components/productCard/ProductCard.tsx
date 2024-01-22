import CartButton from '@/UI/CartButton'
import FavoriteButton from '@/UI/FavoriteButton'
import Link from 'next/link'
import React from 'react'
import './productCard.scss'

const ProductCard = () => {
  return <Link  href='#'>
    <div className='product-item'>
      <p className="product-item__hover-text">посмотреть товар</p>
        <div className="product-item__favorite">
        <FavoriteButton/>
        </div>
           <img className='product-item__img' src="/images/cardImage/backpack.png" alt="" />
          <h4 className='product-item__title'>Водонепроницаемый Рюкзак</h4>                              
          <p className='product-item__price'>9 800 ₽</p>
          <div className="product-item__cart">
           <CartButton />  
           </div>
    </div>
        </Link> 
}

export default ProductCard

           



 