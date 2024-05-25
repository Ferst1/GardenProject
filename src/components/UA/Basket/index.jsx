import React from 'react';
import BasDark from "../../../media/icons/basket-night-icon.svg";
import BasLight from '../../../media/icons/basket-light-icon.svg'
import s from '../Basket';

const Basket = ({ isDarkMode }) => {
  return (
    <div>
      {isDarkMode ? (
        <img className={s.basket} src={BasLight} alt="Favorite Icon" />
      ) : (
        <img className={s.basket} src={BasDark} alt="Favorite Icon" />
      )}
    </div>
  );
};

export default Basket;