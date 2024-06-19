

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ButtonAddToCard.module.css';
import { addToBasket, removeFromBasket } from '../../../redux/basketReducer';

const ButtonAddToCard = ({ product, onAddToBasket, className }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const isProductInBasket = basket.some(item => item.id === product.id);
      setIsAdded(isProductInBasket);
    }
  }, [basket, product]);

  const handleClick = () => {
    if (product) {
      if (isAdded) {
        dispatch(removeFromBasket(product.id));
        setIsAdded(false);
      } else {
        dispatch(addToBasket(product));
        setIsAdded(true);
        onAddToBasket && onAddToBasket();
      }
    }
  };

  if (!product) {
    return null;
  }

  return (
    <button
      className={`${s.buttonAdd} ${isAdded ? s.added : ''} ${className}`}
      onClick={handleClick}
    >
      {isAdded ? 'Added' : 'Add to Cart'}
    </button>
  );
};

export default ButtonAddToCard;
