import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendSale = createAsyncThunk(
  'sale/sendSale',
  async (saleData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://telran-backend.onrender.com/sale/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    saleStatus: 'idle',
    saleError: null,
    saleResponse: null,
  },
  reducers: {
    clearOrderState: (state) => {
      state.saleStatus = 'idle';
      state.saleError = null;
      state.saleResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSale.pending, (state) => {
        state.saleStatus = 'loading';
      })
      .addCase(sendSale.fulfilled, (state, action) => {
        state.saleStatus = 'succeeded';
        state.saleResponse = action.payload;
      })
      .addCase(sendSale.rejected, (state, action) => {
        state.saleStatus = 'failed';
        state.saleError = action.payload;
      });
  },
});

export const { clearSaleState } = saleSlice.actions;

export default saleSlice.reducer;
