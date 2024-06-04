import React from 'react';
import baseUrl from '../../instance';
import styles from './AllProducts.module.css';

const AllProducts = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className={styles.product_item}>
          {product.image ? (
            <div className={styles.category_content}>
              <img
                className={styles.category_img}
                src={`${baseUrl}${product.image}`}
                alt={product.title}
              />
              <div className={styles.product_title}>{product.title}</div>
            </div>
          ) : (
            <div className={styles.category_content}>
              <div className={styles.product_title}>{product.title}</div>
              
            </div>
          )}
       

        </div>
      ))}
    </div>
  );
};

export default AllProducts;