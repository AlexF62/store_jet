import React, { ChangeEvent } from 'react';

interface InputSearchProps {
  className: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputSearchProps> = ({ className, placeholder, onChange }) => {
  return (
    <input 
      type="text" 
      className={className} 
      placeholder={placeholder} 
      onChange={onChange} 
    />
  );
};

export default Input;