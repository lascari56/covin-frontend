import {createSlice} from '@reduxjs/toolkit';

import {getCounty} from './commonReducer.thunk';

const initialState = {
  units: {
    speed: "miles"
  },

  country: null
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    saveUnits: (state, {payload}) => {
      state.units = {
        ...state.units,
        [payload.key]: payload.value
      };
    },
    clean: state => {
      state.units = initialState.units;
      state.country = initialState.country;
    },
  },
  extraReducers: {
    [getCounty.fulfilled]: (state, {payload}) => {
      state.country = payload;
    },
  },
});

export const {clean, saveUnits} = commonSlice.actions;
export default commonSlice;
