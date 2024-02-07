import React from 'react';

interface SaleButtonProps {
  backgroundColor: string;
  color: string;
  children: React.ReactNode;
  className: string
}

const SaleButton: React.FC<SaleButtonProps> = ({ backgroundColor, color, children, className }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
};

return (
    <button className={className} style={buttonStyle}>
      {children}
    </button>
  );
};

export default SaleButton;