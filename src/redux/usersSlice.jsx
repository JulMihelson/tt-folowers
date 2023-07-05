import { createSlice } from '@reduxjs/toolkit';
import { fetchMoreUsers, fetchUsers, updateUsers } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    limit: 9,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUsers.fulfilled, (state, { payload }) => {
        state.data = state.data.map(el =>
          el.id === payload.id ? payload : el
        );
      })
      .addCase(fetchMoreUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMoreUsers.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.currentPage += 1;
        state.isLoading = false;
      })
      .addCase(fetchMoreUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
