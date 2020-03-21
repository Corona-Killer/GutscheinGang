import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer,
  devTools: true,
  middleware: [
    ...getDefaultMiddleware()
  ]
});

export default store;

const state = store.getState();
export type StoreState = typeof state;
export type AppDispatch = typeof store.dispatch;
