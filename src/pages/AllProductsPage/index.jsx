
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setMinPriceFilter, setMaxPriceFilter, setSortBy, setShowDiscounted, filterAndSortProducts } from '../../redux/actions/productsActions';
import AllProducts from '../../components/AllProducts';
import SortFilteredComponents from '../../components/SortFilteredComponents';
import ButtonSection from '../../components/UI/ButtonSection';
import styles from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { filteredAndSortedProducts, loading, error, showDiscounted } = useSelector(state => state.products);

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

  const handleDiscountChange = (isDiscounted) => {
    dispatch(setShowDiscounted(isDiscounted));
    dispatch(filterAndSortProducts());
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="container">
        <div className={styles.buttons_wrapper}>
          <ButtonSection text="Main Page" to="/"  className={styles.button_section} />
          <ButtonSection text="All products" to="/all_products"  className={styles.button_section} />
        </div>
        <h2>All products</h2>
        <div className={styles.sorted_section}>
          <SortFilteredComponents
            onMinPriceChange={handleMinPriceChange}
            onMaxPriceChange={handleMaxPriceChange}
            onDiscountChange={handleDiscountChange}
            onSortChange={handleSortChange}
            isDiscounted={showDiscounted}
          />
        </div>
      </div>
      <AllProducts products={filteredAndSortedProducts} loading={loading} />
    </div>
  );
};

export default AllProductsPage;
