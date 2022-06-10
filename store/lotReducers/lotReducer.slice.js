import {createSlice} from '@reduxjs/toolkit';
import {getLots} from './lotReducer.thunk';

const initialState = {
  lots: {
    loading: false,
    error: null,
    data: null,
    total: 0,
    limit: 0,
    skip: 0,
  },
};

const lotSlice = createSlice({
  name: 'lot',
  initialState,
  reducers: {},
  extraReducers: {
    // [getLots.fulfilled]: (state, {payload}) => {
    //   state.lots.loading = false;
    //   state.lots.error = false;
    //   state.lots.data = payload.data;
    //   state.lots.total = payload.total;
    //   state.lots.limit = payload.limit;
    //   state.lots.skip = payload.skip;
    // },
    // [getLots.pending]: state => {
    //   state.lots.loading = true;
    //   state.lots.error = null;
    // },
    // [getLots.rejected]: (state, {payload}) => {
    //   state.lots.error = payload;
    //   state.lots.loading = false;
    // },
  },
});

export const {} = lotSlice.actions;
export default lotSlice;
