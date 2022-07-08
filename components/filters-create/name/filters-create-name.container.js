import React from 'react';

import * as yup from 'yup';

import TrackingCreateNameView from "./filters-create-name.view"

import {useFormik} from 'formik';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
});

const TrackingCreateFiltersContainer = ({onSubmit, ...props}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values?.name)
    },
  });

  return (
    <TrackingCreateNameView {...props} formik={formik} />
  );
}

export default TrackingCreateFiltersContainer;
