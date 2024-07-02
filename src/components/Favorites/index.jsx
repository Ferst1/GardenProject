
import React from 'react';
import PropTypes from 'prop-types';
import ProductsCard from '../ProductsCard';
import Button from '../UI/Button';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import styles from './Favorites.module.css';

const Favorites = ({ products, loading }) => {
  if (loading) {
    return (
      <div className={styles.favorites}>
        <div className={styles.favoritesList}>
          {Array(10).fill().map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Looks like you have no items in your favorites currently.</p>
        <Button
          text="Continue Shopping"
          onClick={() => window.location.href = '/all_products'}
          className={styles.button_details}
        />
      </div>
    );
  }

  return (
    <div className={styles.favorites}>
      <div className={styles.favoritesList}>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Favorites;
