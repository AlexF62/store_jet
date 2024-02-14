'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { CgDisplayGrid } from 'react-icons/cg';
import { RiMenuLine } from 'react-icons/ri';
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

interface Filters {
  filterByBRP: boolean;
  filterByPrice: boolean;
  filterByPriceSlider: boolean;
  filterByPower: boolean;
  filterBySpark: boolean;
  filterByCountry: boolean;
  FilterBySale: boolean;
  selectedBrands: string[];
  selectedCountries: string[];
  selectedSale: string[];
  selectedPrice: string[];
}

const initialFilters: Filters = {
  filterByBRP: false,
  filterByPrice: false,
  filterByPriceSlider: false,
  filterByPower: false,
  filterBySpark: false,
  filterByCountry: false,
  FilterBySale: false,
  selectedBrands: [],
  selectedCountries: [],
  selectedSale: [],
  selectedPrice: [],
};

const Page = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleFilterToggle = (filterKey: keyof Filters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const handleBrandCountrySelectionChange = (
    selection: string[],
    filterKey: keyof Filters
  ) => {
    const filterCondition =
      filterKey === 'selectedBrands'
        ? selection.includes('Spark 2') || selection.includes('Spark 3')
        : selection.includes('РОССИЯ') ||
          selection.includes('ГЕРМАНИЯ') ||
          selection.includes('Китай') ||
          selection.includes('США');

    setFilters(prevFilters => ({
      ...prevFilters,
      [filterKey]: selection,
      [filterKey === 'selectedBrands'
        ? 'filterBySpark'
        : 'filterByCountry']: filterCondition,
    }));
  };

  const handleSaleSelectionChange = (selectedSale: string[]) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedSale,
      FilterBySale: !!selectedSale.length,
    }));
  };

  const handlePriceFilterChange = (filterType: string, value: number | string[] | number[]) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedPrice: Array.isArray(value) ? value.map(String) : [String(value)],
      filterByPriceSlider: Array.isArray(value) ? !!value.length : true,
    }));
  };

  return (
    <div className="container">
      <div className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__list-item">
            <Link href={'/'}>Главная</Link>
          </li>
          <li className="breadcrumbs__list-item">
            <MdArrowForwardIos color="#c4c4c4" size={14} />
          </li>
          <li className="breadcrumbs__list-item">
            <span>Квадроциклы</span>
          </li>
        </ul>
      </div>
      <div className="catalog">
        <h2 className="catalog__title">Квадроциклы</h2>
        <div className="catalog__filter">
          <div className="catalog__filter-items">
            <button
              className="catalog__filter-items__btn"
              onClick={() => handleFilterToggle('filterByPower')}
            >
              Полноприводные
            </button>
            <button
              className="catalog__filter-items__btn"
              onClick={() => handleFilterToggle('filterByPrice')}
            >
              от 200000
            </button>
            <button
              className="catalog__filter-items__btn"
              onClick={() => handleFilterToggle('filterByBRP')}
            >
              BRP
            </button>
            <button className="catalog__filter-items__btn">еще</button>
          </div>
          <div className="catalog__filter-button">
            <Select />
            <button className="catalog__filter-btngrid">
              <CgDisplayGrid size={23} />
            </button>
            <button className="catalog__filter-btnline">
              <RiMenuLine size={25} />
            </button>
          </div>
        </div>
        <div className="catalog__inner">
          <aside className="catalog__inner-aside aside-filter">
            {[{ index: 1, label: 'ПАРАМЕТРЫ' }, { index: 2, label: 'ПО МАРКЕ' }].map(
              tab => (
                <Tab
                  key={tab.index}
                  index={tab.index}
                  activeTab={activeTab}
                  onClick={() => handleTabChange(tab.index)}
                  label={tab.label}
                />
              )
            )}
            <div className="aside-filter__form">
              <div className="aside-filter__list">
                <DropDown
                  title="Наличие"
                  items={['В наличии', 'Под заказ']}
                  showMoreVisible={false}
                  onSelectionChange={handleSaleSelectionChange}
                />
                <PriceDropDown onFilterChange={handlePriceFilterChange} />
                <DropDown
                  title="Бренды"
                  items={['BRP', 'Spark 2', 'Spark 3']}
                  showMoreVisible={true}
                  onSelectionChange={selection =>
                    handleBrandCountrySelectionChange(selection, 'selectedBrands')
                  }
                />
                <SaleDropDown />
                <DropDown
                  title="Страны"
                  items={['Россия', 'Германия', 'Китай', 'США']}
                  showMoreVisible={true}
                  onSelectionChange={selection =>
                    handleBrandCountrySelectionChange(selection, 'selectedCountries')
                  }
                />
              </div>
              <SaleButton className="filter-btn__send">Выбрать</SaleButton>
              <ShowMore className="filter-btn__reset" onClick={resetFilters}>
                Сбросить фильтр
              </ShowMore>
            </div>
          </aside>
          <div className="catalog__inner-list">
            <ProductCard {...filters} />
          </div>
        </div>
        <div className="pagination">
          <Pagination count={5} variant="outlined" shape="rounded" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Page;