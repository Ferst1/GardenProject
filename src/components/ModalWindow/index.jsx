
import React, { useEffect, useState } from 'react';
import MuiModal from '@mui/material/Modal';
import s from './ModalWindow.module.css';
import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';
import ProductsCard from '../../components/ProductsCard';
import ButtonAddToCard from '../UI/ButtonAddToCard';
import ModalWindowContent from '../ModalWindowContent';
import { useSelector } from 'react-redux';

const ModalWindow = ({ isOpen, handleClose, content, onAddToBasket }) => {
  const basket = useSelector((state) => state.basket.basket);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (content && content.product) {
      const isProductInBasket = basket.some(item => item.id === content.product.id);
      setIsAdded(isProductInBasket);
    }
  }, [basket, content]);

  if (!content) {
    return null;
  }

  const handleAddToBasket = (product) => {
    onAddToBasket(product);
    setIsAdded(true);
  };

  const modalCardStyles = {
      border:'none',
    borderRadius: '12px',
    width: '484px',
    height: '422px',
  };

  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 800,
        className: `${s.backdrop} ${isOpen ? s.backdropOpen : ''}`,
      }}
    >
      <div className={`${s.modal} ${isOpen ? s.modalOpen : ''}`}>
        <CloseIcon
          className={s.close}
          onClick={handleClose}
        />
        {content.type === 'CONFIRMATION' ? (
          <ModalWindowContent />
        ) : (
          <>
            <p className={s.discountHeader}>50% discount on product of the day!</p>
            <div className={s.cardContainer}>
              <ProductsCard product={content.product} showBasketIcon={false} style={modalCardStyles} />
            </div>
            <div className={s.buttonContainer}>
              <ButtonAddToCard
                product={content.product}
                onAddToBasket={() => handleAddToBasket(content.product)}
                className={`${s.buttonAddModal}`}
              />
            </div>
          </>
        )}
      </div>
    </MuiModal>
  );
};

export default ModalWindow;
