import React, { useState } from 'react';
import './avalible.scss';
import { FormControlLabel, Checkbox } from '@mui/material';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';

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

const Available = () => {
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
      <AsideTitle title='Наличие' className='aside-filter__item-title' />
      <div className={`aside-filter__content${checkboxesVisible ? '' : ' hidden'}`}>
        <div className='aside-filter__content-box'>
          <CheckboxItem label='В наличие' />
          <CheckboxItem label='Под заказ' />
        </div>
      </div>
    </li>
  );
};

export default Available;