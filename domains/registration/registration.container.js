import React, {useMemo, useState} from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
require('yup-phone');

import RegistrationView from "./registration.view"

import {useSelector, useDispatch} from 'react-redux';
import { useRouter } from 'next/router'

import {useFormik} from 'formik';

import {selectCountry} from '@store/commonReducers/commonReducer.selector';

import {api} from '@utils/api.util';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().min(10).required(),
  // phone: yup.string().phone().required(),
  password: yup.string().min(8).required(),
});

const RegistrationContainer = ({...props}) => {
  const county = useSelector(selectCountry);
  const router = useRouter()

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("handleSend");
      handleSend(values)
    },
  });

  const validItems = useMemo(() => {
    return {
      email: !formik.touched.email || !formik.errors.email,
      phone: !formik.touched.phone || !formik.errors.phone,
      password: !formik.touched.password || !formik.errors.password,
    };
  }, [formik.touched, formik.errors]);

  const isValid = useMemo(() => {
    let res = true;

    for (let item of Object.values(validItems)) {
      if (!item) res = false;
    }

    return res;
  }, [validItems]);

  const handleSend = ({email, phone, password}) => {
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    api.service('users').create({
      email,
      phone,
      password,
    }).then(async (res) => {
      toast.update(notificationId, { 
        render: "Register success", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
        onClose: () => {
          router.push('/')

          setLoading(false)
        }})
    }).catch((e) => {
      console.log("authError", e.code);
      let message = "Something went wrong, please try again!";

      if (e.code === 409) message = "This user already exists";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 2000 })
    })
  };

  return (
    <RegistrationView {...props} formik={formik} county={county} loading={loading} validItems={validItems} isValid={isValid} />
  );
}

export default RegistrationContainer;
