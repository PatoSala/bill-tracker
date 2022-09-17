import { configureStore } from '@reduxjs/toolkit';
import membersSlice from './Slices/membersSlice';

export const store = configureStore({
  reducer: {
    members: membersSlice
  },
})