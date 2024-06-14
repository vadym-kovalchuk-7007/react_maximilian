import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.vCounter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => { dispatch(counterActions.toggle()) };
  const onIncrementHandler = () => { dispatch(counterActions.increment()) }
  const onDecrementHandler = () => { dispatch(counterActions.decrement()) }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onDecrementHandler}>-</button>
        <button onClick={onIncrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter {showCounter ? 'hide' : 'show'}</button>
    </main>
  );
};

export default Counter;
