
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../instance";
import s from "./ProductsCard.module.css";
import ButtonAddToCard from "../UI/ButtonAddToCard";
import Favorite from "../../components/Header/Favorite";
import Basket from "../../components/Header/Basket";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../redux/basketReducer';
import { addToFavorites, removeFromFavorites } from '../../redux/actions/productsActions';

const ProductsCard = ({ product, showAddToCartButton, showBasketIcon = true }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const favorites = useSelector((state) => state.products.favorites);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsInBasket(basket.some(item => item.id === product.id));
  }, [basket, product.id]);

  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.id === product.id));
  }, [favorites, product.id]);

  if (!product) {
    return <div>Product data is missing</div>;
  }

  let discount = null;
  if (product.price && product.discont_price) {
    discount = Math.round(
      ((product.price - product.discont_price) / product.price) * 100
    );
  }

  const handleAddToBasket = (e, addToBasketAction) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      e.stopPropagation();
    }
    if (addToBasketAction) {
      dispatch(addToBasket(product));
    } else {
      dispatch(removeFromBasket(product.id));
    }
    setIsInBasket(addToBasketAction);
  };

  const handleAddToFavorites = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!isFavorite) {
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(product));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.product_item}>
      <Link to={`/product/${product.id}`}>
        <div className={s.category_content}>
          <div className={s.image_container}>
            {product.image && (
              <>
                <img
                  className={s.category_img}
                  src={`${baseUrl}${product.image}`}
                  alt={product.title}
                />
                <div className={s.icons}>
                  <Favorite onClick={handleAddToFavorites} isFavorite={isFavorite} />
                  {showBasketIcon && (
                    <Basket onClick={(e) => handleAddToBasket(e, !isInBasket)} isInBasket={isInBasket} />
                  )}
                </div>
                {showAddToCartButton && (
                  <ButtonAddToCard text="Add to Cart" onClick={(e) => handleAddToBasket(e, true)} />
                )}
              </>
            )}
            {discount !== null && (
              <div className={s.discont_tag}>{`-${discount}%`}</div>
            )}
          </div>
          <div className={s.product_title}>{product.title}</div>
          <div className={s.product_price}>
            {product.discont_price ? (
              <>
                <span className={s.original_price}>${product.price.toFixed(2)}</span>
                <span className={s.discont_price}>${product.discont_price.toFixed(2)}</span>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
