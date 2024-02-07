import React from 'react';

interface InputSearchProps {
  className: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ className }) => {
  return <input type="text" className={className} placeholder='Введите модель '/>;
};

export default InputSearch;