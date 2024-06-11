



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import Navigation from "./Navigation";
// import s from "./Header.module.css";
// import Logo from "./Logo";
// import Switcher from "./Switcher";
// import Favorite from "./Favorite";
// import Basket from "../Header/Basket";
// import BurgerMenu from "./BurgerMenu";
// import MobileMenu from "../MobileMenu";

// const Header = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const favorites = useSelector((state) => state.products.favorites || []);
//   const basket = useSelector((state) => state.basket.basket || []);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className={`${s.header} container`}>
//       <div className={s.logoAndSwitcher}>
//         <Logo />
//         <Switcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//       </div>
//       <Navigation />
//       <div className={s.favoriteAndBasket}>
//         <Link to="/favorites" className={s.favoriteLink}>
//           <Favorite isDarkMode={isDarkMode} />
//           {favorites.length > 0 && (
//             <span className={s.favoriteCount}>{favorites.length}</span>
//           )}
//         </Link>
//         <Link to="/basket" className={s.basketLink}>
//           <Basket isDarkMode={isDarkMode} hasItems={basket.length > 0} />
//           {basket.length > 0 && (
//             <span className={s.basketCount}>{basket.length}</span>
//           )}
//         </Link>
//         <BurgerMenu onClick={handleToggleMenu} />
//       </div>
//       <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
//     </div>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navigation from "./Navigation";
import s from "./Header.module.css";
import Logo from "./Logo";
import Switcher from "./Switcher";
import Favorite from "./Favorite";
import Basket from "../Header/Basket";
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
        <Link to="/basket" className={s.basketLink}>
          <div className={s.basketContainer}>
            <Basket isDarkMode={isDarkMode} hasItems={basket.length > 0} />
            {basket.length > 0 && (
              <span className={s.basketCount}>{basket.length}</span>
            )}
          </div>
        </Link>
        <BurgerMenu onClick={handleToggleMenu} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </div>
  );
};

export default Header;
