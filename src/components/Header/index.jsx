

import React, { useState } from "react";
import Navigation from "./Navigation";
import s from "./Header.module.css";
import Logo from "./Logo";
import Switcher from "./Switcher";
import Favorite from "./Favorite";
import Basket from "../Header/Basket";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${s.header} container`}>
      <div className={s.logoAndSwitcher}>
        <Logo />
        <Switcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <Navigation />
      <div className={s.favoriteAndBasket}>
        <Favorite isDarkMode={isDarkMode} />
        <Basket isDarkMode={isDarkMode} />
        <BurgerMenu onClick={handleToggleMenu} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </div>
  );
};

export default Header;
