
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../redux/actions/productsActions';
import styles from './CategoryProductsPage.module.css';
import baseUrl from '../../instance';

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
  }, [dispatch, categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className={styles.products_container}>
      {products.map((product) => (
        <div key={product.id} className={styles.product_item}>
          <div className={styles.product_content}>
            {product.image && (
              <img
                className={styles.product_img}
                src={`${baseUrl}${product.image}`}
                alt={product.title}
              />
            )}
            <div className={styles.product_title}>{product.title}</div>
            <div className={styles.product_price}>
              ${product.price}
              {product.discount_price && (
                <span className={styles.discount_price}>
                  ${product.discount_price}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryProductsPage;
