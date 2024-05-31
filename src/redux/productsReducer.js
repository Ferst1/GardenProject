export const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  export const actionTypes = {
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
  };
  
  export function productReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case actionTypes.FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload, 
        };
  
      case actionTypes.FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default productReducer;
  