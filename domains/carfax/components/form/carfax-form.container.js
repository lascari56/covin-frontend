import React, {useState} from 'react';

import CarfaxFormView from "./carfax-form.view"

import {useFormik} from 'formik';

import * as yup from 'yup';

import { toast } from 'react-toastify';

import {api} from '@utils/api.util';

const validationSchema = yup.object().shape({
  vin: yup.string().min(17).max(17).required(),
});

const CarfaxFormContainer = ({...props}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      vin: null
    },
    validationSchema,
    onSubmit: (values) => {
      handleSend(values)
    },
  });

  const handleSend = ({vin}) => {
    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    // console.log("values", values);

    api.service('report').create({
      vin,
      source_group: 'carfax',
    }).then(async (res) => {
      setLoading(false)

      props.onRefreshData();

      toast.update(notificationId, { 
        render: "Carfax successfully purchased", 
        type: "success", 
        isLoading: false , 
        autoClose: 500, 
      })
    }).catch((e) => {
      console.log("carfax-buy-err", e);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 1000 })
    })
  };

  return (
    <CarfaxFormView {...props} formik={formik} loading={loading} />
  );
}

export default CarfaxFormContainer;
