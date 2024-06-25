// // FavoritesPage.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, setMinPriceFilter, setMaxPriceFilter, setSortBy, filterAndSortProducts } from '../../redux/actions/productsActions';
// import Favorites from '../../components/Favorites';
// import FilterPrice from '../../components/FilterPrice';
// import SorterSelect from '../../components/SorterSelect';
// import filterPriceStyles from '../../components/FilterPrice/FilterPrice.module.css';
// import sorterSelectStyles from '../../components/SorterSelect/SorterSelect.module.css';
// import styles from './FavoritesPage.module.css';

// const FavoritesPage = () => {
//   const dispatch = useDispatch();
//   const { filteredAndSortedProducts, loading, error } = useSelector(state => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts()).then(() => dispatch(filterAndSortProducts()));
//   }, [dispatch]);

//   const handleMinPriceChange = (minPrice) => {
//     dispatch(setMinPriceFilter(minPrice));
//     dispatch(filterAndSortProducts());
//   };

//   const handleMaxPriceChange = (maxPrice) => {
//     dispatch(setMaxPriceFilter(maxPrice));
//     dispatch(filterAndSortProducts());
//   };

//   const handleSortChange = (selectedValue) => {
//     dispatch(setSortBy(selectedValue));
//     dispatch(filterAndSortProducts());
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <h2>Favorites</h2>
//       <div className={styles.sorted_section}>
//         <FilterPrice styles={filterPriceStyles} onMinPriceChange={handleMinPriceChange} onMaxPriceChange={handleMaxPriceChange} />
//         <SorterSelect styles={sorterSelectStyles} onChange={handleSortChange} />
//       </div>
//       <div className={styles.favorites_wrapper}>
//         <Favorites products={filteredAndSortedProducts} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setMinPriceFilter, setMaxPriceFilter, setSortBy, filterAndSortProducts } from '../../redux/actions/productsActions';
import Favorites from '../../components/Favorites';
import FilterPrice from '../../components/FilterPrice';
import SorterSelect from '../../components/SorterSelect';
import filterPriceStyles from '../../components/FilterPrice/FilterPrice.module.css';
import sorterSelectStyles from '../../components/SorterSelect/SorterSelect.module.css';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { filteredAndSortedProducts, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => dispatch(filterAndSortProducts()));
  }, [dispatch]);

  const handleMinPriceChange = (minPrice) => {
    dispatch(setMinPriceFilter(minPrice));
    dispatch(filterAndSortProducts());
  };

  const handleMaxPriceChange = (maxPrice) => {
    dispatch(setMaxPriceFilter(maxPrice));
    dispatch(filterAndSortProducts());
  };

  const handleSortChange = (selectedValue) => {
    dispatch(setSortBy(selectedValue));
    dispatch(filterAndSortProducts());
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Favorites</h2>
      <div className={styles.sorted_section}>
        <FilterPrice styles={filterPriceStyles} onMinPriceChange={handleMinPriceChange} onMaxPriceChange={handleMaxPriceChange} />
        <SorterSelect styles={sorterSelectStyles} onChange={handleSortChange} />
      </div>
      <div className={styles.favorites_wrapper}>
        <Favorites products={filteredAndSortedProducts} loading={loading} />
      </div>
    </div>
  );
};

export default FavoritesPage;
