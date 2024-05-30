import { createAsyncThunk } from "@reduxjs/toolkit";


const allCategories = createAsyncThunk(
    "products/allCategories",
    async () => {
        const response = await fetch(
            ""
        );
        return response.json();
    }
)
export const fetchProducts = createAsyncThunk()
