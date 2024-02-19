import React from 'react';
interface SaleButtonProps {
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SaleButton: React.FC<SaleButtonProps> = ({
  backgroundColor = 'transparent', 
  color = '#bdbec2', 
  children,
  className
}) => {
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