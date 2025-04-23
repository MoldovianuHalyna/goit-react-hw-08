import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};
export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFiter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFiter } = slice.actions;
