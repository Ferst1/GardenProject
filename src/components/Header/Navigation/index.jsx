import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';
import ButtonDiscount from '../ButtonDiscount';

const Navigation = ({ darkMode }) => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <div className={`${s.navigation} ${darkMode ? s.darkMode : ''}`}>
      <div className={s.buttonDiscount}>
        <ButtonDiscount />
      </div>
      <div className={s.nav_wrapper}>
        <nav className={s.mainNavLink}>
          <NavLink exact to={"/"} className={`${s.navLink} ${activeLink === '/' ? s.active : ''}`} onClick={() => handleNavLinkClick('/')}>
            Main Page
          </NavLink>
          <NavLink to={"/categories"} className={`${s.navLink} ${activeLink === '/categories' ? s.active : ''}`} onClick={() => handleNavLinkClick('/categories')}>
            Categories
          </NavLink>
          <NavLink to={"/all_products"} className={`${s.navLink} ${activeLink === '/all_products' ? s.active : ''}`} onClick={() => handleNavLinkClick('/all_products')}>
            All Products
          </NavLink>
          <NavLink to={"/all_sales"} className={`${s.navLink} ${activeLink === '/all_sales' ? s.active : ''}`} onClick={() => handleNavLinkClick('/all_sales')}>
            All Sales
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

