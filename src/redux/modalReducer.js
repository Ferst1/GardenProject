
import { OPEN_MODAL, CLOSE_MODAL } from '../../src/redux/actions/modalActions';

const initialState = {
  isOpen: false,
  content: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        content: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        content: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
