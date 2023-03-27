import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';

const rootReducerWrapper = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};

// REDUX STORE
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducerWrapper;
