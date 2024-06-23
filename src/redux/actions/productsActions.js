
import axios from 'axios';
import baseUrl from '../../instance';
import { actionTypes } from '../../redux/productsReducer';

export const setMinPriceFilter = (minPrice) => ({
  type: actionTypes.SET_MIN_PRICE_FILTER,
  payload: minPrice,
});

export const setMaxPriceFilter = (maxPrice) => ({
  type: actionTypes.SET_MAX_PRICE_FILTER,
  payload: maxPrice,
});

const fetchProductsRequest = () => ({ type: actionTypes.FETCH_PRODUCTS_REQUEST });
const fetchProductsSuccess = (products) => ({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: products });
const fetchProductsFailure = (error) => ({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error });

const fetchProductsByCategoryRequest = () => ({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST });
const fetchProductsByCategorySuccess = (products) => ({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS, payload: products });
const fetchProductsByCategoryFailure = (error) => ({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE, payload: error });

const fetchProductRequest = () => ({ type: actionTypes.FETCH_PRODUCT_REQUEST });
const fetchProductSuccess = (product) => ({ type: actionTypes.FETCH_PRODUCT_SUCCESS, payload: product });
const fetchProductFailure = (error) => ({ type: actionTypes.FETCH_PRODUCT_FAILURE, payload: error });

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await axios.get(`${baseUrl}/products/all`);

    

    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};


// export const fetchProducts = () => async (dispatch) => {
//   dispatch(fetchProductsRequest());
//   try {
//     const response = await new Promise((resolve) => {
//       setTimeout(async () => {
//         const res = await axios.get(`${baseUrl}/products/all`);
//         resolve(res);
//       }, 6000); 
//     });
//     dispatch(fetchProductsSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchProductsFailure(error.message));
//   }
// };

export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  dispatch(fetchProductsByCategoryRequest());
  try {
    const response = await axios.get(`${baseUrl}/categories/${categoryId}`);
    dispatch(fetchProductsByCategorySuccess(response.data.data));
  } catch (error) {
    dispatch(fetchProductsByCategoryFailure(error.message));
  }
};

export const fetchProduct = (productId) => async (dispatch) => {
  dispatch(fetchProductRequest());
  try {
    const response = await axios.get(`${baseUrl}/products/${productId}`);
    const product = Array.isArray(response.data) ? response.data[0] : response.data;
    dispatch(fetchProductSuccess(product));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};

export const incrementProductCount = (productId) => ({
  type: actionTypes.INCREMENT_PRODUCT_COUNT,
  payload: productId,
});

export const decrementProductCount = (productId) => ({
  type: actionTypes.DECREMENT_PRODUCT_COUNT,
  payload: productId,
});

export const addToFavorites = (product) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: product,
});

export const removeFromFavorites = (product) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: product,
});
