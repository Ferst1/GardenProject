import React from 'react';
import defaultStyles from './DiscountedCheckBox.module.css';

const DiscountedCheckBox = ({ styles = defaultStyles, setShowDiscounted, showDiscounted }) => {
  const handleCheckboxChange = (e) => {
    setShowDiscounted(e.target.checked);
  };

  return (
    <div className={styles.discount_wrapper}>
      <label htmlFor="discounted"><h3>Discounted items</h3></label>
      <input
        type="checkbox"
        id="discounted"
        name="discounted"
        checked={showDiscounted}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default DiscountedCheckBox;
