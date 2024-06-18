import React from 'react'
import Favorites from '../../components/Favorites'
import s from './FavoritesPage.module.css'
const FavoritesPage = () => {
  return (
    <div className="container">
      <div className={s.favorites_wrapper}>
      <h2>Favorites</h2>
      <Favorites />
      </div>
    </div>
  )
}

export default FavoritesPage