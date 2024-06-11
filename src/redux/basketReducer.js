export const initialState = {
    basket: [],
    loading: false,
    error: null,
};

export const actionTypes = {
    FETCH_BASKET_REQUEST: 'FETCH_BASKET_REQUEST',
    FETCH_BASKET_SUCCESS: 'FETCH_BASKET_SUCCESS',
    FETCH_BASKET_FAILURE: 'FETCH_BASKET_FAILURE',
};

export function basketReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_BASKET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
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
        default:
            return state;
    }
}

export default basketReducer