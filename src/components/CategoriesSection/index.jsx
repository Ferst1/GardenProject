import React from 'react'
import ButtonSection from '../UI/ButtonSection'
import s from './CategoriesSection.module.css'
const CategoriesSection = () => {
  return (
    <div>

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