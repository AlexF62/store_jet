import React, { ChangeEvent, useState } from 'react';

const options = [
  { value: 90, label: 90 },
  { value: 130, label: 130 },
  { value: 154, label: 154 },
  { value: 230, label: 230 },
  { value: 300, label: 300 },
];

const SelectPrice = ({ className }: { className: string }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <select className={className} onChange={handleSelectChange} value={selectedOption}>
      <option>90</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectPrice;