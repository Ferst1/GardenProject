import React from 'react'
import s from './DiscountForm.module.css';
import HandsImage from '../../media/images/hands-image.svg'

export default function DiscountForm() {

  return (
      <div className={s.form_container}>
        <img src={HandsImage} alt="Hands holding garden tools" className={s.form_image} />
        <h1>5% off on the first order</h1>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="tel" name="phone" placeholder="Phone number" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Get a discount</button>
        </form>
      </div>
  )
}