import React, {useState} from 'react';

import LoginView from "./login.view"

import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router'

// import {selectUser} from '@store/authReducers/authReducer.selector';

import {saveUser, saveToken} from '@store/authReducers/authReducer.slice';

import {api} from '@utils/api.util';

const LoginContainer = ({...props}) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log("handleSend");
      handleSend(values)
    },
  });

  const handleSend = async ({email, password}) => {
    console.log("handleSend");
    setLoading(true)

    api.authenticate({
      strategy: 'local',
      email,
      password,
    }).then(async (res) => {
      await dispatch(saveToken(res.accessToken));
      await dispatch(saveUser(res.user));

      router.push('/cabinet/lots')

      console.log("res", res);
    }).catch((e) => {
      console.log("authError", e);
    })
  };

  return (
    <LoginView {...props} formik={formik} loading={loading} />
  );
}

export default LoginContainer;
