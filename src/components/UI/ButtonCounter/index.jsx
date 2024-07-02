import React from 'react';
import styles from './ButtonCounter.module.css';
import { ReactComponent as IncrementIcon } from '../../../media/icons/plus.svg';
import { ReactComponent as DecrementIcon } from '../../../media/icons/minus.svg';

const ButtonCounter = ({ productCount, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.count_controls}>
      <button 
        className={styles.decrement_button} 
        onClick={handleDecrement}
        aria-label="Decrease count"
      >
        <DecrementIcon className={styles.icon}/>
      </button>
      <span className={styles.count}>{productCount}</span>
      <button 
        className={styles.increment_button} 
        onClick={handleIncrement}
        aria-label="Increase count"
      >
        <IncrementIcon />
      </button>
    </div>
  );
};

export default ButtonCounter;
