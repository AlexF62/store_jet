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
import { Pagination } from '@mui/material';
import SaleDropDown from '@/components/saledropdown/SaleDropDown';
import PriceDropDown from '@/components/pricedropdown/PriceDropDown';
import DropDown from '@/components/dropdown/DropDown';
import SaleButton from '@/UI/SaleButton';
import ShowMore from '@/UI/ShowMore';

const Page = () => {

  const [filterByBRP, setFilterByBRP] = useState(false);
  const [filterByPrice, setFilterByPrice] = useState(false)
  const [filterByPower, setFilterByPower] = useState(false)
  
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
                <button className='catalog__filter-items__btn' onClick={() => setFilterByPower(!filterByPower)}>Полноприводные</button>
                <button className='catalog__filter-items__btn'  onClick={() => setFilterByPrice(!filterByPrice)}>от 200000</button>
                <button className='catalog__filter-items__btn' onClick={() => setFilterByBRP(!filterByBRP)}>BRP</button>
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
              <DropDown title="Наличие" items={[ 'В наличии', 'Под заказ']} showMoreVisible={false} />
              <DropDown title="Новинки" items={['Все', 'Новинки', 'Акции']} showMoreVisible={false} />
              <PriceDropDown/>
              <DropDown title="Бренды" items={['BRP', 'Spark 2', 'Spark 3']} showMoreVisible={true} />
              <SaleDropDown/>
              <DropDown title="Страны" items={['Россия', 'Германия', 'Китай', 'США']}  showMoreVisible={true}/>
            </div>
            <SaleButton className='filter-btn__send' backgroundColor='transparent' color='#bdbec2'>Выбрать</SaleButton>
            <ShowMore className='filter-btn__reset'>Сбросить фильтр</ShowMore>
           </div>
         </aside>
            <div className="catalog__inner-list">
                <ProductCard filterByBRP={filterByBRP} filterByPrice={filterByPrice} filterByPower={filterByPower}/>
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