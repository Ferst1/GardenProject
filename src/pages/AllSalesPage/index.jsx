
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import SaleCards from '../../components/SaleCards';
import styles from './AllSalesPage.module.css';

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const saleProducts = products.filter(product => product.discont_price);

  return (
    <div className="container">
      <h2>All Sales</h2>
      <div className={styles.sale_card_wrapper}>
        <SaleCards products={saleProducts} />
      </div>
    </div>
  );
};

export default AllSalesPage;
