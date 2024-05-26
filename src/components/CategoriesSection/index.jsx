import React from 'react'
import ButtonSection from '../UA/Basket/ButtonSection'
import s from './CategoriesSection.module.css'
const CategoriesSection = () => {
  return (
    <div className='container'>

<div className={s.title_wrapper}>
           <h2>Categories</h2>
          <div className={s.button_with_line}>
          <ButtonSection text="All categories" />
          </div>
        </div>
        
        
    </div>
  )
}

export default CategoriesSection