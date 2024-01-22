import Link from 'next/link'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './product.scss'

export const Products = () => {
  
return <div className="products__inner">
    <h3 className="products__title">Популярные товары</h3>
    <div className="tabs-wrapper">
        <div className="tabs products__tabs">
            <Link className='tab products__tab' href='#'>запчасти</Link>
            <Link className='tab products__tab' href='#'>моторы</Link>
            <Link className='tab products__tab' href='#'>шины </Link>
            <Link className='tab products__tab' href='#'>электроника</Link>
            <Link className='tab products__tab' href='#'>инструменты</Link>
            <Link className='tab products__tab' href='#'>аксессуары </Link>
        </div>
        <div className='tabs-container products__container'>
    <div className="tabs-content products__content">
        <div className="product-slider">
            <div className="product-slider__item">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
               </div>
        </div>
    </div>
  </div>
    </div>
  </div>
}

export default Products
