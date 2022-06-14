import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    saveToken: (state, {payload}) => {
      state.token = payload;
    },
    clean: state => {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
  extraReducers: {
  },
});

export const {clean, saveToken} = commonSlice.actions;
export default commonSlice;
