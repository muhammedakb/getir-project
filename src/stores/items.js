import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/items";

// get all items

export const getItemsAsync = createAsyncThunk(
  "items/getItemsAsync",
  async () => {
    const { data } = await axios.get(API_URL);
    return await data;
  }
);

export const items = createSlice({
  name: "item",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getItemsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getItemsAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getItemsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default items.reducer;
