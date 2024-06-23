
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductsCard from '../ProductsCard'; 
import Button from '../UI/Button';
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.products.favorites || []);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/all_products');
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Looks like you have no items in your favorites currently.</p>
        <Button
          text="Continue Shopping"
          onClick={handleContinueShopping}
          className={styles.button_details}
        />
      </div>
    );
  }

  return (
    <div className={styles.favorites}>
      <div className={styles.favoritesList}>
        {favorites.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
