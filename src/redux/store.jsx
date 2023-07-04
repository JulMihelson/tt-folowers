import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
// store.dispatch(fetchUsers());

export default store;
