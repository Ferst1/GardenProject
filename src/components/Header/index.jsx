import React from "react";
import Navigation from "./Navigation";
import s from "./Header.module.css";
import Logo from "./Logo";
import Switcher from "./Switcher";
import Favorite from "./Favorite";
import Basket from "./Basket";
const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Switcher />
      <Navigation />
      <Favorite />
      <Basket />
    </div>
  );
};

export default Header;
