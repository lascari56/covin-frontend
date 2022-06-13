import React from 'react';

import LoginFormView from "./login-form.view"

import {useFormik} from 'formik';

const LoginFormContainer = ({...props}) => {
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
    <LoginFormView {...props} formik={formik} />
  );
}

export default LoginFormContainer;
