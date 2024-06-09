

import axios from 'axios';
import baseUrl from '../../instance';
import { actionTypes } from '../productsReducer';

const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

const fetchProductsFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

const fetchProductsByCategoryRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
});

const fetchProductsByCategorySuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  payload: products,
});

const fetchProductsByCategoryFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  payload: error,
});

const fetchProductRequest = () => ({
  type: actionTypes.FETCH_PRODUCT_REQUEST,
});

const fetchProductSuccess = (product) => ({
  type: actionTypes.FETCH_PRODUCT_SUCCESS,
  payload: product,
});

const fetchProductFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.get(`${baseUrl}/products/all`);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export const fetchProductsByCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(fetchProductsByCategoryRequest());
    try {
      const response = await axios.get(`${baseUrl}/categories/${categoryId}`);
      const products = response.data.data;
      dispatch(fetchProductsByCategorySuccess(products));
    } catch (error) {
      dispatch(fetchProductsByCategoryFailure(error.message));
    }
  };
};


export const fetchProduct = (productId) => {
  return async (dispatch) => {
    dispatch(fetchProductRequest());
    try {
      const response = await axios.get(`${baseUrl}/products/${productId}`);
      console.log('API response:', response.data);
      const product = Array.isArray(response.data) ? response.data[0] : response.data;
      dispatch(fetchProductSuccess(product));
    } catch (error) {
      console.error('API error:', error);
      dispatch(fetchProductFailure(error.message));
    }
  };
};


export const incrementProductCount = () => ({
  type: actionTypes.INCREMENT_PRODUCT_COUNT,
});

export const decrementProductCount = () => ({
  type: actionTypes.DECREMENT_PRODUCT_COUNT,
});