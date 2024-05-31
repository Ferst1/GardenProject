import React from 'react';
import s from '../CategoriesCard/CategoriesCard.module.css';
import baseUrl from '../../instance'; 

const CategoriesCard = ({ categories }) => {
  const firstFourCategories = categories.slice(0, 4);

  return (
    <div className={s.categories_items}>
      {firstFourCategories && firstFourCategories.length > 0 ? (
        firstFourCategories.map(category => (
          <div key={category.id} className={s.category_item}>
            {category.image && (
              <div className={s.category_content}>
                <img
                  className={s.category_img}
                  src={`${baseUrl}${category.image}`} 
                  alt={category.title}
                />
                <div className={s.category_title}>{category.title}</div>
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




