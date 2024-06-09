import React from 'react';
import FavDark from "../../../media/icons/favorite-night-icon.svg";
import FavLight from '../../../media/icons/favorite-light-icon.svg';
import FavGreen from '../../../media/icons/favorite-green-icon.svg';
import s from './Favorite.module.css';

const Favorite = ({ isDarkMode, onClick, isFavorite }) => {
  return (
    <div onClick={onClick}>
      {isFavorite ? (
        <img
          className={s.favorite}
          src={FavGreen}
          alt="Favorite Icon"
        />
      ) : isDarkMode ? (
        <img
          className={s.favorite}
          src={FavLight}
          alt="Favorite Icon"
        />
      ) : (
        <img
          className={s.favorite}
          src={FavDark}
          alt="Favorite Icon"
        />
      )}
    </div>
  );
};

export default Favorite;
