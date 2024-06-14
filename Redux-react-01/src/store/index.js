import { configureStore, createSlice } from '@reduxjs/toolkit';
import { counterActions, counterSliceReducer } from './counter';

export const increment = () => ({ type: 'increment' });
export const decrement = () => ({ type: 'decrement' });
export const toggle = () => ({ type: 'toggle' });
const initialAuthState = { isAuth: false };

const authSlice = createSlice({
  name: 'Authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) { state.isAuth = true; },
    logout(state) { state.isAuth = false; }
  }
})

/*const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'decrement': return {
      ...state,
      counter: state.counter - 1,
    }
    case "toggle": return {
      ...state,
      showCounter: !state.showCounter,
    }
    default: return state;
  }
}

const store = configureStore({ reducer: counterReducer }); */

const store = configureStore({ reducer: { counter: counterSliceReducer, auth: authSlice.reducer } });
console.log('counter state from store', store.getState());

export default store;
export const authActions = authSlice.actions;
export { counterActions };
