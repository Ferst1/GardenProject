

import React from 'react';
import ProductCard from '../../components/ProductsCard';
import styles from './SaleCards.module.css';

const SaleCards = ({ products }) => {
 
  if (!products) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(products)) {
    return <div>Error: products is not an array</div>;
  }

  if (products.length === 0) {
    return <div>No products on sale</div>;
  }

  return (
    <div className={styles.saleCardWrapperStyle}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SaleCards;
