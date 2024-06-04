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
          <div className={styles.category_content}>
            {product.image && (
              <img
                className={styles.category_img}
                src={`${baseUrl}${product.image}`}
                alt={product.title}
              />
            )}
            <div className={styles.product_title}>{product.title}</div>
            <div className={styles.product_price}>
              ${product.price}
              {product.discont_price && (
                <span className={styles.discont_price}>
                  ${product.discont_price}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
