import React, { useEffect, useState } from 'react'
import Favorites from '../../components/Favorites'
import styles from './FavoritesPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setMinPriceFilter, setMaxPriceFilter } from '../../redux/actions/productsActions';
import FilterPrice from '../../components/FilterPrice';
import SorterSelect from '../../components/SorterSelect';
import filterPriceStyles from '../../components/FilterPrice/FilterPrice.module.css';
import sorterSelectStyles from '../../components/SorterSelect/SorterSelect.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, filters } = useSelector(state => state.products);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleMinPriceChange = (minPrice) => {
    dispatch(setMinPriceFilter(minPrice));
  };

  const handleMaxPriceChange = (maxPrice) => {
    dispatch(setMaxPriceFilter(maxPrice));
  };

  const handleSortChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    console.error('AllSalesPage: products is undefined');
    return <div>Products are undefined</div>;
  }

  if (!Array.isArray(products)) {
    console.error('AllSalesPage: products is not an array:', products);
    return <div>Products is not an array</div>;
  }

  const saleProducts = products.filter(product => product.discont_price);

  if (saleProducts.length === 0) {
    console.warn('AllSalesPage: no products on sale');
    return <div>No products on sale</div>;
  }

  const filteredProducts = saleProducts.filter(product => {
    const price = product.discont_price ?? product.price;
    const meetsPriceCriteria = price >= filters.minPrice && price <= filters.maxPrice;
    return meetsPriceCriteria;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case 'newest':
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case 'price-high-low':
      sortedProducts.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price));
      break;
    case 'price-low-high':
      sortedProducts.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price));
      break;
    default:
      break;
  }
  return (
    <div className="container">
      <h2>Favorites</h2>
      <div className={styles.sorted_section}>
        <FilterPrice styles={filterPriceStyles} onMinPriceChange={handleMinPriceChange} onMaxPriceChange={handleMaxPriceChange} />
        <SorterSelect styles={sorterSelectStyles} onChange={handleSortChange} />
      </div>
      <div className={styles.favorites_wrapper}>
      <Favorites />
      </div>
    </div>
  )
}

export default FavoritesPage