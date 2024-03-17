import { createSlice } from "@reduxjs/toolkit";


// making a slice for counter
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.nums);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.nums);
    },
  },
});


export const counterAction = counterSlice.actions;
export default counterSlice
