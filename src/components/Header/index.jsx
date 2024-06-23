import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import s from './Header.module.css';
import Logo from './Logo';
import Switcher from './Switcher';
import FavoriteHeader from '../UI/FavoriteHeader';
import BasketHeader from '../UI/BasketHeader';
import BurgerMenu from './BurgerMenu';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favorites = useSelector((state) => state.products.favorites || []);
  const basket = useSelector((state) => state.basket.basket || []);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${s.header} container ${isDarkMode ? s.darkMode : ''}`}>
      <div className={s.logoAndSwitcher}>
        <Logo />
        <Switcher />
      </div>
      <Navigation darkMode={isDarkMode} />
      <div className={s.favoriteAndBasket}>
        <Link to="/favorites" className={s.favoriteLink}>
          <FavoriteHeader darkMode={isDarkMode} isFavorite={favorites.length > 0} />
          {favorites.length > 0 && <span className={s.favoriteCount}>{favorites.length}</span>}
        </Link>
        <div className={s.basketContainer}>
          <Link to="/basket" className={s.basketLink}>
            <BasketHeader darkMode={isDarkMode} hasItems={basket.length > 0} />
            {basket.length > 0 && <span className={s.basketCount}>{basket.length}</span>}
          </Link>
        </div>
        <BurgerMenu onClick={handleToggleMenu} darkMode={isDarkMode} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} darkMode={isDarkMode} />
    </div>
  );
};

export default Header;



