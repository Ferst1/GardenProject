import React from 'react';
import defaultStyles from './FilterPrice.module.css';

const FilterPrice = ({ styles = defaultStyles }) => {
  return (
    <div className={styles.filter_wrapper}>
      <h3>Price</h3>
      <div className={styles.inputWrapper}>
        <input 
          type="text"
          defaultValue="from"
          id="minPrice" 
          placeholder="from" 
          name="from" 
        />
        
        <input
          type="text"
          defaultValue="to" 
          id="maxPrice"
          placeholder="to"
          name="to"
        />
      </div>
    </div>
  );
};

export default FilterPrice;
