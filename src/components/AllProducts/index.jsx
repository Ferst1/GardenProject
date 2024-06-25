
import React from 'react';
import s from './AllProducts.module.css';
import ProductsCard from '../ProductsCard';
import CardSkeleton from '../CardSkeleton/CardSkeleton'; 

const AllProducts = ({ products, loading }) => {
  return (
    <div className="container">
      <div className={s.products_grid}>
        {loading
          ? Array(11).fill().map((_, index) => (
              <div key={index} className={s.card}>
                <CardSkeleton />
              </div>
            ))
          : products.map((product) => (
              <div key={product.id} className={s.card}>
                <ProductsCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllProducts;
