'use client'
import React, { useState } from 'react';
import Tab from '../tabs/Tab';
import ProductCard from '../productСard/ProductCard';
import './products.scss';
import SaleBanner from '../sale/SaleBanner';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { tabs } from '@/constans/productsTab';

const Products = () => {
  
  const [activeTab, setActiveTab] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleTabChange = (tabIndex: React.SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='products__inner'>
      <h3 className="products__title">Популярные товары</h3>
      <div className="tabs-wrapper">
        <div className="tabs products__tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.index}
              index={tab.index}
              activeTab={activeTab}
              onClick={() => handleTabChange(tab.index)}
              label={tab.label}
            />
          ))}
        </div>
        <div className="tabs-container">
          <div className="tabs-slider">
            <Slider {...settings}>
              <div className='slider-tab'>
                <div className='slider-tab__item'>
                <ProductCard />
                </div>
            </div>
              <div className='slider-tab'>
                <div>
                <ProductCard />
                </div>
            </div>
              <div className='slider-tab'>
                <div>
                <ProductCard />
                </div>
            </div>
              </Slider>
          </div>
          <div className="products__more">
            <Link className='products__more-link' href="#">Показать еще</Link>
          </div>
          <SaleBanner/>
        </div>
      </div>
    </div>
  );
}

export default Products;