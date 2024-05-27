import React from 'react'
import s from './Hero.module.css';

export default function Hero() {

  return (
    
    <div className={s.hero_container}>
        <div className={s.hero_content}>
        <p className={s.title}>Amazing Discounts on Garden Products!</p>
        <button className={s.cta_button}>Check out</button>
        </div>
    </div>
  )
}