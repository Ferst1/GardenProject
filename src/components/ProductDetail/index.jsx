
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, incrementProductCount, decrementProductCount } from '../../redux/actions/productsActions'; 
import styles from './ProductDetail.module.css';
import ButtonAddToCard from '../UI/ButtonAddToCard';
import { baseUrl } from '../../instance';
import Favorite from '../Header/Favorite';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const handleIncrement = () => {
    dispatch(incrementProductCount());
  };

  const handleDecrement = () => {
    dispatch(decrementProductCount());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  let discount = null;
  if (product.price && product.discont_price) {
    discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
  }

  return (
    <>
      <div className={styles.product_detail}>
        <img
          src={`${baseUrl}${product.image}`}
          alt={product.title}
          className={styles.category_img}
        />
        <div className={styles.product_detail_content}>
          <div className={styles.title_favorite_wrapper}>
            <h4>{product.title}</h4>
            <Favorite />
          </div>
          <div className={styles.product_price}>
            ${product.price}
            {product.discont_price && (
              <span className={styles.discont_price}>
                ${product.discont_price}
              </span>
            )}
            {discount !== null && (
              <div className={styles.discont_tag}>{`-${discount}%`}</div>
            )}
          </div>
          <div className={styles.controls_and_cart}>
            <div className={styles.count_controls}>
              <button onClick={handleDecrement}>-</button>
              <span>{product.count ?? 0}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <ButtonAddToCard text="Add to Cart" />
          </div>
          <h5>Description</h5>
          <p>{product.description}</p>
          <Link to={`/product/${product.id}`}>Read more</Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
