import React from 'react';
import FavDark from "../../../media/icons/favorite-night-icon.svg";
import FavLight from '../../../media/icons/favorite-light-icon.svg'


const Favorite = ({ isDarkMode }) => {
  return (
    <div>
      {isDarkMode ? (
        <img src={FavLight} alt="Favorite Icon"/>
      ) : (
        <img src={FavDark} alt="Favorite Icon" />
      )}
    </div>
  );
};

export default Favorite;
