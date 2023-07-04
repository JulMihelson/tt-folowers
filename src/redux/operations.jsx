import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a2974bb45881cc0ae5663e.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64a2974bb45881cc0ae5663e.mockapi.io/users'
      );
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
    const response = await axios.put(
      `https://64a2974bb45881cc0ae5663e.mockapi.io/users/${id}`,
      { isFollow, followers }
    );
    return response.data;
  }
);
