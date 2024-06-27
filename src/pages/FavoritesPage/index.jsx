
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMinPriceFilter,
  setMaxPriceFilter,
  setSortBy,
} from "../../redux/actions/productsActions";
import Favorites from "../../components/Favorites";
import FilterPrice from "../../components/FilterPrice";
import SorterSelect from "../../components/SorterSelect";
import filterPriceStyles from "../../components/FilterPrice/FilterPrice.module.css";
import sorterSelectStyles from "../../components/SorterSelect/SorterSelect.module.css";
import styles from "./FavoritesPage.module.css";
import ButtonSection from "../../components/UI/ButtonSection";
import { sortProducts } from "../../utils"; 

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { favorites, filters, sortBy, loading, error } = useSelector(
    (state) => state.products
  );

  const filteredFavorites = favorites.filter(product => {
    const price = product.discont_price ?? product.price;
    return price >= filters.minPrice && price <= filters.maxPrice;
  });

  const sortedFavorites = sortProducts(filteredFavorites, sortBy);

  useEffect(() => {
    dispatch(setMinPriceFilter(filters.minPrice));
    dispatch(setMaxPriceFilter(filters.maxPrice));
    dispatch(setSortBy(sortBy));
  }, [dispatch, filters.minPrice, filters.maxPrice, sortBy]);

  const handleMinPriceChange = (minPrice) => {
    dispatch(setMinPriceFilter(minPrice));
  };

  const handleMaxPriceChange = (maxPrice) => {
    dispatch(setMaxPriceFilter(maxPrice));
  };

  const handleSortChange = (selectedValue) => {
    dispatch(setSortBy(selectedValue));
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
          text="Liked products"
          to="/favorites"
          className={styles.button_section}
        />
      </div>
      <h2>Liked products</h2>
      <div className={styles.sorted_section}>
        <FilterPrice
          styles={filterPriceStyles}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
        <SorterSelect styles={sorterSelectStyles} onChange={handleSortChange} />
      </div>
      <div className={styles.favorites_wrapper}>
        <Favorites products={sortedFavorites} loading={loading} />
      </div>
    </div>
  );
};

export default FavoritesPage;
