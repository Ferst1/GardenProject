import React from 'react'
import Navigation from './Navigation'
import s from './Header.module.css'
const Header = () => {
  return (
    <div className={s.header}>
      <Navigation />
    </div>
  )
}

export default Header