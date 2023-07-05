import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a2974bb45881cc0ae5663e.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const currentPage = thunkAPI.getState().users.currentPage;
      const response = await axios.get('/users', {
        params: {
          page: currentPage,
          limit: 10,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateUsers = createAsyncThunk(
  'users/updateUsers',
  async ({ id, isFollow, followers }) => {
    const response = await axios.put(`/users/${id}`, { isFollow, followers });
    return response.data;
  }
);

export const fetchMoreUsers = createAsyncThunk(
  'users/fetchMoreUsers',
  async (_, thunkAPI) => {
    try {
      const currentPage = thunkAPI.getState().users.currentPage;
      const response = await axios.get('/users', {
        params: {
          page: currentPage + 1,
          limit: 10,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
