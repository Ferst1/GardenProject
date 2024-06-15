
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navigation from "./Navigation";
import s from "./Header.module.css";
import Logo from "./Logo";
import Switcher from "./Switcher";
import Favorite from "../UI/FavoriteHeader";
import Basket from "../UI/BasketHeader";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favorites = useSelector((state) => state.products.favorites || []);
  const basket = useSelector((state) => state.basket.basket || []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleBasketClick = () => {
  //   window.location.href = "/basket";
  // };

  return (
    <div className={`${s.header} container`}>
      <div className={s.logoAndSwitcher}>
        <Logo />
        <Switcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <Navigation />
      <div className={s.favoriteAndBasket}>
        <Link to="/favorites" className={s.favoriteLink}>
          <Favorite isDarkMode={isDarkMode} />
          {favorites.length > 0 && (
            <span className={s.favoriteCount}>{favorites.length}</span>
          )}
        </Link>
        <div className={s.basketContainer} >
          <Link to="/basket">
          <Basket isDarkMode={isDarkMode} hasItems={basket.length > 0}/>
          {basket.length > 0 && (
            <span className={s.basketCount}>{basket.length}</span>
          )}
          </Link>
        </div>
        <BurgerMenu onClick={handleToggleMenu} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </div>
  );
};

export default Header;
