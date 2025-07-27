import { configureStore } from '@reduxjs/toolkit';
import reelsReducer from './reelsSlice';

export const store = configureStore({
  reducer: {
    reels: reelsReducer,
  },
});
