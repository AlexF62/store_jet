import Link from 'next/link';
import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { CgDisplayGrid } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";
import './quadbike.scss';
import ProductCard from '@/components/productСard/ProductCard';
import { Pagination } from '@mui/material';
import Select from '@/components/select/Select';

const Page = () => {

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
                <button>Полноприводные</button>
                <button>от 5000</button>
                <button>BRP</button>
                <button>еще</button>
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
            <aside className="catalog__inner-aside"></aside>
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