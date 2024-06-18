export const initialState = {
    basket: [],
    loading: false,
    error: null,
  };
  
  export const actionTypes = {
    FETCH_BASKET_REQUEST: 'FETCH_BASKET_REQUEST',
    FETCH_BASKET_SUCCESS: 'FETCH_BASKET_SUCCESS',
    FETCH_BASKET_FAILURE: 'FETCH_BASKET_FAILURE',
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    INCREMENT_PRODUCT_COUNT: 'INCREMENT_PRODUCT_COUNT',
    DECREMENT_PRODUCT_COUNT: 'DECREMENT_PRODUCT_COUNT',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
  };
  
  export const addToBasket = (product) => ({
    type: actionTypes.ADD_TO_BASKET,
    payload: product,
  });
  
  export const incrementProductCount = (productId) => ({
    type: actionTypes.INCREMENT_PRODUCT_COUNT,
    payload: productId,
  });
  
  export const decrementProductCount = (productId) => ({
    type: actionTypes.DECREMENT_PRODUCT_COUNT,
    payload: productId,
  });
  
  export const removeFromBasket = (productId) => ({
    type: actionTypes.REMOVE_FROM_BASKET,
    payload: productId,
  });
  
  export function basketReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.FETCH_BASKET_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.FETCH_BASKET_SUCCESS:
        return {
          ...state,
          loading: false,
          basket: action.payload,
        };
      case actionTypes.FETCH_BASKET_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case actionTypes.ADD_TO_BASKET:
        const existingProduct = state.basket.find(item => item.id === action.payload.id);
        if (existingProduct) {
          return {
            ...state,
            basket: state.basket.map(item =>
              item.id === action.payload.id
                ? { ...item, count: (item.count ?? 0) + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            basket: [...state.basket, { ...action.payload, count: 1 }],
          };
        }
      case actionTypes.INCREMENT_PRODUCT_COUNT:
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.payload
              ? { ...item, count: (item.count ?? 0) + 1 }
              : item
          ),
        };
      case actionTypes.DECREMENT_PRODUCT_COUNT:
        return {
          ...state,
          basket: state.basket
            .map(item =>
              item.id === action.payload
                ? { ...item, count: Math.max((item.count ?? 0) - 1, 0) }
                : item
            )
            .filter(item => item.count > 0),
        };
      case actionTypes.REMOVE_FROM_BASKET:
        return {
          ...state,
          basket: state.basket.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  }
  
  export default basketReducer;
  
  