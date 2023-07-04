import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUsers } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    isFollow: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUsers.fulfilled, (state, { payload }) => {
        state.data = state.data.map(el =>
          el.id === payload.id ? payload : el
        );
      });
  },
});

export default usersSlice.reducer;
export { fetchUsers };
