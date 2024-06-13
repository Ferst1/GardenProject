// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../../redux/actions/productsActions';
// import AllProducts from '../../components/AllProducts';
// import SorterSelect from '../../components/SorterSelect';
// import FilterPrice from '../../components/FilterPrice';
// import DiscountedCheckBox from '../../components/DiscountedCheckBox';
// import ButtonSection from '../../components/UI/ButtonSection';
// import styles from './AllProductsPage.module.css';

// const AllProductsPage = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error, filters } = useSelector(state => state.products);
//   const [showDiscounted, setShowDiscounted] = useState(false);
//   const [sortBy, setSortBy] = useState('default');

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const filteredProducts = products.filter(product => {
//     const meetsPriceCriteria = product.price >= filters.minPrice && product.price <= filters.maxPrice;
//     const meetsDiscountCriteria = showDiscounted ? product.discount_price : true;
//     return meetsPriceCriteria && meetsDiscountCriteria;
//   });

//   const sortProducts = (products, sortBy) => {
//     switch (sortBy) {
//       case 'newest':
//         return [...products].sort((a, b) => b.id - a.id);
//       case 'price-high-low':
//         return [...products].sort((a, b) => b.price - a.price);
//       case 'price-low-high':
//         return [...products].sort((a, b) => a.price - b.price);
//       default:
//         return products;
//     }
//   };

//   const sortedProducts = sortProducts(filteredProducts, sortBy);

//   const handleSortChange = selectedValue => {
//     setSortBy(selectedValue);
//   };

//   return (
//     <div className="container">
//       <div className={styles.buttons_wrapper}>
//         <ButtonSection text="Main Page" to="/" backgroundColor={"transparent"} />
//         <ButtonSection text="All products" to="/all_products" backgroundColor={"transparent"} />
//       </div>
//       <h2>All products</h2>
//       <div className={styles.sorted_section}>
//         <FilterPrice />
//         <DiscountedCheckBox setShowDiscounted={setShowDiscounted} showDiscounted={showDiscounted} />
//         <SorterSelect onChange={handleSortChange} />
//       </div>
//       <AllProducts products={sortedProducts}/>
//     </div>
//   );
// };

// export default AllProductsPage;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setMinPriceFilter, setMaxPriceFilter } from '../../redux/actions/productsActions';
import AllProducts from '../../components/AllProducts';
import SortFilteredComponents from '../../components/SortFilteredComponents';
import ButtonSection from '../../components/UI/ButtonSection';
import styles from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, filters } = useSelector(state => state.products);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredProducts = products.filter(product => {
    const price = product.discont_price ?? product.price;
    const meetsPriceCriteria = price >= filters.minPrice && price <= filters.maxPrice;
    const meetsDiscountCriteria = showDiscounted ? product.discont_price : true;
    return meetsPriceCriteria && meetsDiscountCriteria;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case 'newest':
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case 'price-high-low':
      sortedProducts.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price));
      break;
    case 'price-low-high':
      sortedProducts.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price));
      break;
    default:
      break;
  }

  return (
    <div className="container">
      <div className={styles.buttons_wrapper}>
        <ButtonSection text="Main Page" to="/" backgroundColor={"transparent"} />
        <ButtonSection text="All products" to="/all_products" backgroundColor={"transparent"} />
      </div>
      <h2>All products</h2>
      <div className={styles.sorted_section}>
        <SortFilteredComponents
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
          onDiscountChange={handleDiscountChange}
          onSortChange={handleSortChange}
          isDiscounted={showDiscounted}
        />
      </div>
      <AllProducts products={sortedProducts} />
    </div>
  );
};

export default AllProductsPage;
