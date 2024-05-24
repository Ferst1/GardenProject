


import React from "react";
import burgerMenuSVG from "../../../media/icons/burger-menu.svg";
import s from "./BurgerMenu.module.css";

const BurgerMenu = ({ onClick }) => {
  const handleClick = () => {
    console.log("Clicked on BurgerMenu");
    onClick();
  };

  return (
    <div className={s.burger_menu} onClick={handleClick}>
      <img src={burgerMenuSVG} alt="Burger Menu Icon" />
    </div>
  );
};

export default BurgerMenu;
