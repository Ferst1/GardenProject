import React, { useState } from 'react';
import FavDark from "../../../media/icons/favorite-hover-dark.svg";
import FavLight from '../../../media/icons/favorite-white.svg';
import FavGreen from '../../../media/icons/favorite-green-icon.svg';
import s from './Favorite.module.css';

const Favorite = ({ onClick, isFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getIcon = () => {
    if (isFavorite) {
      return FavGreen;
    } else if (isHovered) {
      return FavDark;
    } else {
      return FavLight;
    }
  };

  return (
    <div 
      onClick={onClick} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className={s.favoriteIcon}
    >
      <img
        className={s.favorite}
        src={getIcon()}
        alt="Favorite Icon"
      />
    </div>
  );
};

export default Favorite;
