import { blue } from '@mui/material/colors';
import React, { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

interface FavoriteProps {
  className?: string;
}

const Favorite: React.FC<FavoriteProps> = ({ className }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button className={className} onClick={handleClick}>
      {isFavorite ? <MdFavorite size={24} color='blue'/> : <MdFavoriteBorder size={24}  />}
    </button>
  );
};

export default Favorite;
