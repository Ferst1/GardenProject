import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setMinPriceFilter,
  setMaxPriceFilter,
  setSortBy,
  setShowDiscounted,
  filterAndSortProducts,
} from "../../redux/slices/productsSlice";
import SaleCards from "../../components/SaleCards";
import FilterPrice from "../../components/FilterPrice";
import SorterSelect from "../../components/SorterSelect";
import filterPriceStyles from "../../components/FilterPrice/FilterPrice.module.css";
import sorterSelectStyles from "../../components/SorterSelect/SorterSelect.module.css";
import styles from "./AllSalesPage.module.css";
import ButtonSection from "../../components/UI/ButtonSection";

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const { filteredAndSortedProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(setShowDiscounted(true)); 
      dispatch(filterAndSortProducts());
    });
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
      <div className={styles.buttons_wrapper}>
        <ButtonSection
          text="Main Page"
          to="/"
          className={styles.button_section}
        />
        <ButtonSection
          text="All products"
          to="/all_products"
          className={styles.button_section}
        />
        <ButtonSection
          text="All sales"
          to="/all_sales"
          className={styles.button_section}
        />
      </div>
      <h2>All Sales</h2>
      <div className={styles.sorted_section}>
        <FilterPrice
          styles={filterPriceStyles}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
        <SorterSelect styles={sorterSelectStyles} onChange={handleSortChange} />
      </div>
      <div className={styles.sale_card_wrapper}>
        <SaleCards products={filteredAndSortedProducts} loading={loading} />
      </div>
    </div>
  );
};

export default AllSalesPage;
