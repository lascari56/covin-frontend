import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api.util';

import axios from "axios"

export const getCounty = createAsyncThunk(
  'getCounty',
  async (body, {rejectWithValue, getState}) => {
    try {
      const {data} = await axios.get(`https://extreme-ip-lookup.com/json/?key=DGGNSMTry28Mg7RbwMbe`);

      console.log(data?.countryCode?.toLowerCase())

      return data?.countryCode?.toLowerCase();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);