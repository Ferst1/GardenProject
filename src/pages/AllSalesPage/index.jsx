

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setMinPriceFilter, setMaxPriceFilter } from '../../redux/actions/productsActions';
import SaleCards from '../../components/SaleCards';
import FilterPrice from '../../components/FilterPrice';
import SorterSelect from '../../components/SorterSelect';
import styles from './AllSalesPage.module.css';
import filterPriceStyles from '../../components/FilterPrice/FilterPrice.module.css';
import sorterSelectStyles from '../../components/SorterSelect/SorterSelect.module.css';

const AllSalesPage = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

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

  const filteredProducts = products.filter(product => {
    const price = product.discont_price ?? product.price;
    const meetsPriceCriteria = price >= filters.minPrice && price <= filters.maxPrice;
    const meetsDiscountCriteria = product.discont_price; // Для распродажных продуктов
    return meetsPriceCriteria && meetsDiscountCriteria;
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

  if (sortedProducts.length === 0) {
    console.warn('AllSalesPage: no products on sale');
    return <div>No products on sale</div>;
  }

  return (
    <div className="container">
      <div className={styles.filter_sort_wrapper}>
        <FilterPrice
          styles={filterPriceStyles}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
        <SorterSelect
          styles={sorterSelectStyles}
          onChange={handleSortChange}
        />
      </div>
      <h2>All Sales</h2>
      <div className={styles.sale_card_wrapper}>
        <SaleCards products={sortedProducts} />
      </div>
    </div>
  );
};

export default AllSalesPage;
