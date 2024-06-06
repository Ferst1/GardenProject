import { actionTypes } from '../categoriesReducer';
import axios from 'axios'; 
import baseUrl from '../../instance';

const fetchProductsByCategoryRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
});

const fetchProductsByCategorySuccess = (categories) => ({
  type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
  payload: categories,
});

const fetchProductsByCategoryFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
  payload: error,
});

export const fetchProductsByCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(fetchProductsByCategoryRequest());
    try {
        const response = await axios.get(`${baseUrl}/categories/${categoryId}`); 
      dispatch(fetchProductsByCategorySuccess(response.data.data)); 
    } catch (error) {
      dispatch(fetchProductsByCategoryFailure(error.message)); 
    }
  };
};
