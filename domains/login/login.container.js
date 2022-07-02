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

      // toast.promise(
      //   handleSend,
      //   {
      //     pending: 'Promise is pending',
      //     success: 'Promise resolved 👌',
      //     error: 'Promise rejected 🤯'
      //   }
      // )
    },
  });

  // const resolveWithSomeData = new Promise(resolve => {
  //   api.authenticate({
  //     strategy: 'local',
  //     email,
  //     password,
  //   }).then(async (res) => {
  //     // await dispatch(saveToken(res.accessToken));
  //     // await dispatch(saveUser(res.user));

  //     // router.push('/cabinet/lots')

  //     console.log("res", res);

  //     resolve();
  //   }).catch((e) => {
  //     resolve();
  //     console.log("authError", e);
  //   })
  // });

  const handleSend = ({email, password}) => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('foo');
    //   }, 300);
    // });
    // console.log("handleSend");

    // return new Promise(resolve => {
    //   setTimeout(resolve, 3000)
    // })

    // toast.success("Login Success!");
    // setLoading(true)

    const notificationId = toast.loading("Please wait...")

    api.authenticate({
      strategy: 'local',
      email,
      password,
    }).then(async (res) => {
      await dispatch(saveToken(res.accessToken));
      await dispatch(saveUser(res.user));

      router.push('/cabinet/lots')

      console.log("res", res);

      toast.update(notificationId, { render: "Login success", type: "success", isLoading: false , autoClose: 2000});
    }).catch((e) => {
      console.log("authError", e);

      toast.update(notificationId, { render: "Login or password is incorrect", type: "error", isLoading: false, autoClose: 2000 });
    })

    // toast.promise(
    //     res,
    //     {
    //       pending: 'Promise is pending',
    //       success: 'Promise resolved 👌',
    //       error: 'Promise rejected 🤯'
    //     }
    //   )
  };

  return (
    <LoginView {...props} formik={formik} loading={loading} />
  );
}

export default LoginContainer;
