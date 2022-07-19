import {createSlice} from '@reduxjs/toolkit';
import {getUser} from './authReducer.thunk';

const initialState = {
  // user: {
  //   loading: false,
  //   error: null,
  //   data: null,
  // },

  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, {payload}) => {
      state.token = payload;
    },
    saveUser: (state, {payload}) => {
      state.user = payload;
    },
    logout: state => {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state, {payload}) => {
      state.user = payload;
    },
  },
});

export const {saveToken, saveUser, logout} = authSlice.actions;
export default authSlice;
