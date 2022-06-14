import {createSlice} from '@reduxjs/toolkit';
import {userLogin, getCompanySettings, editUser} from './authReducer.thunk';

const initialState = {
  user: {
    loading: false,
    error: null,
    data: null,
  },

  token: null,
};

const authSlice = createSlice({
  name: 'auth',
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
    [userLogin.fulfilled]: (state, {payload}) => {
      state.user.loading = false;
      state.user.error = false;
      state.user.data = payload.user || state.user.data;
      state.token = payload.token || state.token;
      state.usid = payload.usid || state.usid;
      state.userInfo.data = payload.userInfo || state.userInfo.data;
      state.twoFA = payload.twoFA || state.twoFA;
    },
    [userLogin.pending]: state => {
      state.user.loading = true;
      state.user.error = null;
    },
    [userLogin.rejected]: (state, {payload}) => {
      state.user.error = payload;
      state.user.loading = false;
      state.user.data = null;
    },

    // [editUser.fulfilled]: (state, {payload}) => {
    //   state.userInfo.loading = false;
    //   state.userInfo.error = false;
    //   state.userInfo.data = payload;
    // },
    // [editUser.pending]: state => {
    //   state.userInfo.loading = true;
    //   state.userInfo.error = null;
    // },
    // [editUser.rejected]: (state, {payload}) => {
    //   state.userInfo.error = payload;
    //   state.userInfo.loading = false;
    // },
  },
});

export const {clean, saveToken} = authSlice.actions;
export default authSlice;
