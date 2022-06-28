import React from 'react';

import ForgotView from "./forgot.view"

import {useFormik} from 'formik';

const ForgotContainer = ({...props}) => {
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
    <ForgotView {...props} formik={formik} />
  );
}

export default ForgotContainer;
