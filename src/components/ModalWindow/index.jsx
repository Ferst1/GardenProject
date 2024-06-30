import React, { useEffect, useState } from 'react';
import MuiModal from '@mui/material/Modal';
import s from './ModalWindow.module.css';
import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';
import ProductsCard from '../../components/ProductsCard';
import ButtonAddToCard from '../UI/ButtonAddToCard';
import ModalWindowContent from '../ModalWindowContent';
import { useSelector } from 'react-redux';

const ModalWindow = ({ isOpen, handleClose, content }) => {
  const basket = useSelector((state) => state.basket.basket);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (content && content.product) {
      setIsAdded(basket.some(item => item.id === content.product.id));
    }
  }, [basket, content]);

  const handleAddToBasket = (product) => {
    setIsAdded(true);
    handleClose();
  };

  if (!content) {
    return null;
  }

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
      <div className={s.modal_container}>
        <div className={`${s.modal} ${isOpen ? s.modalOpen : ''}`}>
          <CloseIcon className={s.close} onClick={handleClose} />
          {content.type === 'CONFIRMATION' ? (
            <ModalWindowContent />
          ) : (
            <>
              <p className={s.discountHeader}>50% discount on product of the day!</p>
              <div className={s.cardContainer}>
                <ProductsCard 
                  product={content.product} 
                  showBasketIcon={false}  
                  style={{ border: 'none', width: '100%' }}
                  disableDarkMode={true} 
                />
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
      </div>
    </MuiModal>
  );
};

export default ModalWindow;
