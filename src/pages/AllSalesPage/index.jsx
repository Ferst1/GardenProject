
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import SaleCards from '../../components/SaleCards';
import ButtonSection from '../../components/UI/ButtonSection';
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

  
  return (
    <div className="container">
      <div className={styles.buttons_wrapper}>
        <ButtonSection text="Main Page" to="/" backgroundColor={"transparent"} />
        <ButtonSection text="All sales" to="/all_sales" backgroundColor={"transparent"} />
      </div>
      <h2>All Sales</h2>
      <div className={styles.sale_card_wrapper}>
        <SaleCards products={saleProducts} />
      </div>
    </div>
  );
};

export default AllSalesPage;
