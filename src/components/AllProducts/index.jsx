
import React from 'react';
import s from './AllProducts.module.css';
import ProductsCard from '../ProductsCard';
import CardSkeleton from '../CardSkeleton/CardSkeleton'; 

const AllProducts = ({ products, loading }) => {
  return (
    <div className="container">
      <div className={s.products_grid}>
        {loading 
          ? Array(10).fill().map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  );
};

export default AllProducts;

