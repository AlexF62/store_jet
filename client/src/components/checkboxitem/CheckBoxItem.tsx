import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

interface CheckboxItemProps {
  label: string;
}

const CheckBoxItem: React.FC<CheckboxItemProps> = ({ label }) => {
  return (
    <FormControlLabel
      control={<Checkbox size="small" />}
      label={label}
    />
  );
};

export default CheckBoxItem;
