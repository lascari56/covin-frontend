import React from 'react';

import RegistrationView from "./registration.view"

import {useSelector, useDispatch} from 'react-redux';

import {useFormik} from 'formik';

import {selectCountry} from '@store/commonReducers/commonReducer.selector';

const RegistrationContainer = ({...props}) => {
  const county = useSelector(selectCountry);

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
    <RegistrationView {...props} formik={formik} county={county} />
  );
}

export default RegistrationContainer;
