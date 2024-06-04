import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["products"],
};


const rootReducer = persistReducer(persistConfig, combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
}));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
