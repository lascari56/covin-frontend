import React from 'react';

import LoginView from "./login.view"

import {useFormik} from 'formik';

const LoginContainer = ({...props}) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      passsword: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    },
  });

  return (
    <LoginView {...props} formik={formik} />
  );
}

export default LoginContainer;
