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

// filter items with type
export const filterItemsType = createAsyncThunk(
  "items/filterItemsType",
  async (itemType) => {
    const { data } = await axios.get(`${API_URL}?itemType=${itemType}`);
    return await data;
  }
);

export const items = createSlice({
  name: "item",
  initialState: {
    items: [],
    basket: [],
    totalBasketAmount: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    removeToBasket: (state, action) => {
      // mutate
      state.basket = state.basket.filter(
        (item) => item.name !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      state.basket
        .filter((item) => item.name === action.payload)
        .map((item) => item.quantity + 1);
    },
    decrementQuantity: (state, action) => {
      state.basket
        .filter((item) => item.name === action.payload)
        .map((item) => item.quantity - 1);
    },
    getTotalAmount: (state, action) => {
      state.totalBasketAmount = state.basket
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0);
    },
    priceLowToHigh: (state, action) => {
      state.items = state.items.sort((a, b) => a.price - b.price);
    },
    priceHighToLow: (state, action) => {
      state.items = state.items.sort((a, b) => b.price - a.price);
    },
    newToOld: (state, action) => {
      state.items = state.items.reverse();
    },
    oldToNew: (state, action) => {
      state.items = state.items.reverse();
    },
  },
  extraReducers: {
    // GET ALL ITEMS
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
    // FILTER ITEMS (MUG, SHIRT)
    [filterItemsType.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [filterItemsType.pending]: (state, action) => {
      state.isLoading = true;
    },

    [filterItemsType.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {
  addToBasket,
  removeToBasket,
  incrementQuantity,
  decrementQuantity,
  getTotalAmount,
  priceLowToHigh,
  priceHighToLow,
  newToOld,
  oldToNew,
} = items.actions;
export default items.reducer;
