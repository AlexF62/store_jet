import React from 'react';

interface ShowMoreProps {
  className: string;
  children: React.ReactNode;
}

const ShowMore: React.FC<ShowMoreProps> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default ShowMore;