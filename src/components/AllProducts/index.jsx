import React from "react";
import baseUrl from "../../instance";
import s from "./AllProducts.module.css";
import Basket from "../Header/Basket";
import Favorite from "../Header/Favorite";

const AllProducts = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.products_grid}>
      {products.map((product) => (
        <div key={product.id} className={s.product_item}>
          <div className={s.category_content}>
            <div className={s.cards_button}>
              <Basket />
              <Favorite />

              {product.image && (
                <img
                  className={s.category_img}
                  src={`${baseUrl}${product.image}`}
                  alt={product.title}
                />
              )}
              {product.discont && (
                <div className={s.discont_tag}>{`-${product.discont}%`}</div>
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
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
