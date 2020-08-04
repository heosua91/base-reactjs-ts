import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { plus, minus } from '../actions/counter';

export default createReducer(0)
  .handleAction(plus, (state, action) => state + action.payload)
  .handleAction(minus, (state, action) => state - action.payload);
