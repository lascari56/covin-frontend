import React from 'react';

import TrackingCreateNameView from "./tracking-create-name.view"

import {useFormik} from 'formik';

const TrackingCreateFiltersContainer = ({...props}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      // handleFilter(values)
    },
  });

  return (
    <TrackingCreateNameView {...props} formik={formik} />
  );
}

export default TrackingCreateFiltersContainer;
