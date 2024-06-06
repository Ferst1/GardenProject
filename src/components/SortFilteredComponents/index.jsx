import React from 'react';
import SorterSelect from '../SorterSelect';
import DiscountedCheckBox from '../DiscountedCheckBox';
import FilterPrice from '../FilterPrice';
import styles from './SortFilteredComponents.module.css';
import filterPriceStyles from '../FilterPrice/FilterPrice.module.css';
import discountedCheckBoxStyles from '../DiscountedCheckBox/DiscountedCheckBox.module.css';
import sorterSelectStyles from '../SorterSelect/SorterSelect.module.css';

const SortFilteredComponents = () => {
  return (
    <div className={styles.sorted_wrapper}>
      <div className={styles.sorted_section}>
        <FilterPrice styles={filterPriceStyles} />
        <DiscountedCheckBox styles={discountedCheckBoxStyles} />
        <SorterSelect styles={sorterSelectStyles} />
      </div>
    </div>
  );
};

export default SortFilteredComponents;
