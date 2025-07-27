import { configureStore } from '@reduxjs/toolkit';
import reelsReducer from './slices/reelsSlice';
export const store = configureStore({
    reducer: {
        reels: reelsReducer,
    },
});