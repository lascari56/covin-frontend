import React, {useState} from 'react';

import SettingPersonalInfoView from "./setting-personal-info.view"

import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import * as yup from 'yup';

import { toast } from 'react-toastify';

import {saveUser} from '@store/authReducers/authReducer.slice';

import {api} from '@utils/api.util';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().min(10).required(),
  password: yup.string().min(6),
  passwordConfirm: yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([yup.ref('password')]) : field
  ),
  // passwordConfirm: yup.string()
  //   .min(6)
  //   .when('password', (password, field) =>
  //   password ? field.required() : field
  //   ),
});

const SettingPersonalInfoContainer = ({user, onSubmit, ...props}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      username: user?.username,
      phone: user?.phone,
      password: null,
      passwordConfirm: null,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSend(values)
    },
  });

  const handleSend = (values) => {
    console.log("values", values);
    // return;
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    let data = {
      email: values.email,
      phone: values.phone,
      username: values.username,
    };

    if (values.password) data.password = values.password

    api.service('users').patch(user?._id, data).then(async (res) => {
      setLoading(false)

      console.log("res", res);

      await dispatch(saveUser(res))

      toast.update(notificationId, { 
        render: "Personal information updated successfully", 
        type: "success", 
        isLoading: false , 
        autoClose: 1000, 
      })
    }).catch((e) => {
      console.log("user-update-err", e);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 1000 })
    })
  };

  return (
    <SettingPersonalInfoView {...props} formik={formik} loading={loading} />
  );
}

export default SettingPersonalInfoContainer;
