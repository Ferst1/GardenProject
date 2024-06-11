
import React from 'react';
import { ReactComponent as BasDark } from '../../../media/icons/basket-night-icon.svg';
import { ReactComponent as BasLight } from '../../../media/icons/basket-white.svg';
import { ReactComponent as BasketGreen } from '../../../media/icons/basket-green.svg';

import s from './Basket.module.css';

const Basket = ({ isDarkMode, onClick, isInBasket }) => {
  return (
    <div className={s.basketIcon} onClick={onClick}>
      {isInBasket ? (
        <BasketGreen className={s.basket} />
      ) : (
        isDarkMode ? (
          <BasLight className={s.basket} />
        ) : (
          <BasDark className={s.basket} />
        )
      )}
    </div>
  );
};

export default Basket;
