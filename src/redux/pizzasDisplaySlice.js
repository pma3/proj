import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categoryID: 0,
};

let pizzasSlice = createSlice({
  name: "pizzaSlices",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },
  },
});

export let { setCategoryID } = pizzasSlice.actions;

export default pizzasSlice.reducer;
