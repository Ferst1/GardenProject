
import React, { useEffect } from "react";
import { useNavigate,Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, setMinPriceFilter, setMaxPriceFilter, setShowDiscounted, setSortBy, filterAndSortProducts } from "../../redux/slices/productsSlice";
import styles from "./CategoryProductsPage.module.css";
import SortFilteredComponents from "../../components/SortFilteredComponents";
import ButtonSection from "../../components/UI/ButtonSection";
import CategoryProductsCard from "../../components/CategoryProductsCard";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filteredAndSortedProducts, loading, error, showDiscounted } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    console.log("Initial showDiscounted state:", showDiscounted);
  }, [showDiscounted]);

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
  }, [dispatch, categoryId, showDiscounted]);

  const handleMinPriceChange = (minPrice) => {
    dispatch(setMinPriceFilter(minPrice));
    dispatch(filterAndSortProducts());
  };

  const handleMaxPriceChange = (maxPrice) => {
    dispatch(setMaxPriceFilter(maxPrice));
    dispatch(filterAndSortProducts());
  };

  const handleSortChange = (selectedValue) => {
    dispatch(setSortBy(selectedValue));
    dispatch(filterAndSortProducts());
  };

  const handleDiscountChange = (isDiscounted) => {
    dispatch(setShowDiscounted(isDiscounted));
    dispatch(filterAndSortProducts());
  };


  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="container">
      <div>
        <div className={styles.buttons_wrapper}>
          <ButtonSection text="Main Page" to="/"  />
          <ButtonSection text="Categories" to="/categories" />
          <ButtonSection text="Tools and equipment" onClick={handleGoBack}/>
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
          {loading ? (
            [...Array(10)].map((_, index) => <CardSkeleton key={index} />)
          ) : error ? (
            <div className="container">Error: {error}</div>
          ) : !Array.isArray(filteredAndSortedProducts) || filteredAndSortedProducts.length === 0 ? (
            <div className="container">No products available</div>
          ) : (
            filteredAndSortedProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className={styles.product_link}>
                <CategoryProductsCard product={product} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPage;
