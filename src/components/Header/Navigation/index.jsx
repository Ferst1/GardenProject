import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";
import ButtonDiscount from "../ButtonDiscount";

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <ButtonDiscount />
    <nav className={s.mainNavLink}>
      
      <NavLink to={"/main_page"}>Main Page</NavLink>

      <NavLink to={"/categories"}>Categories</NavLink>

      <NavLink to={"/all_products"}>All products</NavLink>

      <NavLink className={s.allSalesLink} to={"/all_sales"}>
        All sales
      </NavLink>
    </nav>
    </div>
  );
};

export default Navigation;
