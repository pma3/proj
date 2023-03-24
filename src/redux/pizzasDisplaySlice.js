import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categoryID: 0,
  sortType: { sortType: "rating", sortName: "популярности (ASC)" },
  searched: "",
};

let pizzasSlice = createSlice({
  name: "pizzaSlices",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setSearched(state, action) {
      state.searched = action.payload;
    },
  },
});

export let { setCategoryID, setSortType, setSearched } = pizzasSlice.actions;

export default pizzasSlice.reducer;
