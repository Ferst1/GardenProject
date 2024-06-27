
import React, { useEffect } from 'react';
import s from './AllProducts.module.css';
import ProductsCard from '../ProductsCard';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const AllProducts = ({ products, loading }) => {
  useEffect(() => {
    console.log('Loading:', loading);
    console.log('Products:', products);
  }, [loading, products]);

  return (
    <div className="container">
      <div className={s.products_grid}>
        {loading
          ? Array(11).fill().map((_, index) => (
              <div key={index} className={s.card}>
                <CardSkeleton />
              </div>
            ))
          : products && products.length > 0
            ? products.map((product) => (
                <div key={product.id} className={s.card}>
                  <ProductsCard product={product} />
                </div>
              ))
            : <div>No products available</div>
        }
      </div>
    </div>
  );
};

export default AllProducts;
