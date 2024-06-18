import React from 'react';
import ProductsCard from '../ProductsCard';
import styles from './CategoryProductsCard.module.css';
const CategoryProductsCard = ({ product }) => {
  return (
    <div className={styles.product_card_container}>
      <ProductsCard product={product} />
    </div>
  );
};

export default CategoryProductsCard;
