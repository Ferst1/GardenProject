import React from 'react';
import s from './AllProducts.module.css';
import ProductsCard from '../ProductsCard';

const AllProducts = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className={s.products_grid}>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
