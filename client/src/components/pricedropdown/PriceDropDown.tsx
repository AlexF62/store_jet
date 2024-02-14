import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import AsideTitle from '@/UI/AsideTitle';
import { Slider } from '@mui/material';
import './pricepropdown.scss'
import FilterItem from '../filteritem/FilterItem';

interface PriceDropDownProps {
    onFilterChange: (filterType: string, value: number | number[] | string[]) => void;
}

const PriceDropDown: React.FC<PriceDropDownProps> = ({ onFilterChange }) => {
    const [checkboxesVisible, setCheckboxesVisible] = useState(true);
    const [value, setValue] = useState<number[]>([400000, 600000]);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const toggleCheckboxesVisibility = () => {
        setCheckboxesVisible(!checkboxesVisible);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        onFilterChange('price', newValue);
    };

    const handleFilterItemClick = (filter: string) => {
        const updatedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
            : [...selectedFilters, filter];
        setSelectedFilters(updatedFilters);
        onFilterChange('filterItem', updatedFilters);
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
                    <FilterItem
                        title='Мощность, л.с.'
                        onClick={() => handleFilterItemClick('Мощность, л.с.')}
                        selected={selectedFilters.includes('Мощность, л.с.')}
                    />
                    <FilterItem
                        title='Мощность двигателя, л.с.'
                        onClick={() => handleFilterItemClick('Мощность двигателя, л.с.')}
                        selected={selectedFilters.includes('Мощность двигателя, л.с.')}
                    />
                    <FilterItem
                        title='Макс. скорость'
                        onClick={() => handleFilterItemClick('Макс. скорость')}
                        selected={selectedFilters.includes('Макс. скорость')}
                    />
                </div>
            </div>
        </li>
    );
};

export default PriceDropDown;
