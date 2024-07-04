
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ButtonDiscount.module.css';
import ButtonSection from '../../UI/ButtonSection';
import { openModal } from '../../../redux/slices/modalSlice';

const ButtonDiscount = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleOpen = () => {
    if (products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = { ...products[randomIndex], discont_price: products[randomIndex].price * 0.5 };
      dispatch(openModal({ product: randomProduct }));
    }
  };

  return (
    <div>
      <ButtonSection
        text="1 day discount"
        border='none'
        className={`${s.button_discount} ${darkMode ? s.dark : ''}`}
        onClick={handleOpen}
      />
    </div>
  );
};

export default ButtonDiscount;
