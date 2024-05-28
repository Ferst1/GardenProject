
import React, { useRef } from 'react';
import s from './ButtonDiscount.module.css';
import SaleModal from '../../Hero/SaleModal';

const ButtonDiscount = () => {
  const saleModalRef = useRef();

  const handleOpen = () => {
    if (saleModalRef.current) {
      saleModalRef.current.openModal();
    }
  };

  return (
    <div>
      <button className={s.buttonDiscount} onClick={handleOpen}>
        1 day discount!
      </button>
      <SaleModal ref={saleModalRef} />
    </div>
  );
};

export default ButtonDiscount;

