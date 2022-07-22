import React from 'react';

import Button from "@components/button"
import Popup from "@components/popup"

import {FormInput} from "@components/form"

const LotCommentaryView = ({formik, onClose}) => {
  return (
    <Popup 
      title="Send commentary"
      FooterComponent={<Button title="Send" size="small" disabled={!formik.values.comment} onClick={formik.handleSubmit} />}
      onClose={onClose}
    >
      <FormInput 
        value={formik.values.comment}
        placeholder="Enter commentary"
        isValid={!formik.touched.comment || !formik.errors.comment}
        autoFocus
        onChange={value => formik.setFieldValue('comment', value)}
        onKeyDown={(e) => e.key === "Enter" && formik.handleSubmit()}
      />
    </Popup>
  );
}

export default LotCommentaryView;
