import React, {useState} from 'react';

import SettingPersonalInfoView from "./setting-personal-info.view"

import {useFormik} from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const SettingPersonalInfoContainer = ({user, ...props}) => {
  const [loading, setLoading] = useState(false);

  console.log(user)

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      name: user?.name,
      phone: user?.phone,
      password: null,
      passwordConfirm: null,
    },
    onSubmit: (values) => {
      console.log("handleSend");
      handleSend(values)
    },
  });

  return (
    <SettingPersonalInfoView {...props} formik={formik} loading={loading} />
  );
}

export default SettingPersonalInfoContainer;
