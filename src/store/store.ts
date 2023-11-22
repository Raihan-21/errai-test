import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./data";

const store = configureStore({
  reducer: {
    results: resultSlice,
  },
});

export default store;
