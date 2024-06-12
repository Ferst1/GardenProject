import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import AllProducts from '../../components/AllProducts';
import SorterSelect from '../../components/SorterSelect';
import FilterPrice from '../../components/FilterPrice';
import DiscountedCheckBox from '../../components/DiscountedCheckBox';
import ButtonSection from '../../components/UI/ButtonSection';
import styles from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, filters } = useSelector(state => state.products);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredProducts = products.filter(product => {
    const meetsPriceCriteria = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const meetsDiscountCriteria = showDiscounted ? product.discount_price : true;
    return meetsPriceCriteria && meetsDiscountCriteria;
  });

  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case 'newest':
        return [...products].sort((a, b) => b.id - a.id);
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  const handleSortChange = selectedValue => {
    setSortBy(selectedValue);
  };

  return (
    <div className="container">
      <div className={styles.buttons_wrapper}>
        <ButtonSection text="Main Page" to="/" backgroundColor={"transparent"} />
        <ButtonSection text="All products" to="/all_products" backgroundColor={"transparent"} />
      </div>
      <h2>All products</h2>
      <div className={styles.sorted_section}>
        <FilterPrice />
        <DiscountedCheckBox setShowDiscounted={setShowDiscounted} showDiscounted={showDiscounted} />
        <SorterSelect onChange={handleSortChange} />
      </div>
      <AllProducts products={sortedProducts}/>
    </div>
  );
};

export default AllProductsPage;

