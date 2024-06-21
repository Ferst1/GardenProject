
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasketCard from "../../components/BasketCard";
import styles from "./BasketProductsPage.module.css";
import ButtonSection from "../../components/UI/ButtonSection";
import Button from "../../components/UI/Button";
import OrderDetailsCard from "../../components/OrderDetailsCard";
import { formatPriceWithComma } from "../../utils";

const BasketProductsPage = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const loading = useSelector((state) => state.basket.loading);
  const error = useSelector((state) => state.basket.error);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Basket state:", basket);
  }, [basket]);

  const handleContinueShopping = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalItems = basket.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = basket
    .reduce((acc, item) => acc + item.count * (item.discont_price || item.price), 0)
    

  return (
    <div className="container">
      <div className={styles.basket_products_page}>
        <div className={styles.title_wrapper}>
          <h3>Shopping cart</h3>
          <ButtonSection 
            to="/all_products" 
            text="Back to the store" 
             className={styles.button_section} 
          />
        </div>

        <div className={styles.product_card_wrapper}>
          <div className={styles.basket_items}>
            {basket.length === 0 ? (
              <>
                <p>Looks like you have no items in your basket currently.</p>
                <Button
                  text="Continue Shopping"
                  onClick={handleContinueShopping}
                  className={styles.button_details}
                />
              </>
            ) : (
              <ul>
                {basket.map((item, index) => (
                  <li key={index}>
                    <BasketCard product={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {basket.length > 0 && (
            <div className={styles.order_details}>
              <OrderDetailsCard totalItems={totalItems} totalPrice={formatPriceWithComma(totalPrice)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketProductsPage;
