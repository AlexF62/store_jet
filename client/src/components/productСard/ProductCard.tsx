import React from 'react';
import Image from 'next/image';
import Favorite from '@/UI/Favorite';
import Cart from '@/UI/Cart';
import { useGetAllQuery } from '@/services/product.service';
import './product.scss';
interface ProductProps {
  filterByBRP: boolean;
  filterByPrice: boolean;
  filterByPower: boolean;
}

const Product: React.FC<ProductProps> = ({ filterByBRP, filterByPrice, filterByPower }) => {
  const { data } = useGetAllQuery();
  const products = data?.products || [];

  const filteredProducts = products.filter(product => {
    if (filterByBRP && !product.description?.includes('BRP')) {
      return false;
    }
    if (filterByPrice && product.price < 200000) {
      return false;
    }
    if (filterByPower && !product.description?.includes('900')) {
      return false;
    }
    return true;
  });

  return (
    <div className="product__cards">
      <div className="product__cards-items">
        <div className="product__cards-wrapper">
          {filteredProducts.map(product => (
            <div key={product.name} className="product__cards-item">
              <Favorite className="product__card-favorite" />
              <a href="#" className="product__card-hover__text">посмотреть товар</a>
              <Image src={product.images[0]} width={200} height={200} alt={product.name} />
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