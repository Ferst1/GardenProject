
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../../components/ModalWindow';
import ImageModal from '../../components/ImageModal';
import { closeModal } from '../../redux/actions/modalActions';
import { addToBasket } from '../../redux/slices/basketSlice';

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
    isOpen && (
      <div>
        {content && content.image ? (
          <ImageModal
            isOpen={isOpen}
            handleClose={handleClose}
            imageUrl={content.image}
          />
        ) : (
          <ModalWindow
            isOpen={isOpen}
            handleClose={handleClose}
            content={content}
            onAddToBasket={handleAddToBasket}
          />
        )}
      </div>
    )
  );
};

export default ModalWindowContainer;
