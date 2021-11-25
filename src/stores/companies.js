import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/companies";

// get all companies

export const getCompaniesAsync = createAsyncThunk(
  "companies/getCompaniesAsync",
  async () => {
    const { data } = await axios.get(API_URL);
    return await data;
  }
);

export const companies = createSlice({
  name: "company",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //   get companies
    [getCompaniesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCompaniesAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getCompaniesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default companies.reducer;
