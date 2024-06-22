
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaskLight from "../../../media/icons/basket-light-icon.svg";
import BaskDark from "../../../media/icons/basket-night-icon.svg";
import BaskDarkDark from "../../../media/icons/basket-hover-dark.svg";
import s from "./BasketHeader.module.css";

const BasketHeader = ({ isDarkMode, isBasket }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const getIcon = () => {
    if (isBasket) {
      return isDarkMode ? BaskLight : BaskDark;
    } else {
      return isHovered ? BaskDarkDark : BaskDark;
    }
  };

  const handleNavigateToBasket = () => {
    navigate('/basket');
  };

  return (
    <div
      className={s.basket}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigateToBasket}
      style={{ cursor: 'pointer' }}
    >
      <img src={getIcon()} alt="Basket Icon" className={s.basketIcon} />
    </div>
  );
};

export default BasketHeader;
