import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import './saledropdown.scss'
import SaleButton from '@/UI/SaleButton';

const ModelDropDown = () => {
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const toggleButtonsVisibility = () => {
    setButtonsVisible(!buttonsVisible);
  };

  return (
    <li className='aside-filter__item-drop' onClick={toggleButtonsVisibility}>
      {buttonsVisible ? (
        <MdKeyboardArrowDown className='aside-filter__arrow' />
      ) : (
        <MdOutlineKeyboardArrowUp className='aside-filter__arrow' />
      )}
      <AsideTitle title='Модели' className='aside-filter__item-title' />
      <div className={`aside-filter__content${buttonsVisible ? '' : ' hidden'}`}>
        <div className='aside-filter__content-box'>
          <SaleButton className='aside-filter__content-button' color='white' backgroundColor='#1c62cd'>SALE</SaleButton>
          <SaleButton className='aside-filter__content-button' color='#bdbec2' backgroundColor='transparent'>NEW</SaleButton>
          <SaleButton className='aside-filter__content-button' color='#bdbec2' backgroundColor='transparent'>HIT</SaleButton>
          <SaleButton className='aside-filter__content-button' color='white' backgroundColor='black'>ДИЛЕР</SaleButton>
        </div>
    </div>
    </li>
  );
};

export default ModelDropDown;