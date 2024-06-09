import React from 'react';
import BasDark from "../../../media/icons/basket-night-icon.svg";
import BasLight from '../../../media/icons/basket-light-icon.svg';
import s from './Basket.module.css'; 

const Basket = ({ isDarkMode }) => {
  return (
    <div>
      {isDarkMode ? (
        <img className={s.basket} src={BasLight} alt="Light Mode Basket Icon" />
      ) : (
        <img className={s.basket} src={BasDark} alt="Dark Mode Basket Icon" />
      )}
    </div>
  );
};

export default Basket;