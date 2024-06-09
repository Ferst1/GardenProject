
import baseUrl from '../../instance';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.products.favorites || []);

  if (favorites.length === 0) {
    return <div className={styles.empty}>No favorite products</div>;
  }

  return (
    <div className={styles.favorites}>
      <h2>Favorites</h2>
      <div className={styles.favoritesList}>
        {favorites.map((product) => (
          <div key={product.id} className={styles.favoriteItem}>
            <img src={`${baseUrl}${product.image}`} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
