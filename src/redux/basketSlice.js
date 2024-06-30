// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   basket: [],
//   loading: false,
//   error: null,
// };

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     fetchBasketRequest(state) {
//       state.loading = true;
//     },
//     fetchBasketSuccess(state, action) {
//       state.loading = false;
//       state.basket = action.payload;
//     },
//     fetchBasketFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     addToBasket(state, action) {
//       const existingProduct = state.basket.find(item => item.id === action.payload.id);
//       if (existingProduct) {
//         existingProduct.count = (existingProduct.count ?? 0) + 1;
//       } else {
//         state.basket.push({ ...action.payload, count: 1 });
//       }
//     },
//     incrementProductCount(state, action) {
//       const product = state.basket.find(item => item.id === action.payload);
//       if (product) {
//         product.count = (product.count ?? 0) + 1;
//       }
//     },
//     decrementProductCount(state, action) {
//       const product = state.basket.find(item => item.id === action.payload);
//       if (product) {
//         product.count = Math.max((product.count ?? 0) - 1, 0);
//         if (product.count === 0) {
//           state.basket = state.basket.filter(item => item.id !== action.payload);
//         }
//       }
//     },
//     removeFromBasket(state, action) {
//       state.basket = state.basket.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const {
//   fetchBasketRequest,
//   fetchBasketSuccess,
//   fetchBasketFailure,
//   addToBasket,
//   incrementProductCount,
//   decrementProductCount,
//   removeFromBasket,
// } = basketSlice.actions;

// export default basketSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  loading: false,
  error: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    fetchBasketRequest(state) {
      state.loading = true;
    },
    fetchBasketSuccess(state, action) {
      state.loading = false;
      state.basket = action.payload;
    },
    fetchBasketFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToBasket(state, action) {
      const existingProduct = state.basket.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count = (existingProduct.count ?? 0) + 1;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    incrementProductCount(state, action) {
      const product = state.basket.find(item => item.id === action.payload);
      if (product) {
        product.count = (product.count ?? 0) + 1;
      }
    },
    decrementProductCount(state, action) {
      const product = state.basket.find(item => item.id === action.payload);
      if (product) {
        product.count = Math.max((product.count ?? 0) - 1, 0);
        if (product.count === 0) {
          state.basket = state.basket.filter(item => item.id !== action.payload);
        }
      }
    },
    removeFromBasket(state, action) {
      state.basket = state.basket.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  fetchBasketRequest,
  fetchBasketSuccess,
  fetchBasketFailure,
  addToBasket,
  incrementProductCount,
  decrementProductCount,
  removeFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
