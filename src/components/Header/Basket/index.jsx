
import React, { useState } from 'react';
import BasDark from '../../../media/icons/basket-hover-dark.svg';
import BasLight from '../../../media/icons/basket-white.svg';
import BasketGreen from '../../../media/icons/basket-green.svg';
import s from './Basket.module.css';

const Basket = ({ onClick, isInBasket }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick();
  };

  const getIcon = () => {
    if (isInBasket) {
      return BasketGreen;
    } else if (isHovered) {
      return BasDark;
    } else {
      return BasLight;
    }
  };

  return (
    <div 
      onClick={handleClick} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className={s.basketContainer}
      role="button" 
      tabIndex={0}
    >
      <img
        className={s.basket}
        src={getIcon()}
        alt="Basket Icon"
      />
    </div>
  );
};

export default Basket;
