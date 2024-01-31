import React, { Suspense, lazy } from 'react';
import Slider from 'react-slick';
import './globals.scss';
import Banner from '@/components/banner/Banner';
import TabsPage from '@/components/tabs/Tabs';
import Loading from '@/UI/Loading';
import Categories from '@/components/category/Category';
import Products from '@/components/products/Products';

export default function Page() {
  return (
    <>
      <section className="banner-section page-section">
        <div className="container">
          <div className="banner-section__inner">
            {/* <Slider /> */}
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
          <Products/>
        </div>
      </section>
    </>
  );
}