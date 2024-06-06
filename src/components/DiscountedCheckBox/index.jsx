import React from 'react';
import defaultStyles from './DiscountedCheckBox.module.css';

const DiscountedCheckBox = ({ styles = defaultStyles }) => {
  return (
    <div className={styles.discount_wrapper}>
      <label htmlFor="discounted"><h3>Discounted items</h3></label>
      <input type="checkbox" id="discounted" name="discounted" />
    </div>
  );
};

export default DiscountedCheckBox;
