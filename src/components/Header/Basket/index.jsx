import React from 'react';
import BasDark from "../../../media/icons/basket-night-icon.svg";
import BasLight from '../../../media/icons/basket-light-icon.svg'


const Basket = ({ isDarkMode }) => {
  return (
    <div>
      {isDarkMode ? (
        <img src={BasLight} alt="Favorite Icon" />
      ) : (
        <img src={BasDark} alt="Favorite Icon" />
      )}
    </div>
  );
};

export default Basket;