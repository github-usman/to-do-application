import { configureStore } from '@reduxjs/toolkit';
import combinedReducers from './reducers/combinedReducers';

const store = configureStore({
  reducer: combinedReducers
});

export default store;