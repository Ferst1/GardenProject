import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import ModalWindow from '../../ModalWindow';

const SaleModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useImperativeHandle(ref, () => ({
    openModal: handleOpen
  }));

  return (
    <div>
      <ModalWindow
        isOpen={isOpen}
        handleClose={handleClose}
        title="Congratulations!"
        paragraph1="Your order has been successfully placed on the website."
        paragraph2="A manager will contact you shortly to confirm your order."
      />
    </div>
  );
});

export default SaleModal;
