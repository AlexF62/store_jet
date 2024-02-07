import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Select } from '@mui/material';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import ShowMore from '@/UI/ShowMore';
import SaleButton from '@/UI/SaleButton';

interface CheckboxItemProps {
  label: string;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ label }) => {
  const handleCheckboxClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  return (
    <FormControlLabel
      control={<Checkbox size="small" onClick={handleCheckboxClick} />}
      label={label}
    />
  );
};

const CountryDropDown = () => {
  const [checkboxesVisible, setCheckboxesVisible] = useState(true);

  const toggleCheckboxesVisibility = () => {
    setCheckboxesVisible(!checkboxesVisible);
  };

  return (
    <li className='aside-filter__item-drop' onClick={toggleCheckboxesVisibility}>
      {checkboxesVisible ? (
        <MdKeyboardArrowDown className='aside-filter__arrow' />
      ) : (
        <MdOutlineKeyboardArrowUp className='aside-filter__arrow' />
      )}
      <AsideTitle title='Страны' className='aside-filter__item-title' />
      <div className={`aside-filter__content${checkboxesVisible ? '' : ' hidden'}`}>
        <div className='aside-filter__contents-box'>
          <CheckboxItem label='Россия' />
          <CheckboxItem  label='Германия' />
          <CheckboxItem label='Китай' />
          <CheckboxItem label='США' />
        </div>
        <ShowMore className='filter-more'>Показать еще</ShowMore>
      </div>
      <SaleButton className='filter-btn__send' backgroundColor='transparent' color='#bdbec2'>Выбрать</SaleButton>
      <ShowMore className='filter-btn__reset'>Сбросить фильтр</ShowMore>
    </li>
  );
};

export default CountryDropDown;