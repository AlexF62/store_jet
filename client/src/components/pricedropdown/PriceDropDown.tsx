import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import { Slider } from '@mui/material';
import './pricepropdown.scss'
import SelectPower from '../selectpower/SelectPower';


const DropDown = () => {
  const [checkboxesVisible, setCheckboxesVisible] = useState(true);
  const [value, setValue] = useState<number[]>([400000, 600000]);

  const toggleCheckboxesVisibility = () => {
    setCheckboxesVisible(!checkboxesVisible);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); 
  };

  return (
    <li className='aside-filter__item-drop' onClick={toggleCheckboxesVisibility}>
      {checkboxesVisible ? (
        <MdKeyboardArrowDown className='aside-filter__arrow' />
      ) : (
        <MdOutlineKeyboardArrowUp className='aside-filter__arrow' />
      )}
      <AsideTitle title='Цена' className='aside-filter__item-title' />
      <div className={`aside-filter__content${checkboxesVisible ? '' : ' hidden'}`} onClick={handleContentClick}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={400000}
          max={5000000}
          size='small'
          onClick={(e) => e.stopPropagation()}
        />
        <span className='aside-filter__text'>от</span>
        <input type="text" className='aside-filter__input' value={value[0]} 
          onChange={(e) => setValue([parseInt(e.target.value), value[1]])}
        />
        <span className='aside-filter__text'>до</span>
        <input type="text" className='aside-filter__input' value={value[1]} 
          onChange={(e) => setValue([value[0], parseInt(e.target.value)])}
        />
        <div className="aside-filter__item-list">
          <div className="filter__item-list">
            <span className='filter__item-list__title'>Мощность, л.с.</span>
            <SelectPower className='filter__item-select'/>
          </div>
          <div className="filter__item-list">
            <span className='filter__item-list__title'>Мощность двигателя, л.с.</span>
            <SelectPower className='filter__item-select'/>
          </div>
          <div className="filter__item-list">
            <span className='filter__item-list__title'>Макс. скорость</span>
            <SelectPower className='filter__item-select'/>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DropDown;