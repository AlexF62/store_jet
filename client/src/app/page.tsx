import React, { Suspense, lazy } from 'react';
import './globals.scss';
import Banner from '@/components/banner/Banner';
import TabsPage from '@/components/tabs/Tabs';
import Loading from '@/UI/Loading';
import Categories from '@/components/category/Category';
import Products from '@/components/products/Products';
import SimpleSlider from '@/components/slider/Slider';
import SaleBanner from '@/components/sale/SaleBanner';

export default function Page() {
  return (
    <>
      <section className="banner-section page-section">
        <div className="container">
          <div className="banner-section__inner">
            <SimpleSlider/>
            <Banner />
          </div>
        </div>
      </section>

      <section className="search page-section">
        <div className="container">
          <TabsPage />
        </div>
      </section>

      <div className="section categories page-section">
        <div className="container">
           <Suspense fallback={<Loading/>}>
            <Categories />
          </Suspense>
        </div>
      </div>

      <section className="products">
        <div className="container">
          <Products title={'Популярные товары'}/>
         </div>
          <SaleBanner/>
      </section>

      <section className="products">
        <div className="container">
        <Products title={'С этим товаром покупают'}/>
        </div>
      </section>
</>
  );
}