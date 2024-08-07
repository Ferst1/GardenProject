import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import Hero from '../../components/Hero/Hero';
import DiscountAndOrderForm from '../../components/DiscountAndOrderForm';
import SaleSection from '../../components/SaleSection';
import CategoriesSection from '../../components/CategoriesSection';
import { fetchCategories } from '../../redux/slices/categoriesSlice'; 

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <div className='container'>   
        <CategoriesSection />
        <DiscountAndOrderForm />
        <SaleSection />
      </div>
    </div>
  );
}

export default MainPage;
