import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api.util';

export const getLots = createAsyncThunk(
  'getLots',
  async (body, {rejectWithValue, getState}) => {
    try {
      // const {data} = await api.get(`/lots`);
      const data = await api.service('cars').find({})

      return data;
    } catch (err) {
      console.log("err", err);
      return rejectWithValue(err);
    }
  },
);
