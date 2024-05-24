
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./MobileMenu.module.css";
import Close from "../../media/icons/close.svg";
import ButtonDiscount from "../../components/Header/ButtonDiscount";
const MobileMenu = ({ isMenuOpen, handleToggleMenu, className,showButtonDiscount }) => {
  return (
    <div className={`${s.mobileMenu} ${className} ${isMenuOpen ? s.open : ""}`}>
      <img
        className={s.close}
        src={Close}
        alt="Close Icon"
        onClick={handleToggleMenu}
      />
      <NavLink to="/main_page" className={s.link} onClick={handleToggleMenu}>
        Main Page
      </NavLink>
      <NavLink to="/categories" className={s.link} onClick={handleToggleMenu}>
        Categories
      </NavLink>
      <NavLink to="/all_products" className={s.link} onClick={handleToggleMenu}>
        All Products
      </NavLink>
      <NavLink to="/all_sales" className={s.link} onClick={handleToggleMenu}>
        All Sales
      </NavLink>

      {showButtonDiscount && <ButtonDiscount />}
    </div>
  );
};

export default MobileMenu;
