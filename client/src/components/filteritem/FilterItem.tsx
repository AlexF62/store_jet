import React from 'react';
import './filteritem.scss'
import PowerSelector from '../selectpower/PowerSelector';

interface FilterItemProps {
    title: string;
   }

const FilterItem: React.FC<FilterItemProps> = ({ title }) => (
    <div className="filter__item-list">
    <span className='filter__item-list__title'>{title}</span>
    <PowerSelector className='filter__item-select'/>
  </div>
);

export default FilterItem;