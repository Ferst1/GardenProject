import React from 'react'
import Hero from '../../components/Hero/Hero'
import DiscountForm from '../../components/DiscountForm'
import SaleSection from '../../components/SaleSection'
import CategoriesSection from '../../components/CategoriesSection'

const index = () => {
  return (
    
    <div>
      <Hero/>
      
      <div className='container'>   
        <CategoriesSection/>
        <DiscountForm/>
        <SaleSection/>
      </div>
    </div>
  )
}

export default index