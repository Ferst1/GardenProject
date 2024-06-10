


// import React, { useEffect } from "react";
// import { Link, useParams } from "react-router-dom"; 
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductsByCategory } from "../../redux/actions/productsActions";
// import styles from "./CategoryProductsPage.module.css";
// import s from "../../components/ProductsCard/ProductsCard.module.css";
// import SortFilteredComponents from "../../components/SortFilteredComponents";
// import ButtonSection from "../../components/UI/ButtonSection";
// import ProductsCard from "../../components/ProductsCard";

// const CategoryProductsPage = () => {
//   const { categoryId } = useParams();
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProductsByCategory(categoryId));
//   }, [dispatch, categoryId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!Array.isArray(products) || products.length === 0) {
//     return <div>No products available</div>;
//   }

//   return (
//     <div className="container">
//       <div className={styles.products_container}>
//         <div className={styles.buttons_wrapper}>
//           <ButtonSection text="Main Page" to="/" backgroundColor="transparent" />
//           <ButtonSection text="Categories" to="/categories" backgroundColor="transparent" />
//           <ButtonSection text="Tools and equipment" to={`/category/${categoryId}`} backgroundColor="transparent" />
//         </div>
//         <h2>Tools and equipment</h2>

//         <div className={styles.sorted_section}>
//           <SortFilteredComponents />
//         </div>
//         <div className={s.products_grid}>
//           {products.map((product) => (
//             <Link key={product.id} to={`/product/${product.id}`}>
//               <ProductsCard product={product} showAddToCartButton />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryProductsPage;



import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../redux/actions/productsActions";
import styles from "./CategoryProductsPage.module.css";
import s from "../../components/ProductsCard/ProductsCard.module.css";
import SortFilteredComponents from "../../components/SortFilteredComponents";
import ButtonSection from "../../components/UI/ButtonSection";
import ProductsCard from "../../components/ProductsCard";

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error, filters } = useSelector((state) => state.products);

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

  const filteredProducts = products.filter(product => {
    return (
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice
    );
  });

  return (
    <div className="container">
      <div className={styles.products_container}>
        <div className={styles.buttons_wrapper}>
          <ButtonSection text="Main Page" to="/" backgroundColor="transparent" />
          <ButtonSection text="Categories" to="/categories" backgroundColor="transparent" />
          <ButtonSection text="Tools and equipment" to={`/category/${categoryId}`} backgroundColor="transparent" />
        </div>
        <h2>Tools and equipment</h2>

        <div className={styles.sorted_section}>
          <SortFilteredComponents />
        </div>
        <div className={s.products_grid}>
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductsCard product={product} showAddToCartButton />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPage;

