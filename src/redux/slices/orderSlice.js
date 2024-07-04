import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearBasket } from './basketSlice'; 

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async (orderData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('https://telran-backend.onrender.com/order/send', orderData);
      dispatch(clearBasket()); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    serverResponse: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.serverResponse = action.payload;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
