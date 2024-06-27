
import { actionTypes } from './actionTypes';

export const initialState = {
  products: [],
  product: null,
  favorites: [],
  loading: false,
  error: null,
  filters: {
    minPrice: 0,
    maxPrice: Infinity,
  },
  sortBy: 'default',
  showDiscounted: false,
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

    case actionTypes.SET_MIN_PRICE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          minPrice: action.payload,
        },
      };

    case actionTypes.SET_MAX_PRICE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          maxPrice: action.payload,
        },
      };

    case actionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload };

    case actionTypes.SET_SHOW_DISCOUNTED:
      return { ...state, showDiscounted: action.payload };

    case actionTypes.SET_FILTERED_AND_SORTED_PRODUCTS:
      return { ...state, filteredAndSortedProducts: action.payload };

    default:
      return state;
  }
}

export default productsReducer;
