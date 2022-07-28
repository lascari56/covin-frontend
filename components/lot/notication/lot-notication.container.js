import React, {useState, useEffect, useMemo} from 'react';

import {useFormik} from 'formik';

import * as yup from 'yup';

import LotNoticationView from './lot-notication.view';

export default function LotNoticationContainer({navigation, onSubmit, ...props}) {
  const formik = useFormik({
    initialValues: {
      type: ["buy-now"],
      time: 15
    },
    // validationSchema,
    onSubmit: (values) => {
      // console.log("values", values);
      onSubmit(values)
      props.onClose()
    },
  });

  return (
    <LotNoticationView
      {...props}
      formik={formik}
    />
  );
}
