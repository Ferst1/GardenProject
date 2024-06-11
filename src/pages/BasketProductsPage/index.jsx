import React from 'react';
import { useSelector } from 'react-redux';
import BasketCard from '../../components/BasketCard';

const BasketProductsPage = () => {
  const basket = useSelector((state) => state.basket.basket);

  if (basket.length === 0) {
    return <div>Looks like you have no items in your basket currently.</div>;
  }

  return (
    <div>
      <h3>Shopping cart</h3>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            <div>
              <BasketCard product={item} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketProductsPage;
