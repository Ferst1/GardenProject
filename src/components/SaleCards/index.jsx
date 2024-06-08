import React from "react";
import s from "./SaleCards.module.css";
import Basket from "../Header/Basket";
import Favorite from "../Header/Favorite";

const SaleCards = () => {
  return (
    <div className={s.sale_card_wrapper}>
      <div className={s.saleCards}>
        <div className={s.cards_button}>
        <Basket />
        <Favorite />
        </div>
      </div>
    </div>
  );
};

export default SaleCards;
