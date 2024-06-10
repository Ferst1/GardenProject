


import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../instance";
import s from "./ProductsCard.module.css";
import ButtonAddToCard from "../UI/ButtonAddToCard";
import Favorite from "../../components/Header/Favorite";
import Basket from "../../components/Header/Basket";

const ProductsCard = ({ product, showAddToCartButton }) => {
  let discount = null;
  if (product.price && product.discont_price) {
    discount = Math.round(
      ((product.price - product.discont_price) / product.price) * 100
    );
  }

  return (
    <Link to={`/product/${product.id}`} className={s.product_item}>
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
                <Favorite />
                <Basket />
              </div>
              {showAddToCartButton && (
                <ButtonAddToCard to="/product/productId" text="Add to Cart" />
              )}
            </>
          )}
          {discount !== null && (
            <div className={s.discont_tag}>{`-${discount}%`}</div>
          )}
        </div>
        <div className={s.product_title}>{product.title}</div>
        <div className={s.product_price}>
          ${product.price}
          {product.discont_price && (
            <span className={s.discont_price}>${product.discont_price}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
