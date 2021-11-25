import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./companies";
import itemsReducer from "./items";
import moneyReducer from "./money";

export default configureStore({
  reducer: {
    items: itemsReducer,
    companies: companiesReducer,
    money: moneyReducer,
  },
});
