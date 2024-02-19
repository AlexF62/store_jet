import React from 'react';
import Image from 'next/image';
import Favorite from '@/UI/Favorite';
import Cart from '@/UI/Cart';
import { useGetAllQuery } from '@/services/product.service';
import './product.scss';
interface ProductProps {
  filterByBRP: boolean;
  filterBySale: boolean;
  filterByPrice: boolean;
  filterByPower: boolean;
  filterByEngine: boolean;
  filterBySpark: boolean;
  filterByCountry: boolean;
  FilterBySale: boolean;
  filterByPriceSlider: boolean;
  cardsPerPage: number;
  offset: number;
}

const Product: React.FC<ProductProps> = ({ filterByBRP, filterByPrice, filterByPower, filterBySpark,
   filterByCountry, FilterBySale, filterByPriceSlider, cardsPerPage, offset, filterByEngine,filterBySale }) => {
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
    if (filterBySpark && !(product.description?.includes('SPARK 2') || product.description?.includes('SPARK 3') || product.description?.includes('BRP'))) {
      return false;
    }
    if (filterByCountry && !(product.slug?.includes('Россия') || product.slug?.includes('Германия') || product.slug?.includes('Китай') || product.slug?.includes('США'))) {
      return false;
    }
    if (FilterBySale && product.price === undefined) {
      return false;
    }
    if (filterByPriceSlider && (product.price < 400000 || product.price > 600000)) {
      return false;
    }

    if (filterByEngine && !(product.description?.includes('60') || product.description?.includes('90') || product.description?.includes('130') || product.description?.includes('155') || product.description?.includes('230'))) {
      return false
    }
    
    if(filterBySale && !product.description?.includes('SALE')) {
      return false
    }

    return true;
  });

  const startIndex = offset;
  const endIndex = startIndex + cardsPerPage;
  const slicedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="product__cards">
      <div className="product__cards-items">
        <div className="product__cards-wrapper">
          {slicedProducts.map(product => (
            <div key={product.categoryId} className="product__cards-item">
              <Favorite className="product__card-favorite" />
              <a href="#" className="product__card-hover__text">посмотреть товар</a>
              <Image src={product.images[0]} width={200} height={200} alt={product.name} />
              <h4 className="product-card__title">{product.name}</h4>
              <div className="product-card__price-wrapper">
                {product.price < 130000 ? (
                  <p className="product-card__price" style={{ fontSize: '18px' }}>нет в наличии</p>
                ) : (
                  <p className="product-card__price">{`${product.price}₽`}</p>
                )}
                {product.price === 140000 && <span className="sale-icon">SALE</span>}
              </div>
              <Cart className='product-card__basket' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;