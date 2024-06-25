import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ProductsCard from '../ProductsCard';
import Button from '../UI/Button';
import styles from './Favorites.module.css';

const Favorites = ({ products, loading }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/all_products');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
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
