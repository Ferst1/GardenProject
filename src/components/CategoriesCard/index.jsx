

import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultStyles from '../CategoriesCard/CategoriesCard.module.css';
import baseUrl from '../../instance';

const CategoriesCard = ({ categories, limit, styles = defaultStyles }) => {
  const navigate = useNavigate();
  const displayCategories = limit ? categories.slice(0, limit) : categories;
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };


  return (
    <div className={styles.categories_items}>
      {displayCategories && displayCategories.length > 0 ? (
        displayCategories.map(category => (
          <div key={category.id} className={styles.category_item} onClick={() => handleCategoryClick(category.id)}>
            {category.image && (
              <div className={styles.category_content}>
                <img
                  className={styles.category_img}
                  src={`${baseUrl}${category.image}`}
                  alt={category.title}
                />
                <div className={styles.category_title}>{category.title}</div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No categories available</div>
      )}
    </div>
  );
};

export default CategoriesCard;
