import React from 'react';

import LotCommentaryView from "./lot-commentary.view"

import {useFormik} from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  comment: yup.string().required(),
});

const LotCommentaryContainer = ({value, onSubmit, ...props}) => {
  const formik = useFormik({
    initialValues: {
      comment: value || "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values?.comment)
      props.onClose()
    },
  });

  return (
    <LotCommentaryView {...props} formik={formik} />
  );
}

export default LotCommentaryContainer;
