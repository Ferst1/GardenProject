// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { incrementProductCount, decrementProductCount, removeFromBasket } from '../../redux/basketReducer';
// import styles from './BasketCard.module.css';
// import { baseUrl } from '../../instance';
// import { ReactComponent as CloseIcon } from '../../media/icons/x-burgermenu-dark.svg';

// const BasketCard = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch(incrementProductCount(product.id));
//   };

//   const handleDecrement = () => {
//     dispatch(decrementProductCount(product.id));
//   };

//   const handleRemove = () => {
//     dispatch(removeFromBasket(product.id));
//   };

//   let discount = null;
//   if (product.price && product.discont_price) {
//     discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
//   }

//   const totalPrice = product.discont_price ? product.discont_price * product.count : product.price * product.count;

//   return (
//     <div className={styles.basket_card}>
//       <button className={styles.remove_button} onClick={handleRemove}>
//         <CloseIcon />
//       </button>
//       <img
//         src={`${baseUrl}${product.image}`}
//         alt={product.title}
//         className={styles.product_image}
//       />
//       <div className={styles.product_details}>
//         <h5>{product.title}</h5>
//         <div className={styles.count_wrapper}>
//           <div className={styles.controls_and_cart}>
//             <div className={styles.count_controls}>
//               <button onClick={handleDecrement}>-</button>
//               <span>{product.count ?? 0}</span>
//               <button onClick={handleIncrement}>+</button>
//             </div>
//             <div className={styles.price_container}>
//               <div className={styles.product_price}>
//                 ${totalPrice.toFixed(2)}
//               </div>
//               {product.discont_price && (
//                 <div className={styles.discont_price}>
//                   ${product.discont_price.toFixed(2)}
//                 </div>
//               )}
//               {discount !== null && (
//                 <div className={styles.discont_tag}>{`-${discount}%`}</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasketCard;



import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementProductCount, decrementProductCount, removeFromBasket } from '../../redux/basketReducer';
import styles from './BasketCard.module.css';
import { baseUrl } from '../../instance';
import { ReactComponent as CloseIcon } from '../../media/icons/x-burgermenu-dark.svg';
import ButtonCounter from '../UI/ButtonCounter'; // Импортируем новый компонент

const BasketCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementProductCount(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementProductCount(product.id));
  };

  const handleRemove = () => {
    dispatch(removeFromBasket(product.id));
  };

  let discount = null;
  if (product.price && product.discont_price) {
    discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
  }

  const totalPrice = product.discont_price ? product.discont_price * product.count : product.price * product.count;

  return (
    <div className={styles.basket_card}>
      <button className={styles.remove_button} onClick={handleRemove}>
        <CloseIcon />
      </button>
      <img
        src={`${baseUrl}${product.image}`}
        alt={product.title}
        className={styles.product_image}
      />
      <div className={styles.product_details}>
        <h5>{product.title}</h5>
        <div className={styles.count_wrapper}>
          <div className={styles.controls_and_cart}>
            <ButtonCounter 
              productCount={product.count ?? 0}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <div className={styles.price_container}>
              <div className={styles.product_price}>
                ${totalPrice.toFixed(2)}
              </div>
              {product.discont_price && (
                <div className={styles.discont_price}>
                  ${product.discont_price.toFixed(2)}
                </div>
              )}
              {discount !== null && (
                <div className={styles.discont_tag}>{`-${discount}%`}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
