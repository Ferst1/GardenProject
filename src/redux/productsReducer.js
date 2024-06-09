

export const initialState = {
  products: [],
  product: null,
  favorites: [], 
  loading: false,
  error: null,
};

export const actionTypes = {
  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
  FETCH_PRODUCTS_BY_CATEGORY_REQUEST: 'FETCH_PRODUCTS_BY_CATEGORY_REQUEST',
  FETCH_PRODUCTS_BY_CATEGORY_SUCCESS: 'FETCH_PRODUCTS_BY_CATEGORY_SUCCESS',
  FETCH_PRODUCTS_BY_CATEGORY_FAILURE: 'FETCH_PRODUCTS_BY_CATEGORY_FAILURE',
  FETCH_PRODUCT_REQUEST: 'FETCH_PRODUCT_REQUEST',
  FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_FAILURE: 'FETCH_PRODUCT_FAILURE',
  INCREMENT_PRODUCT_COUNT: 'INCREMENT_PRODUCT_COUNT',
  DECREMENT_PRODUCT_COUNT: 'DECREMENT_PRODUCT_COUNT',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
    case actionTypes.FETCH_PRODUCTS_BY_CATEGORY_REQUEST:
    case actionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
    case actionTypes.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.FETCH_PRODUCT_SUCCESS:
      const product = Array.isArray(action.payload) ? action.payload[0] : action.payload;
      console.log('Product received in reducer:', action.payload);
      return {
        ...state,
        loading: false,
        product: { ...product, count: product.count ?? 0 },
      };

    case actionTypes.FETCH_PRODUCTS_FAILURE:
    case actionTypes.FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
    case actionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.INCREMENT_PRODUCT_COUNT:
      return {
        ...state,
        product: { ...state.product, count: (state.product.count ?? 0) + 1 },
      };

    case actionTypes.DECREMENT_PRODUCT_COUNT:
      return {
        ...state,
        product: { ...state.product, count: Math.max((state.product.count ?? 0) - 1, 0) },
      };

    case actionTypes.ADD_TO_FAVORITES:
      console.log('Adding to favorites:', action.payload);
      if (!Array.isArray(state.favorites)) {
        console.error('favorites is not an array', state.favorites);
        return {
          ...state,
          favorites: [action.payload], 
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case actionTypes.REMOVE_FROM_FAVORITES:
      console.log('Removing from favorites:', action.payload);
      if (!Array.isArray(state.favorites)) {
        console.error('favorites is not an array', state.favorites);
        return {
          ...state,
          favorites: [], 
        };
      }
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default productsReducer;
