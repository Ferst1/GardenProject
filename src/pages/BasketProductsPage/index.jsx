// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import BasketCard from "../../components/BasketCard";
// import styles from "./BasketProductsPage.module.css";
// import ButtonSection from "../../components/UI/ButtonSection";
// import Button from "../../components/UI/Button"; 
// import OrderDetailsCard from "../../components/OrderDetailsCard";

// const BasketProductsPage = () => {
//   const basket = useSelector((state) => state.basket.basket);
//   const navigate = useNavigate(); 

//   const handleContinueShopping = () => {
//     navigate(-1); 
//   };

//   const totalItems = basket.reduce((acc, item) => acc + item.count, 0);
//   const totalPrice = basket.reduce((acc, item) => acc + (item.count * (item.discont_price || item.price)), 0).toFixed(2);

//   return (
//     <div className="container">
//       <div className={styles.basket_products_page}>
//         <div className={styles.title_wrapper}>
//           <h3>Shopping cart</h3>
//           <ButtonSection to="/all_products" text="Back to the store" />
//         </div>
        
//         <div className={styles.product_card_wrapper}>
//           <div className={styles.basket_items}>
//             {basket.length === 0 ? (
//               <>
//                 <p>Looks like you have no items in your basket currently.</p>
//                 <Button 
//                   text="Continue Shopping"
//                   onClick={handleContinueShopping}
//                 />
//               </>
//             ) : (
//               <ul>
//                 {basket.map((item, index) => (
//                   <li key={index}>
//                     <BasketCard product={item} />
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
          
//           <div className={styles.order_details}>
//             <OrderDetailsCard totalItems={totalItems} totalPrice={totalPrice} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasketProductsPage;




import React from "react";
import { useSelector } from "react-redux";
import styles from "./BasketProductsPage.module.css";
import ButtonSection from "../../components/UI/ButtonSection";
import OrderDetailsCard from "../../components/OrderDetailsCard";
import BasketCard from "../../components/BasketCard"; // компонент для отображения товаров в корзине

const BasketProductsPage = () => {
  const basket = useSelector((state) => state.basket.basket);

  return (
    <div className="container">
      <div className={styles.basket_products_page}>
        <div className={styles.title_wrapper}>
          <h3>Shopping cart</h3>
          <ButtonSection to="/all_products" text="Back to the store" />
        </div>
        {basket.length > 0 ? (
          <div className={styles.basket_items}>
            {basket.map((item, index) => (
              <BasketCard key={index} product={item} />
            ))}
          </div>
        ) : (
          <p>Looks like you have no items in your basket currently.</p>
        )}
        <OrderDetailsCard />
      </div>
    </div>
  );
};

export default BasketProductsPage;
