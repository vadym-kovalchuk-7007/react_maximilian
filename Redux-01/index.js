const redux = require('@reduxjs/toolkit');
const initialState = { counter: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "decrement": return {
      ...state,
      counter: state.counter - 1
    }
  }
  return state;
};
const store = redux.configureStore({ reducer: counterReducer });

const counterSubscriber = () => {
  const selectCounterValue = (state) => state.counter; //selector
  console.log(selectCounterValue(store.getState()));
}
store.subscribe(counterSubscriber);

const increment = () => ({ type: 'increment' })
const decrement = () => ({ type: 'decrement' })
store.dispatch(increment());
store.dispatch(decrement())
store.dispatch(decrement())