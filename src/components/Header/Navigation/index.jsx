import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';
import ButtonDiscount from '../ButtonDiscount';

const Navigation = ({ darkMode }) => {
  return (
    <div className='container'>
    <div className={`${s.navigation} ${darkMode ? s.darkMode : ''}`}>
      <div className={s.buttonDiscount}>
        <ButtonDiscount />
      </div>
      <div className={s.nav_wrapper}>
        <nav className={s.mainNavLink}>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.active}
          >
            Main Page
          </NavLink>
          <NavLink
            to="/categories"
            className={s.navLink}
            activeClassName={s.active}
          >
            Categories
          </NavLink>
          <NavLink
            to="/all_products"
            className={s.navLink}
            activeClassName={s.active}
          >
            All Products
          </NavLink>
          <NavLink
            to="/all_sales"
            className={s.navLink}
            activeClassName={s.active}
          >
            All Sales
          </NavLink>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Navigation;
