import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { vCounter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) { state.vCounter++ },
    decrement(state, action) { state.vCounter-- },
    toggle(state, action) { state.showCounter = !state.showCounter }
    //action.payload
  }
})

export const counterSliceReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
