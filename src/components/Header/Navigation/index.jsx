import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';
import ButtonDiscount from '../ButtonDiscount';

const Navigation = ({ darkMode }) => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? `${s.navLink} ${s.active}` : s.navLink;
  };

  return (
    <div className={`${s.navigation} ${darkMode ? s.darkMode : ''}`}>
      <div className={s.buttonDiscount}>
        <ButtonDiscount />
      </div>
      <div className={s.nav_wrapper}>
        <nav className={s.mainNavLink}>
          <Link
            to="/"
            className={getLinkClass('/')}
          >
            Main Page
          </Link>
          <Link
            to="/categories"
            className={getLinkClass('/categories')}
          >
            Categories
          </Link>
          <Link
            to="/all_products"
            className={getLinkClass('/all_products')}
          >
            All Products
          </Link>
          <Link
            to="/all_sales"
            className={getLinkClass('/all_sales')}
          >
            All Sales
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
