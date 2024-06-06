import React from 'react';
import AllProducts from '../../components/AllProducts';
import { fetchProducts } from '../../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './AllProductsPage.module.css';
import SorterSelect from '../../components/SorterSelect';

import FilterPrice from '../../components/FilterPrice';
import DiscountedCheckBox from '../../components/DiscountedCheckBox';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>All products</h2>
      <div className={styles.sorted_section}>
      <FilterPrice />
      <DiscountedCheckBox />
      <SorterSelect />
      </div>
      <AllProducts products={products}/>
    </div>
  );
};

export default AllProductsPage;
