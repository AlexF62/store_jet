import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
interface CheckboxItemProps {
  label: string;
  checked: boolean; 
  onToggle: () => void; 
}

const CheckBoxItem: React.FC<CheckboxItemProps> = ({ label, checked, onToggle }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onToggle} size="small" />}
      label={label}
    />
  );
};

export default CheckBoxItem;