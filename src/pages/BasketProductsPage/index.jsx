import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "../../components/BasketCard";
import styles from "./BasketProductsPage.module.css";
import ButtonSection from "../../components/UI/ButtonSection";

const BasketProductsPage = () => {
  const basket = useSelector((state) => state.basket.basket);

  return (
    <div className={styles.basket_products_page}>
      <div className={styles.title_wrapper}>
        <h2>Shopping cart</h2>
        <ButtonSection to="/all_products" text="Back to the store" />
      </div>
      {basket.length === 0 ? (
        <p>Looks like you have no items in your basket currently.</p>
        
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
  );
};

export default BasketProductsPage;
