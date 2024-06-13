// import React from 'react';
// import defaultStyles from './FilterPrice.module.css';

// const FilterPrice = ({ styles = defaultStyles }) => {
//   return (
//     <div className={styles.filter_wrapper}>
//       <h3>Price</h3>
//       <div className={styles.inputWrapper}>
//         <input 
//           type="text"
//           defaultValue="from"
//           id="minPrice" 
//           placeholder="from" 
//           name="from" 
//         />
        
//         <input
//           type="text"
//           defaultValue="to" 
//           id="maxPrice"
//           placeholder="to"
//           name="to"
//         />
//       </div>
//     </div>
//   );
// };

// export default FilterPrice;


import React from 'react';
import defaultStyles from './FilterPrice.module.css';

const FilterPrice = ({ styles = defaultStyles, onMinPriceChange, onMaxPriceChange }) => {
  const handleMinPriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    onMinPriceChange(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = parseFloat(e.target.value) || Infinity;
    onMaxPriceChange(value);
  };

  return (
    <div className={styles.filter_wrapper}>
      <h3>Price</h3>
      <div className={styles.inputWrapper}>
        <input 
          type="text"
          placeholder="from"
          name="from"
          onChange={handleMinPriceChange}
        />
        
        <input
          type="text"
          placeholder="to"
          name="to"
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default FilterPrice;
