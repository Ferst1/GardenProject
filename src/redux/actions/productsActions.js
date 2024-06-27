
import axios from 'axios';
import { actionTypes } from '../actionTypes';
import baseUrl from '../../instance';
import { sortProducts } from '../../utils';

export const setMinPriceFilter = (minPrice) => ({
  type: actionTypes.SET_MIN_PRICE_FILTER,
  payload: minPrice,
});

export const setMaxPriceFilter = (maxPrice) => ({
  type: actionTypes.SET_MAX_PRICE_FILTER,
  payload: maxPrice,
});

export const setSortBy = (sortBy) => ({
  type: actionTypes.SET_SORT_BY,
  payload: sortBy,
});

export const setShowDiscounted = (showDiscounted) => ({
  type: actionTypes.SET_SHOW_DISCOUNTED,
  payload: showDiscounted,
});

export const addToFavorites = (product) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: product,
});

export const removeFromFavorites = (product) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: product,
});

export const incrementProductCount = (productId) => ({
  type: actionTypes.INCREMENT_PRODUCT_COUNT,
  payload: productId,
});

export const decrementProductCount = (productId) => ({
  type: actionTypes.DECREMENT_PRODUCT_COUNT,
  payload: productId,
});

const fetchProductsRequest = () => ({ type: actionTypes.FETCH_PRODUCTS_REQUEST });
const fetchProductsSuccess = (products) => ({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: products });
const fetchProductsFailure = (error) => ({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error });

const fetchProductsByCategoryRequest = () => ({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST });
const fetchProductsByCategorySuccess = (products) => ({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, payload: products });
const fetchProductsByCategoryFailure = (error) => ({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE, payload: error });

export const fetchProduct = (productId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCT_REQUEST });
  try {
    const response = await axios.get(`${baseUrl}/products/${productId}`);
    const product = Array.isArray(response.data) ? response.data[0] : response.data;
    dispatch({ type: actionTypes.FETCH_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_PRODUCT_FAILURE, payload: error.message });
  }
};

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await axios.get(`${baseUrl}/products/all`);
    setTimeout(() => {
      dispatch(fetchProductsSuccess(response.data));
      dispatch(filterAndSortProducts());
    }, 2000); 
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  dispatch(fetchProductsByCategoryRequest());
  try {
    const response = await axios.get(`${baseUrl}/categories/${categoryId}`);
    setTimeout(() => {
      dispatch(fetchProductsByCategorySuccess(response.data.data));
      dispatch(filterAndSortProducts());
    }, 2000); 
  } catch (error) {
    dispatch(fetchProductsByCategoryFailure(error.message));
  }
};

export const filterAndSortProducts = () => (dispatch, getState) => {
  const { products, filters, sortBy, showDiscounted } = getState().products;

  const filteredProducts = products.filter(product => {
    const price = product.discont_price ?? product.price;
    const meetsPriceCriteria = price >= filters.minPrice && price <= filters.maxPrice;
    const meetsDiscountCriteria = showDiscounted ? product.discont_price : true;
    return meetsPriceCriteria && meetsDiscountCriteria;
  });

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  dispatch({ type: actionTypes.SET_FILTERED_AND_SORTED_PRODUCTS, payload: sortedProducts });
};
