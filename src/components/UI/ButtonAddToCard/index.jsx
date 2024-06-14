// import React from 'react';
// import s from './ButtonAddToCard.module.css';

// const ButtonAddToCard = ({ text, onClick, color, backgroundColor, borderColor }) => {
//   return (
//     <button
//       className={s.buttonAdd}
//       style={{ color, backgroundColor, borderColor }}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// export default ButtonAddToCard;


import React, { useEffect, useState } from 'react';
import s from './ButtonAddToCard.module.css';

const ButtonAddToCard = ({ product, onAddToBasket }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      const isProductInBasket = basket.some(item => item.id === product.id);
      setIsAdded(isProductInBasket);
    }
  }, [product]);

  const handleClick = () => {
    if (product) {
      onAddToBasket();
      setIsAdded(true);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <button
      className={s.buttonAdd}
      style={{
        color: isAdded ? 'black' : undefined,
        backgroundColor: isAdded ? 'white' : undefined,
        borderColor: isAdded ? 'var(--green)' : undefined
      }}
      onClick={handleClick}
    >
      {isAdded ? 'Added' : 'Add to Cart'}
    </button>
  );
};

export default ButtonAddToCard;
