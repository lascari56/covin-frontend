import React from 'react';

import * as yup from 'yup';

import TrackingCreateNameView from "./tracking-create-name.view"

import {useFormik} from 'formik';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
});

const TrackingCreateFiltersContainer = ({...props}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // handleFilter(values)
    },
  });

  return (
    <TrackingCreateNameView {...props} formik={formik} />
  );
}

export default TrackingCreateFiltersContainer;
