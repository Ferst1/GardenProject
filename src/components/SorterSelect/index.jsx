import React from 'react';
import defaultStyles from './SorterSelect.module.css';

const SorterSelect = ({ styles = defaultStyles }) => {
  return (
    <div className={styles.sorter_wrapper}>
      <h3>Sorter</h3>
      <select defaultValue="default">
        <option value="default">by default</option>
        <option value="newest">newest</option>
        <option value="price-high-low">price: high-low</option>
        <option value="price-low-high">price: low-high</option>
      </select>
    </div>
  );
};

export default SorterSelect;
