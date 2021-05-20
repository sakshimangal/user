import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from './reducers';
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    user: fetchReducer,
  },
  middleware: [thunk],
});
