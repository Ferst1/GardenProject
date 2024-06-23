
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaskLight from "../../../media/icons/basket-light-icon.svg";
import BaskDark from "../../../media/icons/basket-night-icon.svg";
import BaskDarkDark from "../../../media/icons/basket-hover-dark.svg";
import BaskLightLight from "../../../media/icons/basketLightLightLight.svg";
import s from "./BasketHeader.module.css";

const BasketHeader = ({ darkMode, isBasket }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [currentIcon, setCurrentIcon] = useState(null);

  useEffect(() => {
    if (isBasket) {
        if (darkMode) {
            setCurrentIcon(isHovered ? BaskLightLight : BaskLight);
        } else {
            setCurrentIcon(isHovered ? BaskDarkDark : BaskDark);
        }
    } else {
        if (darkMode) {
            setCurrentIcon(isHovered ? BaskLightLight : BaskLight);
        } else {
            setCurrentIcon(isHovered ? BaskDarkDark : BaskDark);
        }
    }
}, [darkMode, isBasket, isHovered]);

  const handleNavigateToBasket = () => {
    navigate('/basket');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={s.basket}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleNavigateToBasket}
      style={{ cursor: 'pointer' }}
    >
      <img 
        src={currentIcon} 
        alt="Basket Icon" 
        className={s.basketIcon} 
      />
    </div>
  );
};

export default BasketHeader;
