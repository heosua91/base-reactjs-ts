import { combineReducers } from 'redux';
import counter from './counter';

const rootState = combineReducers({
  counter,
});

export default rootState;