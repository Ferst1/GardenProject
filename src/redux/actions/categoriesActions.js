import axios from 'axios';
import baseUrl from '../../instance';
import { actionTypes } from '../categoriesReducer';

const fetchCategoriesRequest = () => ({
  type: actionTypes.FETCH_CATEGORIES_REQUEST,
});

const fetchCategoriesSuccess = (categories) => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

const fetchCategoriesFailure = (error) => ({
  type: actionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const response = await axios.get(`${baseUrl}/categories/all`);
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  };
};



