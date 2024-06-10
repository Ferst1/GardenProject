

import React from 'react';
import { useSelector } from 'react-redux';
import s from './AllProducts.module.css';
import ProductsCard from '../ProductsCard';

const AllProducts = () => {
  const { products, filters } = useSelector(state => state.products);

  if (!products) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter(product => {
    return (
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice
    );
  });

  return (
    <div className="container">
      <div className={s.products_grid}>
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
