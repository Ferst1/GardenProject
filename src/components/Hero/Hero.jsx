import React from 'react'
import { Link } from 'react-router-dom';
import s from './Hero.module.css';

export default function Hero() {

  return (
    <div className={s.hero_container}>
        <div className={s.hero_content}>
        <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
        <Link to="/all_sales">
        <button className={s.cta_button}>Check out</button>
        </Link>
        </div>
    </div>
  )
} 