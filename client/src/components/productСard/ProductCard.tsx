'use client'
import React from 'react';
import Image from 'next/image';
import Favorite from '@/UI/Favorite';
import Cart from '@/UI/Cart';
import { useGetAllQuery } from '@/services/product.service';
import './product.scss';

const Product = () => {
  const { data } = useGetAllQuery();
  const products = data?.products || [];

  return (
    <div className="product__cards">
      <div className="product__cards-items">
        <div className="product__cards-wrapper">
          {products.map((product) => (
            <div key={product.name} className="product__cards-item">
              <Favorite className="product__card-favorite" />
              <a href="#" className="product__card-hover__text">посмотреть товар</a>
             <Image  src={product.images[0]} width={200} height={200} alt={product.name}/>
              <h4 className="product-card__title">{product.name}</h4>
              <p className="product-card__price">{product.price}₽</p>
              <Cart className='product-card__basket' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;