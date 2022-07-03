import React, {useState} from 'react';

import SettingPersonalInfoView from "./setting-personal-info.view"

import {useFormik} from 'formik';

import * as yup from 'yup';

import { toast } from 'react-toastify';

import {api} from '@utils/api.util';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  // password: yup.string().min(6).requirыed(),
  phone: yup.string().min(10).required(),
});

const SettingPersonalInfoContainer = ({user, onSubmit, ...props}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      name: user?.name,
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
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    api.service('users').update({
      id: user?.id,
      email: values.email,
      phone: values.phone,
      name: values.name,
    }).then(async (res) => {
      setLoading(false)

      toast.update(notificationId, { 
        render: "Personal information updated successfully", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
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
