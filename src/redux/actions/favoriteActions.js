import { actionTypes } from '../reducers/productsReducer';

export const addToFavorites = (product) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: product,
});
