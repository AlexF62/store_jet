import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import './saledropdown.scss';
import SaleButton from '@/UI/SaleButton';

interface Props {
  onSaleSelectionChange: (selectedSale: string[]) => void; 
}

const ModelDropDown: React.FC<Props> = ({ onSaleSelectionChange }) => {
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [selectedSale, setSelectedSale] = useState<string[]>([]); 

  const toggleButtonsVisibility = () => {
    setButtonsVisible(!buttonsVisible);
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleSaleSelection = (selectedSale: string | never[]) => {
    const newSelectedSale = Array.isArray(selectedSale) ? selectedSale : [selectedSale];
    setSelectedSale(newSelectedSale);
    onSaleSelectionChange(newSelectedSale);
  };

  return (
    <li className='aside-filter__item-drop' onClick={toggleButtonsVisibility}>
      {buttonsVisible ? (
        <MdKeyboardArrowDown className='aside-filter__arrow' />
      ) : (
        <MdOutlineKeyboardArrowUp className='aside-filter__arrow' />
      )}
      <AsideTitle title='Акции' className='aside-filter__item-title' />
      <div className={`aside-filter__content${buttonsVisible ? '' : ' hidden'}`} onClick={handleButtonClick}>
        <div className='aside-filter__content-box'>
          <SaleButton className='aside-filter__content-button' color='white' backgroundColor='#1c62cd' onClick={() => handleSaleSelection('SALE')}>SALE</SaleButton>
          <SaleButton className='aside-filter__content-button' color='#bdbec2' backgroundColor='transparent'>NEW</SaleButton>
          <SaleButton className='aside-filter__content-button' color='#bdbec2' backgroundColor='transparent'>HIT</SaleButton>
          <SaleButton className='aside-filter__content-button' color='white' backgroundColor='black'>ДИЛЕР</SaleButton>
        </div>
      </div>
    </li>
  );
};

export default ModelDropDown;
