'use client'
import React, { useState } from 'react';
import './select.scss'

const options = [
    { value: 'По рейтингу', label: 'По рейтингу' },
    { value: 'По цене', label: 'По цене' },
    { value: 'По модели', label: 'По модели' },
  ];

const Select = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };

  return <select className='select' onChange={handleSelectChange} value={selectedOption}>
  <option value="">
  По полулярности
  </option>
  {options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
      };

export default Select;