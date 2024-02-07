import React, { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import './brandropdown.scss'
import ShowMore from '@/UI/ShowMore';

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

const BrandDropDown = () => {
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
      <AsideTitle title='Бренд' className='aside-filter__item-title' />
      <div className={`aside-filter__content${checkboxesVisible ? '' : ' hidden'}`}>
        <div className='aside-filter__contents-box'>
          <CheckboxItem label='BRP' />
          <CheckboxItem  label='Spark 2' />
          <CheckboxItem label='Spark 3 ' />
        </div>
        <ShowMore className='filter-more'>Показать еще</ShowMore>
      </div>
    </li>
  );
};

export default BrandDropDown;