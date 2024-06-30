import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './Favorite.module.css';
import FavDark from '../../../media/icons/favorite-hover-dark.svg';
import FavDarkLight from '../../../media/icons/favoriteLightLightLight.svg';
import FavLight from '../../../media/icons/favorite-white.svg';
import FavLightLight from '../../../media/icons/favorite-light-transparent-icon.svg';
import FavDarkDark from '../../../media/icons/favorite-transparent-night-icon.svg';
import FavGreen from '../../../media/icons/favorite-green-icon.svg';

const Favorite = ({ onClick, isFavorite, isProductDetail }) => {
  const [isHovered, setIsHovered] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode); 

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getIcon = () => {
    if (isProductDetail) {
      if (darkMode) {
        return isFavorite ? FavGreen : (isHovered ? FavDarkLight : FavLightLight);
      } else {
        return isFavorite ? FavGreen : (isHovered ? FavDark : FavDarkDark);
      }
    } else {
      return isFavorite ? FavGreen : (isHovered ? FavDark : FavLight);
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
