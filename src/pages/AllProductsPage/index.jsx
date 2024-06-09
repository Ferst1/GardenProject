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
  const { products, loading, error } = useSelector(state => state.products);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = showDiscounted ? products.filter(product => product.discont_price) : products;

  const handleSortChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const sortedProducts = [...filteredProducts]; 

  switch (sortBy) {
    case 'newest':
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case 'price-high-low':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'price-low-high':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    default:
      break;
  }

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
