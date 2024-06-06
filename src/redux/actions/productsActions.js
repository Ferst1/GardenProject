// import axios from 'axios';
// import baseUrl from '../../instance';
// import { actionTypes } from '../productsReducer';

// const fetchProductsRequest = () => ({
//     type: actionTypes.FETCH_PRODUCTS_REQUEST,
// });

// const fetchProductsSuccess = (products) => ({
//     type: actionTypes.FETCH_PRODUCTS_SUCCESS,
//     payload: products,
// });

// const fetchProductsFailure = (error) => ({
//     type: actionTypes.FETCH_PRODUCTS_FAILURE,
//     payload: error,
// });




// const fetchProductsByCategoryRequest = () => ({
//     type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
//   });
  
//   const fetchProductsByCategorySuccess = (products) => ({
//     type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
//     payload: products,
//   });
  
//   const fetchProductsByCategoryFailure = (error) => ({
//     type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
//     payload: error,
//   });
  


// export const fetchProducts = () => {
//     return async (dispatch) => {
//         dispatch(fetchProductsRequest());
//         try {
//             const response = await axios.get(`${baseUrl}/products/all`);
//             dispatch(fetchProductsSuccess(response.data));
//         } catch (error) {
//             dispatch(fetchProductsFailure(error.message));
//         }
//     };
// };


// export const fetchProductsByCategory = (categoryId) => {
//     return async (dispatch) => {
//       dispatch(fetchProductsByCategoryRequest());
//       try {
//         const response = await axios.get(`${baseUrl}/categories/${categoryId}/products`);
//         dispatch(fetchProductsByCategorySuccess(response.data));
//       } catch (error) {
//         dispatch(fetchProductsByCategoryFailure(error.message));
//       }
//     };
//   };

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

