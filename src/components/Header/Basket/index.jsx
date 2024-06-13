
// import React from 'react';
// import { ReactComponent as BasDark } from '../../../media/icons/basket-night-icon.svg';
// import { ReactComponent as BasLight } from '../../../media/icons/basket-white.svg';
// import { ReactComponent as BasketGreen } from '../../../media/icons/basket-green.svg';

// import s from './Basket.module.css';

// const Basket = ({ isDarkMode, onClick, isInBasket }) => {
//   return (
//     <div className={s.basketIcon} onClick={onClick}>
//       {isInBasket ? (
//         <BasketGreen className={s.basket} />
//       ) : (
//         isDarkMode ? (
//           <BasLight className={s.basket} />
//         ) : (
//           <BasDark className={s.basket} />
//         )
//       )}
//     </div>
//   );
// };


// import React, { useState } from 'react';
// import BasDark from '../../../media/icons/basket-hover-dark.svg';
// import BasLight from '../../../media/icons/basket-white.svg';
// import BasketGreen from '../../../media/icons/basket-green.svg';

// import s from './Basket.module.css';

// const Basket = ({ onClick, isInBasket }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const getIcon = () => {
//     if (isInBasket) {
//       return BasketGreen;
//     } else if (isHovered) {
//       return BasDark;
//     } else {
//       return BasLight;
//     }
//   };
//   return (
//     <div 
//       onClick={onClick} 
//       onMouseEnter={handleMouseEnter} 
//       onMouseLeave={handleMouseLeave} 
//       className={s.basketContainer}
//     >
//       <img
//         className={s.basket}
//         src={getIcon()}
//         alt="Basket Icon"
//       />
//     </div>
//   );
// };

// export default Basket;

import React, { useState } from 'react';
import BasDark from '../../../media/icons/basket-hover-dark.svg';
import BasLight from '../../../media/icons/basket-white.svg';
import BasketGreen from '../../../media/icons/basket-green.svg';

import s from './Basket.module.css';

const Basket = ({ onClick, isInBasket }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (isInBasket) {
      onClick(false);
    } else {
      onClick(true);
    }
  };

  
  const getIcon = () => {
    if (isInBasket) {
      return BasketGreen; 
    } else if (isHovered) {
      return BasDark;
    } else {
      return BasLight;
    }
  };

  return (
    <div 
      onClick={handleClick} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className={s.basketContainer}
      role="button" 
      tabIndex={0}
    >
      <img
        className={s.basket}
        src={getIcon()}
        alt="Basket Icon"
      />
    </div>
  );
};

export default Basket;

