
import React from "react"; 
import SaleCards from "../SaleCards";
 import ButtonSection from "../UA/Basket/ButtonSection";
import s from "./SaleSection.module.css";

const SaleSection = () => {
  return (
    <div className="container">
      <section>
        <div className={s.title_wrapper}>
          <h2>Sale</h2>
          <div className={s.button_with_line}>
            <ButtonSection text="All sales" />
          </div>
        </div>
        <SaleCards />
      </section>
    </div>
  );
};

export default SaleSection;
