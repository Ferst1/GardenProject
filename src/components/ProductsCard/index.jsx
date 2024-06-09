
import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../instance";
import s from "./ProductsCard.module.css";
import Basket from "../Header/Basket";
import Favorite from "../Header/Favorite";
import ButtonAddToCard from "../UI/ButtonAddToCard";

const ProductsCard = ({ product, showAddToCartButton }) => {
  let discount = null;
  if (product.price && product.discont_price) {
    discount = Math.round(((product.price - product.discont_price) / product.price) * 100);
  }

  return (
    <Link to={`/product/${product.id}`} className={s.product_item}>
      <div className={s.category_content}>
        <div className={s.cards_button}>
          <Basket />
          <Favorite />
          {product.image && (
            <div className={s.image_container}>
              <img
                className={s.category_img}
                src={`${baseUrl}${product.image}`}
                alt={product.title}
              />
              {showAddToCartButton && (
                <ButtonAddToCard
                  to="/product/productId"
                  text="Add to Cart"
                />
              )}
            </div>
          )}
          {discount !== null && (
            <div className={s.discont_tag}>{`-${discount}%`}</div>
          )}
          <div className={s.product_title}>{product.title}</div>
          <div className={s.product_price}>
            ${product.price}
            {product.discont_price && (
              <span className={s.discont_price}>
                ${product.discont_price}
              </span>
            )}
          </div>
         
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
