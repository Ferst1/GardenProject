import React from "react";
import ButtonSection from "../../components/UA/Basket/ButtonSection";
import s from "./CategoriesPage.module.css";
const CategoriesPage = () => {
  return (
    <div className="container">
      <h2>Categories</h2>
      <div className={s.buttons_wrapper}>
        <ButtonSection text="Main page" backgroundColor="transparent" />
        <ButtonSection text="Categories" backgroundColor="transparent" />
      </div>
    </div>
  );
};

export default CategoriesPage;
