import React from "react";
import burgerMenuSVG from "../../../media/icons/burger-menu.svg";
import burgerMenuSVGLight from "../../../media/icons/burgermenu-light.svg";
import s from "./BurgerMenu.module.css";

const BurgerMenu = ({ onClick, darkMode }) => {
  const handleClick = () => {
    console.log("Clicked on BurgerMenu");
    onClick();
  };

  return (
    <div className={s.burger_menu} onClick={handleClick}>
      <img
        src={darkMode ? burgerMenuSVGLight : burgerMenuSVG}
        alt="Burger Menu Icon"
      />
    </div>
  );
};

export default BurgerMenu;
