'use client'
import React, { useState, ChangeEvent } from 'react';
import './select.scss';

const options = [
  { value: 'По рейтингу', label: 'По рейтингу' },
  { value: 'По цене', label: 'По цене' },
  { value: 'По модели', label: 'По модели' },
];

const Select = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <select className='select' onChange={handleSelectChange} value={selectedOption}>
      <option value="">По популярности</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
