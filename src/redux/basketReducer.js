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
};

export const addToBasket = (product) => ({
    type: actionTypes.ADD_TO_BASKET,
    payload: product,
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
            return {
                ...state,
                basket: [...state.basket, action.payload], 
            };
        default:
            return state;
    }
}
