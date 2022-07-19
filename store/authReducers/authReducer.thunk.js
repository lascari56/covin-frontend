import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, setHeader} from '../../utils/api.util';

// export const userLogin = createAsyncThunk(
//   'userLogin',
//   async (body, {rejectWithValue, getState, dispatch}) => {
//     const {
//       auth: {usid},
//     } = getState();

//     const {email, password, twoFA} = body;

//     try {
//       let formData = {
//         username: email,
//         password,
//         usid,
//       };

//       const {data} = await api.post('/jwt/auth', formData);

//       setHeader(data.token);

//       // const user = jwtDecode(data.token);

//       let _usid = usid;

//       if (_usid?.indexOf(data.usid) === -1) {
//         _usid = [..._usid, data.usid];
//       }

//       const userInfo = await dispatch(getUserInfo({id: user.id}));

//       return {user, token: data, usid: _usid, userInfo: userInfo.payload.data};
//     } catch (err) {
//       console.log('userLogin', err);

//       return rejectWithValue(err);
//     }
//   },
// );

export const getUser = createAsyncThunk(
  'getUser',
  async (body, {rejectWithValue, getState}) => {
    const {
      auth: {
        user: {
          _id
        },
      },
    } = getState();

    try {
      const data = await api.service("users").get(_id);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// export const editUser = createAsyncThunk(
//   'editUser',
//   async (body, {rejectWithValue, getState, dispatch}) => {
//     try {
//       const {
//         auth: {
//           user: {
//             data: {id},
//           },
//         },
//       } = getState();

//       const {
//         data: {data},
//       } = await api.put(`/users/${id}`, body);

//       return data;
//     } catch (err) {
//       console.log('editUser', err);

//       return rejectWithValue(err);
//     }
//   },
// );
