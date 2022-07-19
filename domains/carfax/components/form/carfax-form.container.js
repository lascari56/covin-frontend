import React, {useMemo, useState} from 'react';

import CarfaxFormView from "./carfax-form.view"

import {useFormik} from 'formik';

import * as yup from 'yup';

import { toast } from 'react-toastify';

import {useDispatch} from 'react-redux';

import {getUser} from '@store/authReducers/authReducer.thunk';

import {api} from '@utils/api.util';
import type from 'domains/payments/components/subscription/components/type';

const validationSchema = yup.object().shape({
  vin: yup.string().min(17).max(17).required(),
});

const CarfaxFormContainer = ({...props}) => {
  const dispatch = useDispatch();

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

  const title = useMemo(() => {
    return props.type.slice(0, 1).toUpperCase() + props.type.slice(1);
  }, [props.type])

  const handleSend = ({vin}) => {
    // if (props.user.balance)

    setLoading(true);

    const notificationId = toast.loading("Please wait...")

    // console.log("values", values);

    api.service('report').create({
      vin,
      source_group: props.type,
    }).then(async (res) => {
      setLoading(false)

      formik.resetForm()

      props.onRefreshData();

      await dispatch(getUser())

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
    <CarfaxFormView {...props} title={title} formik={formik} loading={loading} />
  );
}

export default CarfaxFormContainer;
