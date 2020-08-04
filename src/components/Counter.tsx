import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/types';

type Props = {};

const Counter: FC<Props> = props => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: RootState) => state.rootReducer.counter);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC', payload: 1})}>Increment sync</button>{' '}
      <button onClick={() => dispatch({ type: 'DECREMENT_ASYNC', payload: 1})}>Decrement sync</button>{' '}
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1})}>Increment</button>{' '}
      <button onClick={() => dispatch({ type: 'MINUS', payload: 1})}>Decrement</button>
      <hr />
      <div>Clicked: {counter} times</div>
    </div>
  );
};

export default Counter;
