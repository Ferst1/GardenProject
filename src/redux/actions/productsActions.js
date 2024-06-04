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
            const response = await fetch(`${baseUrl}/products/all`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            dispatch(fetchProductsSuccess(data));
        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    };
}