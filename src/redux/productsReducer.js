
export const initialState = {
  products: [],
  loading: false,
  error: null,
  // saleProducts: [],

};

export const actionTypes = {
  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST: 'FETCH_PRODUCTS_BY_CATEGORY_REQUEST',
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS: 'FETCH_PRODUCTS_BY_CATEGORY_SUCCESS',
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE: 'FETCH_PRODUCTS_BY_CATEGORY_FAILURE',


};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
    case actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.FETCH_PRODUCTS_FAILURE:
    case actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default productsReducer;


  