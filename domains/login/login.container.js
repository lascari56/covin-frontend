import React, {useState} from 'react';

import LoginView from "./login.view"

import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

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

  const handleSend = ({email, password}) => {
    const notificationId = toast.loading("Please wait...")

    api.authenticate({
      strategy: 'local',
      email,
      password,
    }).then(async (res) => {
      await dispatch(saveToken(res.accessToken));
      await dispatch(saveUser(res.user));

      console.log("res", res);

      toast.update(notificationId, { 
        render: "Login success", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
        onClose: () => router.push('/cabinet/lots')})
    }).catch((e) => {
      console.log("authError", e);

      toast.update(notificationId, { render: "Login or password is incorrect", type: "error", isLoading: false, autoClose: 2000 })
    })
  };

  return (
    <LoginView {...props} formik={formik} loading={loading} />
  );
}

export default LoginContainer;
