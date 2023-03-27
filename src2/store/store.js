import { configureStore } from '@reduxjs/toolkit';
// Logger with default options
import logger from 'redux-logger';
import rootReducerWrapper from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk';

export default configureStore({
  reducer: rootReducerWrapper,
  middleware: [ReduxThunk, logger]
});
