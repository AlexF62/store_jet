import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import './dropdown.scss'
import ShowMore from '@/UI/ShowMore';
import CheckBoxItem from '../checkboxitem/CheckBoxItem';
// Import CheckboxItem component

interface DropDownProps {
  title: string;
  items: string[];
  showMoreVisible: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ title, items, showMoreVisible }) => {
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
      <AsideTitle title={title} className='aside-filter__item-title' />
      <div className={`aside-filter__content${checkboxesVisible ? '' : ' hidden'}`}>
        <div className='aside-filter__contents-box'>
          {items.map((item, index) => (
            <CheckBoxItem key={index} label={item} />
          ))}
        </div>
        {showMoreVisible && <ShowMore className='filter-more'>Показать еще</ShowMore>}
      </div>
    </li>
  );
};

export default DropDown;