import { createSlice } from "@reduxjs/toolkit";

export const money = createSlice({
  name: "money",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { incrementByAmount, decrementByAmount } = money.actions;

export default money.reducer;
