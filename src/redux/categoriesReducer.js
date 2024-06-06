
export const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const actionTypes = {
  FETCH_CATEGORIES_REQUEST: 'FETCH_CATEGORIES_REQUEST',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',
  
};

export function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_REQUEST:
   
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_CATEGORIES_SUCCESS:
    
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case actionTypes.FETCH_CATEGORIES_FAILURE:
   
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default categoriesReducer;
