import { configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import { basketReducer } from './basketReducer';
import modalReducer from './modalReducer';
import themeReducer from './themeSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['basket', 'products', 'theme'],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  basket: basketReducer,
  modal: modalReducer,
  theme: themeReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export const persistor = persistStore(store);

export default store;
