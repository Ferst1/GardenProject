import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonSection from "../UI/ButtonSection";
import s from "../CategoriesSection/CategoriesSection.module.css";
import categoryStyles from "../CategoriesCard/CategoriesCard.module.css";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import CategoriesCard from "../CategoriesCard";

const CategoriesSection = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading || !categories) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className={s.title_wrapper}>
        <h2>Categories</h2>
        <div className={s.button_with_line}>
          <ButtonSection
            text="All categories"
            to="/categories"
          />
        </div>
      </div>
      <CategoriesCard
        categories={categories}
        limit={4}
        styles={categoryStyles}
      />
    </div>
  );
};

export default CategoriesSection;
