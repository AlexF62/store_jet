import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import './dropdown.scss'
import ShowMore from '@/UI/ShowMore';
import CheckBoxItem from '../checkboxitem/CheckBoxItem';
interface DropDownProps {
  title: string;
  items: string[];
  showMoreVisible: boolean;
  onSelectionChange: (selectedItems: string[]) => void;
  }

const DropDown: React.FC<DropDownProps> = ({ title, items, showMoreVisible, onSelectionChange }) => {
  const [checkboxesVisible, setCheckboxesVisible] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleCheckboxesVisibility = () => {
    setCheckboxesVisible(!checkboxesVisible);
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); 
  };

  const handleItemToggle = (item: string) => {
    const updatedSelection = selectedItems.includes(item)
      ? selectedItems.filter(selectedItem => selectedItem !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  return (
    <li className='aside-filter__item-drop' onClick={toggleCheckboxesVisibility}>
      {checkboxesVisible ? (
        <MdKeyboardArrowDown className='aside-filter__arrow' />
      ) : (
        <MdOutlineKeyboardArrowUp className='aside-filter__arrow' />
      )}
      <AsideTitle title={title} className='aside-filter__item-title' />
      <div className={`aside-filter__content${checkboxesVisible ? '' : ' hidden'}`} onClick={handleContentClick}>
        <div className='aside-filter__contents-box'>
          {items.map((item, index) => (
            <CheckBoxItem
              key={index}
              label={item}
              checked={selectedItems.includes(item)}
              onToggle={() => handleItemToggle(item)}
            />
          ))}
        </div>
        {showMoreVisible && <ShowMore className='filter-more'>Показать еще</ShowMore>}
      </div>
    </li>
  );
};

export default DropDown;