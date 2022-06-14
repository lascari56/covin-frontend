import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  units: {
    speed: "miles"
  },
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
    },
  },
  extraReducers: {
  },
});

export const {clean, saveUnits} = commonSlice.actions;
export default commonSlice;
