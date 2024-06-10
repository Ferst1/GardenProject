import React from "react";
import s from "./SaleCards.module.css";

import ProductsCard from "../ProductsCard";

const SaleCards = () => {
  return (
    <div className={s.sale_card_wrapper}>
      <div className={s.saleCards}>
        <div className={s.cards_button}>
       <ProductsCard />
        </div>
      </div>
    </div>
  );
};

export default SaleCards;
