
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSection from "../../components/UI/ButtonSection";
import s from "./CategoriesPage.module.css";
import categoryStyles from '../CategoriesPage/CategoriesPage.module.css';
import { fetchCategories } from '../../redux/actions/categoriesActions';
import CategoriesCard from '../../components/CategoriesCard';


const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => { 
    
  };

  if (loading || !categories) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className={s.wrapper_container}>
      <div className={s.title_wrapper}>
      </div>
      <div className={s.buttons_wrapper}>
        <ButtonSection text="Main Page" to="/" backgroundColor={"transparent"} />
        <ButtonSection text="Categories" to="/categories" backgroundColor={"transparent"} />
      </div>
      <h2>Categories</h2>
      <CategoriesCard categories={categories} limit={5} styles={categoryStyles} onClick={handleCategoryClick} />
      </div>
    </div>
  );
};

export default CategoriesPage;
