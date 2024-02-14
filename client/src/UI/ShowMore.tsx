import React from 'react';
interface ShowMoreProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ShowMore: React.FC<ShowMoreProps> = ({ className, children, onClick }) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};

export default ShowMore;