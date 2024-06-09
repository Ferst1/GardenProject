
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSection from "../../components/UI/ButtonSection";
import s from "./CategoriesPage.module.css";
import categoryStyles from '../CategoriesPage/CategoriesPage.module.css';
import { fetchCategories } from '../../redux/actions/categoriesActions';
import CategoriesCard from '../../components/CategoriesCard';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    
    console.log(`Clicked category id: ${categoryId}`);
  };

  if (loading || !categories) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={s.container}>
      <div className={s.title_wrapper}>
      </div>
      <div className={s.buttons_wrapper}>
        <Link to="/">
        <ButtonSection text="Main Page" backgroundColor={"transparent"} withLine={true}/>
       </Link>
       <Link to="/categories">
        <ButtonSection text="Categories" backgroundColor={"transparent"} withLine={false}/>
      </Link>
      </div>
      <h2>Categories</h2>
      <CategoriesCard categories={categories} limit={5} styles={categoryStyles} onClick={handleCategoryClick} />
    </div>
  );
};

export default CategoriesPage;
