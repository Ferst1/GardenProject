
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, setMinPriceFilter, setMaxPriceFilter } from "../../redux/actions/productsActions";
import styles from "./CategoryProductsPage.module.css";
import SortFilteredComponents from "../../components/SortFilteredComponents";
import ButtonSection from "../../components/UI/ButtonSection";
import CategoryProductsCard from "../../components/CategoryProductsCard";
import { sortProducts } from "../../utils";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error, filters } = useSelector(
    (state) => state.products
  );
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
  }, [dispatch, categoryId]);

  const handleMinPriceChange = (minPrice) => {
    dispatch(setMinPriceFilter(minPrice));
  };

  const handleMaxPriceChange = (maxPrice) => {
    dispatch(setMaxPriceFilter(maxPrice));
  };

  const handleSortChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const handleDiscountChange = (isDiscounted) => {
    setShowDiscounted(isDiscounted);
  };

  if (loading) {
    return (
      <div className="container">
        <div className={styles.skeleton_wrapper}>
          {[...Array(10)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div className="container">No products available</div>;
  }

  const filteredProducts = products.filter(product => {
    const price = product.discont_price ?? product.price;
    const meetsPriceCriteria = price >= filters.minPrice && price <= filters.maxPrice;
    const meetsDiscountCriteria = showDiscounted ? product.discont_price : true;
    return meetsPriceCriteria && meetsDiscountCriteria;
  });

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  return (
    <div className="container">
      <div>
        <div className={styles.buttons_wrapper}>
          <ButtonSection
            text="Main Page"
            to="/"
            backgroundColor="transparent"
          />
          <ButtonSection
            text="Categories"
            to="/categories"
            backgroundColor="transparent"
          />
          <ButtonSection
            text="Tools and equipment"
            to={`/category/${categoryId}`}
            backgroundColor="transparent"
          />
        </div>
        <h2>Tools and equipment</h2>

        <div className={styles.sorted_section}>
          <SortFilteredComponents
            onMinPriceChange={handleMinPriceChange}
            onMaxPriceChange={handleMaxPriceChange}
            onDiscountChange={handleDiscountChange}
            onSortChange={handleSortChange}
            isDiscounted={showDiscounted}
          />
        </div>
        <div className={styles.products}>
          {sortedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className={styles.product_link}>
              <CategoryProductsCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPage;
