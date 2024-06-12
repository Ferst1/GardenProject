import React from 'react';
import defaultStyles from './SorterSelect.module.css';

const SorterSelect = ({ styles = defaultStyles, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.sorter_wrapper}>
      <h3>Sorter</h3>
      <select defaultValue="default" onChange={handleChange}>
        <option value="default">by default</option>
        <option value="newest">newest</option>
        <option value="price-high-low">price: high-low</option>
        <option value="price-low-high">price: low-high</option>
      </select>
    </div>
  );
};

export default SorterSelect;

