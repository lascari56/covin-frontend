import React from 'react'

import LotsFiltersView from "./lots-filters.view"

import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({});

export default function LotsFiltersContainer({onSubmit, ...props}) {
  const formik = useFormik({
    initialValues: {
      search: '',
      make: null,
      model: null,
    },
    validationSchema,
    onSubmit,
  });

  return (
    <LotsFiltersView {...props} formik={formik} />
  )
}
