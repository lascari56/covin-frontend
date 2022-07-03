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
  // password: yup.string().min(6).requirыed(),
  phone: yup.string().min(10).required(),
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
    // console.log("user?.id", user?._id);
    // return;
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    api.service('users').update(user?._id, {
      email: values.email,
      phone: values.phone,
      username: values.username,
    }).then(async (res) => {
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
