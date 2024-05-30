import { actionTypes } from '../productsReducer';
import baseUrl from '../../instance';


const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (categories) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: categories,
});

const fetchProductsFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const response = await fetch(`${baseUrl}/categories/all`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};


