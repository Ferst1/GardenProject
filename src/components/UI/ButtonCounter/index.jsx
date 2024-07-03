import React from 'react';
import styles from './ButtonCounter.module.css';
import { ReactComponent as IncrementIcon } from '../../../media/icons/plus.svg';
import { ReactComponent as DecrementIcon } from '../../../media/icons/minus.svg';
import { useSelector } from 'react-redux';

const ButtonCounter = ({ productCount, handleIncrement, handleDecrement }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${styles.count_controls} ${darkMode ? styles.dark : ''}`}>
      <button 
        className={`${styles.decrement_button} ${darkMode ? styles.dark : ''}`}  
        onClick={handleDecrement}
        aria-label="Decrease count"
      >
        <DecrementIcon className={styles.icon}/>
      </button>
      <span className={`${styles.count} ${darkMode ? styles.dark : ''}`}>{productCount}</span>
      <button 
        className={`${styles.increment_button} ${darkMode ? styles.dark : ''}`} 
        onClick={handleIncrement}
        aria-label="Increase count"
      >
        <IncrementIcon />
      </button>
    </div>
  );
};

export default ButtonCounter;
