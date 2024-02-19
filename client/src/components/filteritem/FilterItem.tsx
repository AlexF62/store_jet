import React from 'react';
import './filteritem.scss';
import PowerSelector from '../powerselector/PowerSelector';
interface FilterItemProps {
    title: string;
    selected: boolean; 
    onClick: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ title, selected }) => (
    <div className={`filter__item-list ${selected ? 'selected' : ''}`}>
        <span className='filter__item-list__title'>{title}</span>
        <PowerSelector className='filter__item-select' />
    </div>
);

export default FilterItem;