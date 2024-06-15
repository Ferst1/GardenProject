// import React, { useEffect, useState } from 'react';
// import MuiModal from '@mui/material/Modal';
// import s from './ModalWindow.module.css';
// import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';
// import ProductsCard from '../../components/ProductsCard';
// import ButtonAddToCard from '../UI/ButtonAddToCard';

// const ModalWindow = ({ isOpen, handleClose, content, onAddToBasket }) => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setOpen(true);
//     } else {
//       const timer = setTimeout(() => setOpen(false), 700);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   if (!content || !content.product) {
//     return null;
//   }

//   return (
//     <MuiModal
//       open={isOpen}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropProps={{
//         timeout: 800,
//         className: `${s.backdrop} ${isOpen ? s.backdropOpen : ''}`,
//       }}
//     >
//       <div className={`${s.modal} ${isOpen ? s.modalOpen : ''}`}>
//         <CloseIcon
//           className={s.close}
//           onClick={handleClose}
//         />
//         <p className={s.discountHeader}>50% discount on product of the day!</p>
//         <div className={s.cardContainer}>
//           <ProductsCard product={content.product}/>
//           <ButtonAddToCard product={content.product} onAddToBasket={() => onAddToBasket(content.product)} />
//         </div>
//       </div>
//     </MuiModal>
//   );
// };

// export default ModalWindow;


// import React, { useEffect, useState } from 'react';
// import MuiModal from '@mui/material/Modal';
// import s from './ModalWindow.module.css';
// import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';
// import ProductsCard from '../../components/ProductsCard';
// import ButtonAddToCard from '../UI/ButtonAddToCard';

// const ModalWindow = ({ isOpen, handleClose, content, onAddToBasket }) => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setOpen(true);
//     } else {
//       const timer = setTimeout(() => setOpen(false), 700);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   if (!content || !content.product) {
//     return null;
//   }

//   return (
//     <MuiModal
//       open={isOpen}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropProps={{
//         timeout: 800,
//         className: `${s.backdrop} ${isOpen ? s.backdropOpen : ''}`,
//       }}
//     >
//       <div className={`${s.modal} ${isOpen ? s.modalOpen : ''}`}>
//         <CloseIcon
//           className={s.close}
//           onClick={handleClose}
//         />
//         <p className={s.discountHeader}>50% discount on product of the day!</p>
//         <div className={s.cardContainer}>
//           <ProductsCard product={content.product} showBasketIcon={false} />
//           <ButtonAddToCard product={content.product} onAddToBasket={() => onAddToBasket(content.product)} />
//         </div>
//       </div>
//     </MuiModal>
//   );
// };

// export default ModalWindow;


import React, { useEffect, useState } from 'react';
import MuiModal from '@mui/material/Modal';
import s from './ModalWindow.module.css';
import { ReactComponent as CloseIcon } from '../../media/icons/close.svg';
import ProductsCard from '../../components/ProductsCard';
import ButtonAddToCard from '../UI/ButtonAddToCard';

const ModalWindow = ({ isOpen, handleClose, content, onAddToBasket }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      const timer = setTimeout(() => setOpen(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!content || !content.product) {
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
      <div className={`${s.modal} ${isOpen ? s.modalOpen : ''}`}>
        <CloseIcon
          className={s.close}
          onClick={handleClose}
        />
        <p className={s.discountHeader}>50% discount on product of the day!</p>
        <div className={s.cardContainer}>
          <ProductsCard product={content.product} showBasketIcon={false} />
          <ButtonAddToCard product={content.product} onAddToBasket={() => onAddToBasket(content.product)} />
        </div>
      </div>
    </MuiModal>
  );
};

export default ModalWindow;
