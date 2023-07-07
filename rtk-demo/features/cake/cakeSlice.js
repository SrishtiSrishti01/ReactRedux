const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
});
