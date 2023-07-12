import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcecream: 15,
};

const icecreamSlice = createSlice({
  name: "IceCream",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIcecream--;
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecream--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});
export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;
