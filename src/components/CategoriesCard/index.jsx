

// import React from 'react';
// import s from '../CategoriesCard/CategoriesCard.module.css';
// import baseUrl from '../../instance';

// const CategoriesCard = ({ categories, limit,styles }) => {
//   const displayCategories = limit ? categories.slice(0, limit) : categories;

//   return (
//     <div className={s.categories_items}>
//       {displayCategories && displayCategories.length > 0 ? (
//         displayCategories.map(category => (
//           <div key={category.id} className={s.category_item}>
//             {category.image && (
//               <div className={s.category_content}>
//                 <img
//                   className={s.category_img}
//                   src={`${baseUrl}${category.image}`}
//                   alt={category.title}
//                 />
//                 <div className={s.category_title}>{category.title}</div>
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <div>No categories available</div>
//       )}
//     </div>
//   );
// };

// export default CategoriesCard;


import React from 'react';
import defaultStyles from '../CategoriesCard/CategoriesCard.module.css';
import baseUrl from '../../instance';

const CategoriesCard = ({ categories, limit, styles = defaultStyles }) => {
  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <div className={styles.categories_items}>
      {displayCategories && displayCategories.length > 0 ? (
        displayCategories.map(category => (
          <div key={category.id} className={styles.category_item}>
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
