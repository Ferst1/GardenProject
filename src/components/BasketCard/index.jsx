import React from 'react';
import ProductsCard from '../ProductsCard';

const BasketCard = ({ product }) => {
  return (
    <div>
      <ProductsCard product={product} showAddToCartButton={false} />
    </div>
  );
};

export default BasketCard;
