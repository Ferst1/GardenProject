


import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";
import ButtonDiscount from "../ButtonDiscount";

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <div className={s.buttonDiscount}>
        <ButtonDiscount />
      </div>
      <div className={s.nav_wrapper}>
        <nav className={s.mainNavLink}>
          <NavLink to={"/main_page"} className={s.navLink}>
            Main Page
          </NavLink>
          <NavLink to={"/categories"} className={s.navLink}>
            Categories
          </NavLink>
          <NavLink to={"/all_products"} className={s.navLink}>
            All products
          </NavLink>
          <NavLink to={"/all_sales"} className={s.navLink}>
            All sales
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
