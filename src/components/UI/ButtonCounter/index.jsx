import React from 'react';
import styles from './ButtonCounter.module.css';

const ButtonCounter = ({ productCount, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.count_controls}>
      <button onClick={handleDecrement}>-</button>
      <span>{productCount}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ButtonCounter;
