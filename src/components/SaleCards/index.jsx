

import React from 'react';
import ProductsCard from '../../components/ProductsCard';
import styles from './SaleCards.module.css';

const SaleCards = ({ products }) => {
  if (!products) {
    console.error('SaleCards: products is undefined');
    return <div>Loading...</div>;
  }

  if (!Array.isArray(products)) {
    console.error('SaleCards: products is not an array:', products);
    return <div>Error: products is not an array</div>;
  }

  if (products.length === 0) {
    console.warn('SaleCards: no products on sale');
    return <div>No products on sale</div>;
  }

  return (
    <div className={styles.saleCardWrapperStyle}>
      {products.map((product) => (
        <div key={product.id} className="card">
          <ProductsCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default SaleCards;
