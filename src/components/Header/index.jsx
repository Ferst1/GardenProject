import React, { useState } from "react";
import Navigation from "./Navigation";
import s from "./Header.module.css";
import Logo from "./Logo";
import Switcher from "./Switcher";
import Favorite from "./Favorite";
import Basket from "./Basket";
import BurgerMenu from "./BurgerMenu";
const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false); 

  return (
    <div className={s.header}>
      <div className={s.logoAndSwitcher}>
        <Logo />
        <Switcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </div>
      <Navigation />
      <div className={s.favoriteAndBasket}>
        <Favorite isDarkMode={isDarkMode}/>
        <Basket isDarkMode={isDarkMode}/>
        <BurgerMenu/>
      </div>
    </div>
  );
};

export default Header;
