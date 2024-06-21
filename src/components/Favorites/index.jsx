
import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCard from '../ProductsCard'; 
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.products.favorites || []);

  if (favorites.length === 0) {
    return <div className={styles.empty}>No favorite products</div>;
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
