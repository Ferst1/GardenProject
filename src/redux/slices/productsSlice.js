import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../instance';

const initialState = {
  products: [],
  filteredAndSortedProducts: [],
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

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/products/all`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response.data);
        }, 1500); 
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/categories/${categoryId}`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response.data.data);
        }, 1500); 
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/products/${productId}`);
      const product = Array.isArray(response.data) ? response.data[0] : response.data;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(product);
        }, 1500); 
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setMinPriceFilter(state, action) {
      state.filters.minPrice = action.payload;
    },
    setMaxPriceFilter(state, action) {
      state.filters.maxPrice = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setShowDiscounted(state, action) {
      state.showDiscounted = action.payload;
    },
    setFilteredAndSortedProducts(state, action) {
      state.filteredAndSortedProducts = action.payload;
    },
    addToFavorites(state, action) {
      if (!state.favorites.some(fav => fav.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
    },
    incrementProductCount(state, action) {
      if (state.product && state.product.id === action.payload) {
        state.product.count = (state.product.count ?? 0) + 1;
      }
    },
    decrementProductCount(state, action) {
      if (state.product && state.product.id === action.payload) {
        state.product.count = Math.max((state.product.count ?? 0) - 1, 0);
      }
    },
    filterAndSortProducts(state) {
      let products = state.products;

      if (state.filters.minPrice !== null) {
        products = products.filter(product => (product.discont_price ?? product.price) >= state.filters.minPrice);
      }

      if (state.filters.maxPrice !== null) {
        products = products.filter(product => (product.discont_price ?? product.price) <= state.filters.maxPrice);
      }

      if (state.showDiscounted) {
        products = products.filter(product => product.discont_price);
      }

      switch (state.sortBy) {
        case 'newest':
          products.sort((a, b) => b.id - a.id);
          break;
        case 'price-high-low':
          products.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price));
          break;
        case 'price-low-high':
          products.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price));
          break;
        case 'price-asc':
          products.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price));
          break;
        case 'price-desc':
          products.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price));
          break;
        default:
          break;
      }

      state.filteredAndSortedProducts = products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredAndSortedProducts = action.payload;
        state.filters = initialState.filters; 
        state.sortBy = initialState.sortBy; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredAndSortedProducts = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = { ...action.payload, count: action.payload.count ?? 0 };
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setMinPriceFilter,
  setMaxPriceFilter,
  setSortBy,
  setShowDiscounted,
  setFilteredAndSortedProducts,
  addToFavorites,
  removeFromFavorites,
  incrementProductCount,
  decrementProductCount,
  filterAndSortProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
