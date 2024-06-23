import React from "react";
import { NavLink } from "react-router-dom";
import s from "./MobileMenu.module.css";
import Close from "../../media/icons/x-burgermenu-dark.svg";
import CloseWhite from "../../media/icons/x-burgermenu-light.svg"; 

import ButtonDiscount from "../../components/Header/ButtonDiscount";

const MobileMenu = ({ isMenuOpen, handleToggleMenu, className, darkMode }) => {
  const closeIcon = darkMode ? CloseWhite : Close;

  return (
    <div className={`${s.mobileMenu} ${className} ${isMenuOpen ? s.open : ""} ${darkMode ? s.darkMode : ""}`}>
      <img
        className={s.close}
        src={closeIcon}
        alt="Close Icon"
        onClick={handleToggleMenu}
      />
      <div className={s.prob}></div>
      <NavLink to="/" className={`${s.link} ${darkMode ? s.darkMode : ""}`} onClick={handleToggleMenu}>
        Main Page
      </NavLink>
      <NavLink to="/categories" className={`${s.link} ${darkMode ? s.darkMode : ""}`} onClick={handleToggleMenu}>
        Categories
      </NavLink>
      <NavLink to="/all_products" className={`${s.link} ${darkMode ? s.darkMode : ""}`} onClick={handleToggleMenu}>
        All Products
      </NavLink>
      <NavLink to="/all_sales" className={`${s.link} ${darkMode ? s.darkMode : ""}`} onClick={handleToggleMenu}>
        All Sales
      </NavLink>

      <ButtonDiscount className={s.button_discount}/>
    </div>
  );
};

export default MobileMenu;
