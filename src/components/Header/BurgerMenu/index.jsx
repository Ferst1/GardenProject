import React from 'react'
import burgerMenuSVG from '../../../media/icons/burgermenu-dark.svg'
import s from './BurgerMenu.module.css'
const BurgerMenu
 = () => {
  return (
    <div className={s.burger_menu}>
      <img src={burgerMenuSVG} alt="Burger Menu Icon" />
        
    </div>
  )
}

export default BurgerMenu
