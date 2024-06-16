

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ButtonAddToCard.module.css';
import { addToBasket } from '../../../redux/basketReducer';

const ButtonAddToCard = ({ product, onAddToBasket,className }) => {
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
      dispatch(addToBasket(product));
      setIsAdded(true);
      onAddToBasket && onAddToBasket();
    }
  };

  if (!product) {
    return null;
  }

  return (
    <button
      className={`${s.buttonAdd} ${isAdded ? s.added : ''}`}
      onClick={handleClick}
    >
      {isAdded ? 'Added' : 'Add to Cart'}
    </button>
  );
};

export default ButtonAddToCard;
