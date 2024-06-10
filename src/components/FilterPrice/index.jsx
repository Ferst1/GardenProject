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
import { useDispatch } from 'react-redux';
import { setMinPriceFilter, setMaxPriceFilter } from '../../redux/actions/productsActions';
import defaultStyles from './FilterPrice.module.css';

const FilterPrice = ({ styles = defaultStyles }) => {
  const dispatch = useDispatch();

  const handleMinPriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    dispatch(setMinPriceFilter(value));
  };

  const handleMaxPriceChange = (e) => {
    const value = parseFloat(e.target.value) || Infinity;
    dispatch(setMaxPriceFilter(value));
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
