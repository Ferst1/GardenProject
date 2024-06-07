
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../redux/actions/productsActions";
import styles from "./CategoryProductsPage.module.css";
import s from "../../components/AllProducts/AllProducts.module.css";
import baseUrl from "../../instance";
import SortFilteredComponents from "../../components/SortFilteredComponents";
import ButtonSection from "../../components/UI/ButtonSection";
import Basket from "../../components/Header/Basket";
import Favorite from "../../components/Header/Favorite";

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

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
    <div className="container">
      <div className={styles.products_container}>
        <div className={styles.buttons_wrapper}>
          <Link to="/">
            <ButtonSection text="Main Page" backgroundColor={"transparent"} />
          </Link>
          <Link to="/categories">
            <ButtonSection text="Categories" backgroundColor={"transparent"} />
          </Link>
          <Link to={`/category/${categoryId}`}>
            <ButtonSection
              text="Tools and equipment"
              backgroundColor={"transparent"}
            />
          </Link>
        </div>
        <h2>Tools and equipment</h2>

        <div className={styles.sorted_section}>
          <SortFilteredComponents />
        </div>
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
                  {product.discount && (
                    <div className={s.discount_tag}>{`-${product.discount}%`}</div>
                  )}
                  <div className={s.product_title}>{product.title}</div>
                  <div className={s.product_price}>
                    ${product.price}
                    {product.discount_price && (
                      <span className={s.discount_price}>
                        ${product.discount_price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPage;
