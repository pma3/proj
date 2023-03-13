import { configureStore } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzasDisplaySlice";

export let store = configureStore({
  reducer: {
    pizzasSlice,
  },
});
