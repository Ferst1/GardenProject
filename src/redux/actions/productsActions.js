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
