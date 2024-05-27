import React from 'react'
import s from './Hero.module.css';

export default function Hero() {

  return (
    
    <div className={s.hero_container}>
        <div className={s.hero_content}>
        <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
        <button className={s.cta_button}>Check out</button>
        </div>
    </div>
  )
}