import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { fetchUsers } from './usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
store.dispatch(fetchUsers());

export default store;
