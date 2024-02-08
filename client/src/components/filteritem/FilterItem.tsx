import React from 'react';
import SelectPower from '../selectpower/SelectPower';
import './filteritem.scss'

interface FilterItemProps {
    title: string;
   }

const FilterItem: React.FC<FilterItemProps> = ({ title }) => (
    <div className="filter__item-list">
    <span className='filter__item-list__title'>{title}</span>
    <SelectPower className='filter__item-select'/>
  </div>
);

export default FilterItem;