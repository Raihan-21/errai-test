import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "results",
  initialState: {
    items: [],
    selectedUrl: "",
    isSelected: false,
  },
  reducers: {
    setResults(state, action) {
      state.items = action.payload;
      state.isSelected = false;
    },
    setUrl(state, action) {
      state.isSelected = true;
      state.selectedUrl = action.payload;
    },
  },
});

export const { setResults, setUrl } = resultSlice.actions;

export default resultSlice.reducer;
