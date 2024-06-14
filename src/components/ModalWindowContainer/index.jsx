import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../../components/ModalWindow';
import { closeModal } from '../../redux/actions/modalActions';
import { addToBasket } from '../../redux/basketReducer';

const ModalWindowContainer = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleAddToBasket = (product) => {
    dispatch(addToBasket({ ...product, count: 1 }));
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket.push({ ...product, count: 1 });
    localStorage.setItem('basket', JSON.stringify(basket));
  };

  return (
    <ModalWindow 
      isOpen={isOpen} 
      handleClose={handleClose} 
      content={content} 
      onAddToBasket={handleAddToBasket}
    />
  );
};

export default ModalWindowContainer;
