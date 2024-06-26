

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../instance";
import s from "./ProductsCard.module.css";
import Favorite from "../UI/Favorite";
import Basket from "../UI/Basket";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../../redux/basketReducer";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/productsActions";

import { formatPrice } from "../../utils";
import { calculateDiscount } from "../../utils";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductsCard = ({
  product,
  showAddToCartButton,
  showBasketIcon = true,
  additionalClass = '',
}) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const favorites = useSelector((state) => state.products.favorites);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [isInBasket, setIsInBasket] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsInBasket(basket.some((item) => item.id === product.id));
  }, [basket, product.id]);

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === product.id));
  }, [favorites, product.id]);

  if (!product) {
    return <div>Product data is missing</div>;
  }

  const discount = calculateDiscount(product.price, product.discont_price);
  
  const handleAddToBasket = (e, addToBasketAction) => {
    if (e && typeof e.preventDefault === "function") {
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
    if (e && typeof e.preventDefault === "function") {
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
    <div className={`${s.product_item} ${darkMode ? s["dark-mode"] : ""} ${additionalClass}`}>
      <Link to={`/product/${product.id}`}>
        <div className={s.category_content}>
          <div className={s.image_container}>
            {product.image && (
              <>
                <img
                  className={s.category_img}
                  src={`${baseUrl}${product.image ||<Skeleton/>}`}
                  alt={product.title}
                />
                <div className={s.icons}>
                  <Favorite
                    onClick={handleAddToFavorites}
                    isFavorite={isFavorite}
                  />
                  {showBasketIcon && (
                    <Basket
                      onClick={(e) => handleAddToBasket(e, !isInBasket)}
                      isInBasket={isInBasket}
                    />
                  )}
                </div>
              </>
            )}
            {discount !== null && (
              <div className={s.discont_tag}>{`-${discount}%`}</div>
            )}
          </div>
          <div className={`${s.product_title} ${darkMode ? s["dark-mode"] : ""}`}>{product.title||<Skeleton/>}</div>
          <div className={`${s.product_price} ${darkMode ? s["dark-mode"] : ""}`}>
            {product.discont_price ? (
              <>
                <span className={`${s.original_price} ${darkMode ? s["dark-mode"] : ""}`}>
                ${formatPrice(product.discont_price)||<Skeleton/>}
                </span>

                <span className={s.discont_price}>
                ${formatPrice(product.price)||<Skeleton/>}
                </span>
              </>
            ) : (
              <span className={`${darkMode ? s["dark-mode"] : ""}`} >${formatPrice(product.price)||<Skeleton/>}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
