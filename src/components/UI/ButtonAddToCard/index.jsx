import React from 'react'
import { Link } from 'react-router-dom'
import s from './ButtonAddToCard.module.css'
const ButtonAddToCard
 = ({ to, text, color, backgroundColor }) => {
  return (
    <div>
        <Link to={to} className={s.buttonAdd} style={{ color, backgroundColor }}>
      {text}
    </Link>

    </div>
  )
}

export default ButtonAddToCard

