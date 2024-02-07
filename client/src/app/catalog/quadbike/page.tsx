'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { CgDisplayGrid } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";
import './quadbike.scss';
import ProductCard from '@/components/productСard/ProductCard';
import Select from '@/components/select/Select';
import Tab from '@/components/tabs/Tab';
import Available from '@/components/availabledropdown/Available';
import { Pagination } from '@mui/material';
import NewDropDown from '@/components/newdropdown/NewDropDown';
import PriceDropDown from '@/components/pricedropdown/PriceDropDown';
import BrandDropDown from '@/components/branddropdown/BrandDropDown';
import CountryDropDown from '@/components/countrydropdown/CountryDropDown';
import SaleDropDown from '@/components/saledropdown/SaleDropDown';
import SaleButton from '@/UI/SaleButton';
import ShowMore from '@/UI/ShowMore';

const Page = () => {
  const tabsCategory = [
    { index: 1, label: 'ПАРАМЕТРЫ' },
    { index: 2, label: 'ПО МАРКЕ' },
  ]

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex:number) => {
    setActiveTab(tabIndex);
  };

    return (
    <div className='container'>
      <div className='breadcrumbs'>
        <ul className='breadcrumbs__list'>
          <li className='breadcrumbs__list-item'>
            <Link href={'/'}>Главная</Link>
          </li>
          <li className='breadcrumbs__list-item'>
            <MdArrowForwardIos color='#c4c4c4' size={14}/>
          </li>
          <li className='breadcrumbs__list-item'>
            <span>Квадроциклы</span>
          </li>
        </ul>
      </div>
      <div className="catalog">
        <h2 className="catalog__title">Квадроциклы</h2>
        <div className="catalog__filter">
            <div className="catalog__filter-items">
                <button className='catalog__filter-items__btn'>Полноприводные</button>
                <button className='catalog__filter-items__btn'>от 5000</button>
                <button className='catalog__filter-items__btn'>BRP</button>
                <button className='catalog__filter-items__btn'>еще</button>
            </div>
            <div className="catalog__filter-button">
                <Select />
                <button className='catalog__filter-btngrid'>
                <CgDisplayGrid size={23}/>
                </button>
                <button className='catalog__filter-btnline'>
                <RiMenuLine size={25}/>
                </button>
            </div>
        </div>
        <div className="catalog__inner">
            <aside className="catalog__inner-aside aside-filter">
            {tabsCategory.map((tab) => (
              <Tab key={tab.index} index={tab.index} activeTab={activeTab} onClick={() => handleTabChange(tab.index)} label={tab.label}/>
            ))}
           <div className="aside-filter__form">
            <div className="aside-filter__list">
              <Available/>
              <NewDropDown/>
              <PriceDropDown/>
              <BrandDropDown/>
              <SaleDropDown/>
              <CountryDropDown/>
            </div>
           </div>
         </aside>
            <div className="catalog__inner-list">
                <ProductCard/>
            </div>
        </div>
        <div className="pagination">
            <Pagination count={5} variant="outlined" shape="rounded" color='primary'/>
        </div>
      </div>
    </div>
  );
};

export default Page;